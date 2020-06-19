import React, { useEffect, useState } from "react";
import Janus from "../../util/JanusES6.js";
import adapter from "webrtc-adapter";
import { useSelector } from "react-redux";
import "./VideoRoom.css";
import VideoLayout from "../../components/video";

const VideoRoom = props => {
    const { authUser } = useSelector(({ auth }) => auth);
    let janus = null;
    const server = "https://acelens.me:8089/janus";
    const myroom = parseInt(props.roomID);
    const myusername = authUser.name;
    const myid = authUser.id;
    let mystream = null;
    const opaqueId = "videoroom-" + Janus.randomString(12);
    let SFUHandler = null;
    let screenType = "screen";
    const createRoom = () => {
        var body = {
            request: "create",
            room: myroom,
            is_private: false,
            videocodec: "vp9"
        };
        SFUHandler.send({ message: body });
    };
    const joinRoom = () => {
        var body = {
            request: "join",
            room: myroom,
            ptype: "publisher",
            display: myusername,
            id: myid
        };
        SFUHandler.send({ message: body });
    };
    const preShareScreen = () => {
        if (navigator.mozGetUserMedia) {
            // Firefox needs a different constraint for screen and window sharing
            bootbox.dialog({
                title: "Share whole screen or a window?",
                message:
                    "Firefox handles screensharing in a different way: are you going to share the whole screen, or would you rather pick a single window/application to share instead?",
                buttons: {
                    screen: {
                        label: "Share screen",
                        className: "btn-primary",
                        callback: function() {
                            screenType = "screen";
                        }
                    },
                    window: {
                        label: "Pick a window",
                        className: "btn-success",
                        callback: function() {
                            screenType = "window";
                        }
                    }
                }
            });
        }
    };
    const publishShareScreen = () => {
        preShareScreen();
        SFUHandler.createOffer({
            media: { video: screenType, audio: true, videoRecv: false },
            success: jsep => {
                var ShareScreen = {
                    request: "configure",
                    audio: true,
                    video: true
                };
                SFUHandler.send({ message: ShareScreen, jsep: jsep });
            }
        });
    };
    const publishOwnFeed = () => {
        SFUHandler.createOffer({
            media: {
                audioRecv: false,
                videoRecv: false,
                audioSend: true,
                videoSend: true
            },
            success: jsep => {
                var publish = {
                    request: "configure",
                    audio: true,
                    video: true,
                    videocodec: "vp9"
                };
                SFUHandler.send({ message: publish, jsep: jsep });
            }
        });
    };
    const newRemoteFeed = id => {
        var SFURemoteHandler = null;
        janus.attach({
            plugin: "janus.plugin.videoroom",
            opaqueId: opaqueId,
            success: pluginHandle => {
                SFURemoteHandler = pluginHandle;
                Janus.log(
                    "Plugin attached! (" +
                        SFURemoteHandler.getPlugin() +
                        ", id=" +
                        SFURemoteHandler.getId() +
                        ")"
                );
                Janus.log("  -- This is a subscriber");
                var subscribe = {
                    request: "join",
                    room: myroom,
                    ptype: "subscriber",
                    feed: id,
                    videocodec: "vp9"
                };
                SFURemoteHandler.send({ message: subscribe });
            },
            onmessage: (msg, jsep) => {
                Janus.log(msg);
                var event = msg["videoroom"];
                if (event) {
                    if (event === "attached") {
                        // Subscriber created and attached
                        SFURemoteHandler.rfid = msg["id"];
                        SFURemoteHandler.rfdisplay = msg["display"];
                        let videoTag=`
                        <div class="ant-col ant-col-6" style="padding-left: 2px; padding-right: 2px;">
                            <video id="remote${msg["id"]}" autoplay="" playsinline="" width="100%"></video>
                        </div>
                        `;
                        let frame = document.createElement("div");
                        
                        frame.innerHTML = videoTag.trim();
                        console.log(frame.firstChild);
                        document.getElementById("layout").appendChild(frame.firstChild);
                    }
                }
                if (jsep) {
                    Janus.debug("Handling SDP as well...", jsep);
                    // Answer and attach
                    SFURemoteHandler.createAnswer({
                        jsep: jsep,
                        // Add data:true here if you want to subscribe to datachannels as well
                        // (obviously only works if the publisher offered them in the first place)
                        media: { audioSend: false, videoSend: false }, // We want recvonly audio/video
                        success: jsep => {
                            Janus.log("Got SDP!", jsep);
                            var body = { request: "start", room: myroom };
                            SFURemoteHandler.send({
                                message: body,
                                jsep: jsep
                            });
                        },
                        error: error => {
                            Janus.log("WebRTC error:", error);
                        }
                    });
                }
            },
            onremotestream: stream => {
                
                 Janus.attachMediaStream(
                    document.getElementById(`remote${SFURemoteHandler.rfid}`),
                    stream
                );
            },
            oncleanup: () => {
                document.getElementById(`remote${SFURemoteHandler.rfid}`).parentElement
                .remove();
                
                
            }
        });
    };
    useEffect(() => {
        Janus.init({
            debug: true,
            dependencies: Janus.useDefaultDependencies({ adapter }),
            callback: () => {
                janus = new Janus({
                    server: server,
                    success: () => {
                        // Done! attach to plugin XYZ
                        janus.attach({
                            plugin: "janus.plugin.videoroom",
                            opaqueId: opaqueId,
                            success: pluginHandler => {
                                SFUHandler = pluginHandler;
                                Janus.log(
                                    "Plugin attached! (" +
                                        SFUHandler.getPlugin() +
                                        ", id=" +
                                        SFUHandler.getId() +
                                        ")"
                                );
                                Janus.log("  -- This is a publisher/manager");
                                // create the room
                                createRoom(); // TODO : to be removed from here and added where the user will create a link for video chat
                                // check for the room before creating it using exists
                                // Register the current user
                                joinRoom();
                                /* SFUHandler.send({"message":{
                                    "request" : "list"}}) to check for the list of available channels */
                                /* SFUHandler.send({"message":{"request" : "listparticipants", "room": myroom }}) for list of participants */
                                publishOwnFeed();
                                //publishShareScreen();
                                SFUHandler.send({
                                    message: { request: "publish" }
                                });
                            },
                            error: error => {
                                Janus.error(
                                    "  -- Error attaching plugin...",
                                    error
                                );
                                bootbox.alert(
                                    "Error attaching plugin... " + error
                                );
                            },
                            consentDialog: isOn => {
                                // Tell the user to allow his Media Devices if isOn = false
                            },
                            mediaState: (medium, isOn) => {
                                // a callback function to tell you if janus is reciving your media or not
                            },
                            onmessage: (msg, jsep) => {
                                Janus.log(" ::: Got a message (publisher) :::");
                                Janus.log(msg);
                                if (jsep !== undefined && jsep !== null) {
                                    Janus.debug("Handling SDP as well...");
                                    Janus.debug(jsep);
                                    // Answer and attach
                                    SFUHandler.handleRemoteJsep({ jsep: jsep });
                                }
                                if (msg["publishers"]) {
                                    var list = msg["publishers"];
                                    Janus.debug(
                                        "Got a list of available publishers/feeds:",
                                        list
                                    );
                                    for (var f in list) {
                                        var id = list[f]["id"];
                                        var display = list[f]["display"];
                                        var audio = list[f]["audio_codec"];
                                        var video = list[f]["video_codec"];
                                        Janus.debug(
                                            "  >> [" +
                                                id +
                                                "] " +
                                                display +
                                                " (audio: " +
                                                audio +
                                                ", video: " +
                                                video +
                                                ")"
                                        );
                                        newRemoteFeed(id); // , display, audio, video
                                    }
                                }
                            },
                            onlocalstream: stream => {
                                Janus.debug(" ::: Got a local stream :::");
                                mystream = stream;
                                // attatch the stream to the video tag
                                Janus.attachMediaStream(
                                    document.getElementById("myvideo"),
                                    stream
                                );
                            },
                            onremotestream: stream => {
                                // that's a send only method
                            },
                            oncleanup: () => {
                                Janus.log(
                                    " ::: Got a cleanup notification: we are unpublished now :::"
                                );
                                mystream = null;
                            }
                        });
                    },
                    error: function(cause) {
                        // Error, can't go on...
                        Janus.error(error);
                        /* bootbox.alert(error, function() {
                            window.location.reload();
                        }); */
                    },
                    destroyed: function() {
                        // I should get rid of this
                        window.location.reload();
                    }
                });
            }
        });
    }, []);

    return (
        <>
            {/* <h1>{props.roomID}</h1>
            <h1>{server}</h1>
            <h1>{myroom}</h1>
            <h1>{myusername}</h1>
            <h1>{myid}</h1>
            <h1>{opaqueId}</h1>
            
            <video id="myvideo" autoPlay playsInline muted="muted" />
            <video id="remotevideo" autoPlay playsInline /> */}

            <VideoLayout />
        </>
    );
};
export default VideoRoom;
