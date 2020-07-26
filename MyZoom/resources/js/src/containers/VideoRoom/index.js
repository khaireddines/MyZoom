import React, { useEffect, useState } from "react";
import Janus from "../../util/JanusES6.js";
import adapter from "webrtc-adapter";
import { useSelector, useDispatch } from "react-redux";
import { CHATROOM_MESSAGE_RECIVED } from "../../constants/ActionTypes";
import "./VideoRoom.css";
import VideoLayout from "../../components/video";
import { Redirect } from "react-router-dom";
import { Modal, Result, Button, Input, message } from "antd";
import {ExclamationCircleTwoTone} from "@ant-design/icons";
const { Search } = Input;
const { info } = Modal;
const decodenum = string => {
    let result;
    try {
        result=window.atob(window.atob(window.atob(string)))
    } catch (error) {
        result=0;
    }
    return result;
};
const VideoRoom = props => {
    const { authUser, tokens } = useSelector(({ auth }) => auth);
    const dispatch = useDispatch();
    if (tokens == null) {
        window.location.replace("/");
    }
    let janus = null;
    const server = "https://acelens.me:8089/janus";
    const myroom = parseInt(decodenum(props.roomID));
    const myusername = authUser.name;
    const myid = authUser.id;
    let mystream = null;
    const opaqueId = "videoroom-" + Janus.randomString(12);
    let SFUHandler = null;
    let screenType = "screen";
    let peoplesIn = 0;
    const [ exist, setExist ] = useState(null);
    const [ IsPrivate, setIsPrivate ] = useState(null);
    const [ Handler, setHandler ] = useState(null);
    const createRoom = () => {
        var body = {
            request: "create",
            room: myroom,
            is_private: false,
            videocodec: "vp9"
        };
        SFUHandler.send({ message: body });
    };
    const RejoinWithPin = (pin) =>{
        var body = {
            request: "join",
            room: myroom,
            ptype: "publisher",
            display: myusername,
            id: myid,
            pin:pin
        };
        Handler.send({ message: body });
    }
    const joinRoom = () => {
        var audio = new Audio("/assets/sounds/recived.mp3");
        window.Echo.join(`ChatRoom_${myroom}`)
            .here(users => {
                console.log(users);
            })
            .listen("Send_ChatRoom_Message", e => {
                dispatch({ type: CHATROOM_MESSAGE_RECIVED, payload: e });
                audio.play();
            });
        var body = {
            request: "join",
            room: myroom,
            ptype: "publisher",
            display: myusername,
            id: myid
        };
        SFUHandler.send({ message: body });
    };
    const publishOwnFeed = () => {
        SFUHandler.createOffer({
            media: {
                audioRecv: false,
                videoRecv: false,
                audioSend: true,
                videoSend: false
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
                    if (event === "joined") {
                        peoplesIn = msg["publishers"].length;
                    }
                    if (event === "attached") {
                        // Subscriber created and attached
                        SFURemoteHandler.rfid = msg["id"];
                        SFURemoteHandler.rfdisplay = msg["display"];

                        //updateView(grid);
                        /* let videoTagold = `
                        <div class="ant-col ant-col-${grid}" style="padding-left: 2px;padding-right: 2px;justify-content: center;align-items: center;display: flex;">
                            <video id="remote${msg["id"]}" autoplay="" playsinline="" ></video>
                            <div class="overlay-1YJlCn"><div class="size16-1P40sf overlayTitle-8IcS01 idle-U-LIlZ"><span class="overlayTitleText-2mmQzi">${SFURemoteHandler.rfdisplay}</span></div><div class="statusContainer-1gtabC"></div></div>
                        </div>
                        `; */
                        let videoTag = `
                        <div>
                            <div>
                                <video id="remote${msg["id"]}" autoplay="" playsinline="" ></video>
                                <div class="overlay-1YJlCn"><div class="size16-1P40sf overlayTitle-8IcS01 idle-U-LIlZ"><span class="overlayTitleText-2mmQzi">${SFURemoteHandler.rfdisplay}</span></div><div class="statusContainer-1gtabC"></div></div>
                            </div>
                        </div>
                        `;
                        let frame = document.createElement("div");

                        frame.innerHTML = videoTag.trim();
                        console.log(frame.firstChild);
                        document
                            .getElementById("layout")
                            .appendChild(frame.firstChild);
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
                document
                    .getElementById(`remote${SFURemoteHandler.rfid}`)
                    .parentElement.parentElement.remove();
                peoplesIn -= 1;
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
                                setHandler(pluginHandler);
                                Janus.log(
                                    "Plugin attached! (" +
                                        SFUHandler.getPlugin() +
                                        ", id=" +
                                        SFUHandler.getId() +
                                        ")"
                                );
                                Janus.log("  -- This is a publisher/manager");
                                // create the room
                                //createRoom(); // TODO : to be removed from here and added where the user will create a link for video chat
                                // check for the room before creating it using exists
                                // Register the current user
                                joinRoom();
                                /* SFUHandler.send({"message":{
                                    "request" : "list"}}) to check for the list of available channels */
                                /* SFUHandler.send({"message":{"request" : "listparticipants", "room": myroom }}) for list of participants */
                                publishOwnFeed();
                                //publishShareScreen();
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
                                if (msg['videoroom']==='event') {
                                    if (msg['error_code']) {
                                        if (msg['error_code']==426) 
                                        setExist(false);
                                        if (msg['error_code']==429) 
                                        setIsPrivate(true);    
                                        if (msg['error_code']==433) 
                                        message.error('Unauthorized Password !!, Please try again');    
                                        
                                        
                                        
                                    }else
                                    setExist(true);
                                    
                                }
                                if (msg['videoroom']==="joined") {
                                    setIsPrivate(null);
                                    setHandler(SFUHandler);
                                    setExist(true);
                                }
                                if(msg['videoroom']==="destroyed")
                                {
                                    const model=info({
                                        title:'Ops! Room Got Deleted',
                                        icon: <ExclamationCircleTwoTone />,
                                        content: 'We Will redirect you back home after 2 sec'
                                    })
                                    setTimeout(() => {
                                        model.destroy();
                                        SFUHandler.send({message:{request:'leave'}});
                                        window.location.replace('/');
                                    }, 2000);
                                    
                                }
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
                                /* Janus.attachMediaStream(
                                    document.getElementById("myvideo"),
                                    stream
                                ); */
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
            {(IsPrivate != null) ?(
                <Result
                status="403"
                title="Room Password"
                subTitle="Sorry, you are not authorized to access unless you provide a password."
                extra=
                    {<>
                        <Search placeholder="Room Password"
                        onSearch={pin => RejoinWithPin(pin)} 
                        enterButton 
                        style={{ width: '30%' }}
                        />
                    </>}
              />
            ):(Handler != null && exist != null) && (
                <VideoLayout myroom={myroom} SFUHandler={Handler} RoomExist={exist} />
            )}
        </>
    );
};
export default VideoRoom;
