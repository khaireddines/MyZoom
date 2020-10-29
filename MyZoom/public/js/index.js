import React, { useEffect, useState } from 'react';
import './Records.css';
import { useSelector } from "react-redux";
import Janus from "../../util/JanusES6";
import adapter from "webrtc-adapter";

const Records = ({ }) => {
    const { authUser } = useSelector(state => state.auth);
    let RecordHandler = null;
    let janus = null;
    const server = "https://acelens.me:8089/janus";
    var bandwidth = 1024 * 1024;
    const opaqueId = "RecordsOf-" + authUser.name + '-' + Janus.randomString(12);
    const [RecordHandlerInState, setRecordHandlerInState] = useState(null);
    const playRecord = () => {
        var play = { request: "play", id: 1234 };
        RecordHandlerInState.send({ message: play })
    }
    const InitRecordPlugIn = () => {
        Janus.init({
            debug: true,
            dependencies: Janus.useDefaultDependencies({ adapter }),
            callback: () => {
                janus = new Janus({
                    server: server,
                    success: () => {
                        janus.attach({
                            plugin: "janus.plugin.recordplay",
                            opaqueId: opaqueId,
                            success: pluginHandler => {
                                RecordHandler = pluginHandler;
                                setRecordHandlerInState(pluginHandler);
                                Janus.log(
                                    "Plugin attached! (" +
                                    RecordHandler.getPlugin() +
                                    ", id=" +
                                    RecordHandler.getId() +
                                    ")"
                                );
                                var rec = { request: "list" };
                                RecordHandler.send({
                                    message: rec, success: (result) => {
                                        console.log(result);
                                    }
                                });

                            },
                            onmessage: (msg, jsep) => {
                                Janus.log(msg);
                                var result = msg["result"];
                                if (result) {
                                    if (result["status"]) {
                                        var event = result["status"];
                                        if (event === 'preparing' || event === 'refreshing') {
                                            Janus.log("Preparing the recording playout");
                                            RecordHandler.createAnswer(
                                                {
                                                    jsep: jsep,
                                                    media: { audioSend: false, videoSend: false },	// We want recvonly audio/video
                                                    success: function (jsep) {
                                                        Janus.debug("Got SDP!", jsep);
                                                        var body = { request: "start" };
                                                        RecordHandler.send({ message: body, jsep: jsep });
                                                    },
                                                    error: function (error) {
                                                        Janus.error("WebRTC error:", error);
                                                        //bootbox.alert("WebRTC error... " + error.message);
                                                    }
                                                });
                                        }
                                    } else if (event === 'slow_link') {
                                        var uplink = result["uplink"];
                                        if (uplink !== 0) {
                                            // Janus detected issues when receiving our media, let's slow down
                                            bandwidth = parseInt(bandwidth / 1.5);
                                            RecordHandler.send({
                                                message: {
                                                    request: 'configure',
                                                    'video-bitrate-max': bandwidth,		// Reduce the bitrate
                                                    'video-keyframe-interval': 15000	// Keep the 15 seconds key frame interval
                                                }
                                            });
                                        }
                                    }
                                }
                            },
                            onlocalstream: (stream) => {
                                Janus.attachMediaStream(document.getElementById('RecordPlay'), stream);
                            },
                            error: error => {
                                Janus.error(
                                    "  -- Error attaching plugin...",
                                    error
                                );
                            }
                        })
                    }
                })
            }
        })
    }
    useEffect(() => {
        InitRecordPlugIn();
    }, [])
    return (
        <div>
            <button onClick={playRecord} >Play me </button>
            <video id="RecordPlay" width={320} height={240} autoPlay playsInline ></video>
        </div>
    )
}

export default Records
