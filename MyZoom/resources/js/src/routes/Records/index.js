import React, { useEffect, useState } from 'react';
import './Records.css';
import { useSelector } from "react-redux";
import Janus from "../../util/JanusES6";
import adapter from "webrtc-adapter";
import MainFrame from "./components/index";

const Records = ({ }) => {
    const { authUser } = useSelector(state => state.auth);
    let RecordHandler = null;
    let janus = null;
    const server = "https://acelens.me:8089/janus";
    var bandwidth = 1024 * 1024;
    const opaqueId = "RecordsOf-" + authUser.name + '-' + Janus.randomString(12);
    const [RecordHandlerInState, setRecordHandlerInState] = useState(null);
    const [recordsList, setRecordList] = useState(null);
    const [playing, setplaying] = useState(false);
    //const [RecordId, setRecordId] = useState(null);
    let RecordId = null;
    let InitRecordPlugIn = () => {
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
                                // We Update old list first
                                var update = { request: "update" };
                                RecordHandler.send({
                                    message: update, success: () => {
                                        var rec = { request: "list" };
                                        RecordHandler.send({
                                            message: rec, success: (result) => {
                                        setRecordList(result.list);
                                    }
                                });
                                    }
                                });
                                
                            },
                            onmessage: (msg, jsep) => {
                                Janus.log(msg);
                                var result = msg["result"];
                                var messageResult = msg["result"];
                                if (result) {
                                    if (result["status"]) {
                                        var event = result["status"];
                                        if (event === 'preparing' || event === 'refreshing') {
                                            RecordId=messageResult['id'];
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
                            onremotestream: (stream) => {
                                if (RecordId != null) {
                                    Janus.attachMediaStream(document.getElementById(`thepreview_${RecordId}`), stream);
                                }
                                /* var videoTracks = stream.getVideoTracks(); */
                            },
                            error: error => {
                                Janus.error(
                                    "  -- Error attaching plugin...",
                                    error
                                );
                            },
                            destroyed: function () {
                                window.location.reload();
                            }
                        })
                    }
                })
            }
        })
    }
    useEffect(() => {
        InitRecordPlugIn();
    }, []);
    
    {/* <div>
            <video className="rounded centered" id="thevideo" width={320} height={240} autoPlay playsInline controls /> 
    </div> */}
    return (
        <>
        {(recordsList!=null)&&
            <MainFrame recordsList={recordsList} RecordHandlerInState={RecordHandlerInState} ></MainFrame>
        }
        </>
    )
}

export default Records
