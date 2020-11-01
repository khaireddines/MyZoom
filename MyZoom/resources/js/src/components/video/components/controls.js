import React, { useState, useEffect } from "react";
import { Popover, message } from "antd";
import {
    CommentOutlined,
    TeamOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined,
    AudioOutlined,
    AudioMutedOutlined,
    VideoCameraOutlined,
    FundViewOutlined,
    FundProjectionScreenOutlined
} from "@ant-design/icons";
import "./controls.css";
import Axios from "../../../util/Api";
import { useSelector } from "react-redux";
import Janus from "../../../util/JanusES6";
import adapter from "webrtc-adapter";
import Moment from "moment";
var classNames = require('classnames');
let iconStyle = {
    fontSize: "24px",
    color: "#b9bbbe"
};
let videoiconStyleWhite = {
    fontSize: "24px",
    color: "#fff"
};
let videoiconStyleBlack = {
    fontSize: "24px",
    color: "#2f3136"
};
const Controls = ({ RoomName, SFUHandler, RightSider, LeftSider, myroom }) => {
    const { authUser } = useSelector(state => state.auth);
    let screenType = "screen";
    let publish = {
        request: "configure",
        audio: true,
        video: true,
        videocodec: "vp9"
    };
    const [CameraActive, setCameraActive] = useState(false);
    let CameraClassNames = classNames(
        'centerButton-3CaNcJ',
        'controlButton-2MhVEL',
        'button-38aScr',
        'lookBlank-3eh9lL',
        'colorBrand-3pXr91',
        'grow-q77ONN',
        {
            'active': CameraActive
        }
    );
    const [ShareScreenActive, setShareScreenActive] = useState(false);
    let ShareScreenClassNames = classNames(
        'centerButton-3CaNcJ',
        'controlButton-2MhVEL',
        'button-38aScr',
        'lookBlank-3eh9lL',
        'colorBrand-3pXr91',
        'grow-q77ONN',
        {
            'active': ShareScreenActive
        }
    );
    const [MicrophoneActive, setMicrophoneActive] = useState(false);
    let MicrophoneClassNames = classNames(
        'centerButton-3CaNcJ',
        'controlButton-2MhVEL',
        'button-38aScr',
        'lookBlank-3eh9lL',
        'colorBrand-3pXr91',
        'grow-q77ONN',
        {
            // Active here mean button clicked and microphone muted !!
            'active': MicrophoneActive
        }
    );
    const refreshVideo = () => {
        SFUHandler.createOffer({
            media: { addVideo: true },
            success: jsep => {
                SFUHandler.send({
                    message: { audio: true, video: true },
                    jsep: jsep
                });
            }
        });
        SFUHandler.createOffer({
            media: { video: "stdres", replaceVideo: true },
            success: jsep => {
                SFUHandler.send({
                    message: publish,
                    jsep: jsep
                });
            }
        });
    };
    const [FullScreenActive, setFullScreenActive] = useState(false);
    const ToggleFullscreen = () => {
        if (document.fullscreenElement) {
            setFullScreenActive(false);
            document.exitFullscreen();
        } else {
            setFullScreenActive(true);
            document.documentElement.requestFullscreen();
        }
    };

    const ToggleCamera = () => {
        let videoOff = SFUHandler.isVideoMuted();
        if (videoOff) {
            setCameraActive(true);
            setShareScreenActive(false);
            refreshVideo();
            SFUHandler.unmuteVideo();
        } else {
            SFUHandler.muteVideo();
            SFUHandler.createOffer({
                media: { removeVideo: true },
                success: async jsep => {
                    setCameraActive(false);
                    await SFUHandler.send({
                        message: { ...publish, video: false },
                        jsep: jsep
                    });
                }
            });
        }

        videoOff = SFUHandler.isVideoMuted();
    };
    const [Muted, setMuted] = useState(false);
    const MuteSelfIfPresentInMuteConfigFile = async () => {
        let Res = await Axios.post('api/CheckIfAmMuted', { RoomId: myroom });
        if (Res.status === 200) {
            if (Res.data) {
                MuteIfTrueRecieved(Res.data);
            }
        }
    }
    const MuteIfTrueRecieved = (Muted) => {
        setMuted(Muted);
        setMicrophoneActive(Muted);
        if (Muted) {
            SFUHandler.muteAudio();
            message.warn(<span id="Muted">You Have Been Muted By RoomOwner!</span>, 3);
            document.getElementById('Mute').setAttribute("disabled", "true");
        } else {
            SFUHandler.unmuteAudio();
            message.success(<span id="Unmuted">You Have Been Unmuted By RoomOwner ^ç^</span>, 3);
            document.getElementById('Mute').removeAttribute("disabled");
        }

    }
    const [AllowSS, setAllowSS] = useState(false);
    const AllowSelfShareScreenWhenTrue = (Allow) => {
        setAllowSS(Allow);
        /* setShareScreenActive(Allow); */
        if (Allow) {
            message.success(<span id="Unmuted">Share Screen Permission Granted By Room Owner ^ç^</span>, 3);
            document.getElementById('AllowSS').removeAttribute("disabled");
        } else {
            SFUHandler.muteVideo();
            setShareScreenActive(false);
            SFUHandler.createOffer({
                media: { removeVideo: true },
                success: async jsep => {
                    setCameraActive(false);
                    await SFUHandler.send({
                        message: { ...publish, video: false },
                        jsep: jsep
                    });
                }
            });
            message.warn(<span id="Muted">Share Screen Permission Revoked !</span>, 3);
            document.getElementById('AllowSS').setAttribute("disabled", "true");

        }
    }
    const ToggleMicrophone = () => {
        let micOff = SFUHandler.isAudioMuted();
        if (micOff) {
            SFUHandler.unmuteAudio();
            setMicrophoneActive(false);
        }
        else {
            SFUHandler.muteAudio();
            setMicrophoneActive(true);
        }

        micOff = SFUHandler.isAudioMuted();
    };
    const HangUpCall = () => {
        SFUHandler.send({ message: { request: 'leave' } });
        window.location.replace('/');
    }
    const publishShareScreen = () => {
        preShareScreen();

        SFUHandler.createOffer({
            media: { removeVideo: true },
            success: jsep => {
                setCameraActive(false);
                SFUHandler.send({
                    message: publish,
                    jsep: jsep
                });
            }
        });
        SFUHandler.createOffer({
            media: { video: screenType, replaceVideo: true },
            success: jsep => {
                setShareScreenActive(true);
                SFUHandler.send({
                    message: publish,
                    jsep: jsep
                });
            },
            error: () => {
                setShareScreenActive(false);
            }
        });
    };
    const [RecordOn, setRecordOn] = useState(false);
    const [RecordVideoOn, setRecordVideoOn] = useState(false);
    const [RecordShareScreenOn, setRecordShareScreenOn] = useState(false);
    const RecordShareScreen = () => {
        if(RecordVideoOn){
            preShareScreen();
            RecordHandlerInState.createOffer({
                media: { video: screenType, replaceVideo: true },
            });
            setRecordVideoOn(false);
            setRecordShareScreenOn(true);
        }
    }
    const RecordVideo = () => {
        if(RecordShareScreenOn){
            RecordHandlerInState.createOffer({
                media: { video: 'stdres', replaceVideo: true },
            });
            setRecordVideoOn(true);
            setRecordShareScreenOn(false);
        }
    }
    const StartRecord = () => {
        if(!RecordOn){
            RecordHandlerInState.createOffer({
            success: (jsep) => {
                let RecordName = JSON.stringify({ ...authUser, RoomId: myroom, RoomName: RoomName });
                let UniqueId = Math.floor(new Date().getTime() / 1000.0);
                Axios.post('api/storeRecord', { RecId: UniqueId, RecOwnerId: authUser.id, RoomId: myroom });
                var body = {
                    request: "record",
                    id: UniqueId,
                    name: RecordName,
                };
                RecordHandlerInState.send({ message: body, jsep: jsep });
                setRecordOn(true);
                setRecordVideoOn(true);
            }
        })}
        else{
            setRecordOn(false);
            setRecordVideoOn(false);
            setRecordShareScreenOn(false);
            RecordHandlerInState.send({message: {request:'stop'}})
        }
    }
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
                        callback: function () {
                            screenType = "screen";
                        }
                    },
                    window: {
                        label: "Pick a window",
                        className: "btn-success",
                        callback: function () {
                            screenType = "window";
                        }
                    }
                }
            });
        }
    };
    const [RoomOwnerIdState, setRoomOwnerIdState] = useState(null);
    const RoomOwnerId = async () => {
        let Res = await Axios.post('api/RoomOwnerId', { RoomId: myroom });
        if (Res.status === 200) {
            setRoomOwnerIdState(Res.data);
            if (Res.data != authUser.id) {
                document.getElementById('AllowSS').setAttribute("disabled", "true");
            } else {
                setAllowSS(true);
                AttachRecordIfRoomOwner();
            }
        }
    }
    let RecordHandler = null;
    let janus = null;
    const server = "https://acelens.me:8089/janus";
    const opaqueId = "RecordsOf-" + authUser.name + '-' + Janus.randomString(12);
    const [RecordHandlerInState, setRecordHandlerInState] = useState(null);
    const AttachRecordIfRoomOwner = () => {
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
                            },
                            onmessage: (msg, jsep) => {
                                Janus.log(msg);
                                if (jsep)
                                    RecordHandler.handleRemoteJsep({ jsep: jsep });
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
        MuteSelfIfPresentInMuteConfigFile();
        RoomOwnerId();
        window.Echo.join(`Muted_${authUser.id}_${myroom}`)
            .here(users => {
            })
            .listen("Muted", Event => {
                MuteIfTrueRecieved(Event.Muted);
            })
            .listen("AllowOrDisallowShareScreen", Event => {
                AllowSelfShareScreenWhenTrue(Event.AllowSS);
            });

    }, []);
    let recordsClassNames = classNames('anticon','anticon-video-camera',
    {
        'blink':RecordOn
    });

    return (
        <div id="controls" className="videoControls-24w7Xp">
            <div className="gradientContainer-10lXLB"></div>
            <div className="topControls-KKImPZ controlSection-2h3cS0">
                <div>
                    <div className="headerWrapper-3NUKsd">
                        <section className="theme-dark container-1r6BKw transparent-2ZlE3R">
                            <div className="children-19S4PO">
                                <div
                                    className="iconWrapper-2OrFZ1 focusable-1YV_-H"
                                    role="button"
                                    aria-label="Voice Channel"
                                    tabIndex="-1"
                                >
                                    <svg
                                        x="0"
                                        y="0"
                                        className="icon-22AiRD"
                                        aria-hidden="false"
                                        width="24"
                                        height="24"
                                        style={{ color: 'rgb(185, 187, 190)' }}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z"
                                        ></path>
                                    </svg>
                                </div>
                                <h3 className="title-29uC1r base-1x0h_U size16-1P40sf">
                                    {RoomName}
                                </h3>
                            </div>
                            {(authUser.id == RoomOwnerIdState)&&(<div style={{float:'right',marginRight:'5px',marginTop:'10px'}} >
                                <span type="button" className={`${RecordVideoOn ?'ActiveRec':'NotActive'}`} style={{position: 'absolute',top: '1rem',right: '7rem'}} onClick={(RecordVideoOn)? undefined : RecordVideo}> <VideoCameraOutlined style={iconStyle} /></span>
                                <span type="button" className={`${RecordShareScreenOn ?'ActiveRec':'NotActive'}`} style={{position: 'absolute',top: '1rem',right: '5rem'}} onClick={(RecordShareScreenOn)? undefined : RecordShareScreen}> <FundViewOutlined style={iconStyle} /></span>
                                <span type="button" style={{cursor: 'pointer',position: 'absolute',top: '0rem',right: '1rem'}} onClick={StartRecord}>
                                    <span className={recordsClassNames} style={{fontSize: '50px'}}>
                                        <svg id="Capa_1" width="1em" height="1em" viewBox="0 0 496.716 496.716"xmlns="http://www.w3.org/2000/svg">
                                            <g><circle cx="85.433" cy="248.358" fill="#e53829" r="75.432" /><g><g><g><path fill="#b9bbbe" d="m85.433 333.791c-47.108 0-85.433-38.326-85.433-85.433 0-13.967 3.448-27.827 9.971-40.086 2.595-4.874 8.65-6.723 13.526-4.13 4.875 2.595 6.725 8.65 4.13 13.526-4.989 9.375-7.627 19.989-7.627 30.69 0 36.08 29.353 65.433 65.433 65.433s65.433-29.353 65.433-65.433-29.353-65.433-65.433-65.433c-5.522 0-10-4.478-10-10s4.478-10 10-10c47.107 0 85.433 38.325 85.433 85.433s-38.326 85.433-85.433 85.433z" />
                                            </g></g><g><g><path fill="#b9bbbe" d="m203.259 308.964v-122.746c0-3.827 3.157-7.553 7.932-7.553h37.39c29.837 0 44.755 13.156 44.755 39.467 0 21.058-9.983 33.342-24.738 37.769l24.738 45.888c.629.756.945 1.766.945 3.021 0 9.101-17.262 19.654-23.795 6.988l-26.814-52.121h-15.863v49.287c-.001 10.347-24.55 10.27-24.55 0zm24.549-68.548h20.772c13.47 0 20.206-6.671 20.206-20.017 0-13.47-6.736-20.206-20.206-20.206h-20.772z" />
                                            </g><g><path fill="#b9bbbe" d="m310.896 308.964v-122.556c0-5.236 5.601-7.742 10.764-7.742h67.228c10.474 0 10.176 21.527 0 21.527h-53.441v37.768h28.703c10.161 0 10.409 19.262 0 19.262h-28.703v37.957h53.441c10.228 0 10.423 21.528 0 21.528h-67.228c-5.178 0-10.764-2.512-10.764-7.744z" />
                                            </g><g><path fill="#b9bbbe" d="m408.149 274.596v-52.686c0-14.854 4.027-25.777 12.086-32.764 8.055-6.987 18.568-10.48 31.537-10.48 23.989 0 44.943 12.267 44.943 35.879 0 8.703-2.896 12.086-12.275 12.086-8.058 0-12.15-2.578-12.273-7.742-.947-12.197-6.59-18.695-19.64-18.695-13.22 0-19.829 7.241-19.829 21.717v52.687c0 14.479 6.734 21.717 20.207 21.717 11.743 0 18.533-5.037 19.262-20.206.377-5.16 4.404-7.742 12.086-7.742 9.478 0 12.463 3.479 12.463 12.086 0 24.535-20.665 37.39-45.133 37.39-12.969 0-23.449-3.493-31.441-10.48-7.996-6.99-11.993-17.91-11.993-32.767z" />
                                            </g></g><g><g><path fill="#b9bbbe" d="m45.947 194.088c-5.522 0-10-4.465-10-9.987v-.024c0-5.522 4.478-10 10-10s10 4.478 10 10-4.477 10.011-10 10.011z" />
                                            </g></g></g></g>
                                        </svg>
                                    </span>
                                </span>
                            </div>)}
                        </section>
                    </div>
                </div>
            </div>
            <div className="bottomControls-lIJyYL controlSection-2h3cS0">
                <div
                    className="flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignCenter-1dQNNs noWrap-3jynv6"
                    style={{ flex: "0 1 50%" }}
                >
                    <div>
                        <Popover placement="topLeft" content={<div>Social</div>} trigger="hover">
                            <button
                                aria-label="Invite"
                                type="button"
                                className="leftTrayIcon-vpfJk5 button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN"
                                onClick={LeftSider}
                            >
                                <TeamOutlined style={iconStyle} />
                            </button>
                        </Popover>
                    </div>
                </div>
                <div
                    className="flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyCenter-3D2jYp alignCenter-1dQNNs noWrap-3jynv6"
                    style={{ flex: "1 1 auto" }}
                >
                    <div className="wrapper-3EGhDO">
                        <div>
                            <Popover content={<div>Turn On Camera</div>} trigger="hover">
                                <button
                                    aria-label="Turn On Camera"
                                    type="button"
                                    className={CameraClassNames}
                                    onClick={ToggleCamera}
                                >
                                    {(CameraActive) ? <VideoCameraOutlined style={videoiconStyleBlack} />
                                        : <VideoCameraOutlined style={videoiconStyleWhite} />}
                                </button>
                            </Popover>
                        </div>
                        <div>
                            <Popover content={(AllowSS) ? <div>Share Your Screen</div> : <div>Need Permission!!</div>} trigger="hover">
                                <button
                                    aria-label="Share Your Screen"
                                    type="button"
                                    id="AllowSS"
                                    className={ShareScreenClassNames}
                                    onClick={(AllowSS) ? publishShareScreen : undefined}
                                >
                                    {(ShareScreenActive) ? <FundViewOutlined style={videoiconStyleBlack} />
                                        : <FundProjectionScreenOutlined style={videoiconStyleWhite} />}
                                </button>
                            </Popover>
                        </div>
                        <div>
                            <Popover content={(Muted) ? <div>Mute By Room Owner</div> : <div>Mute</div>} trigger="hover">
                                <button
                                    aria-label="Mute"
                                    type="button"
                                    className={MicrophoneClassNames}
                                    onClick={(!Muted) ? ToggleMicrophone : undefined}
                                    id="Mute"
                                >
                                    {(MicrophoneActive) ? <AudioMutedOutlined style={videoiconStyleBlack} />
                                        : <AudioOutlined style={videoiconStyleWhite} />}

                                </button>
                            </Popover>
                        </div>
                        <div>
                            <Popover content={<div>Disconnect</div>} trigger="hover">
                                <button
                                    aria-label="Disconnect"
                                    type="button"
                                    className="centerButton-3CaNcJ leaveButton-2YnTyt controlButton-2MhVEL button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN"
                                    onClick={HangUpCall}
                                >
                                    <div className="contents-18-Yxp lineHeightReset-3dQm1W">
                                        <svg
                                            className="controlIcon-35oS15 centerIcon-2G6o-T"
                                            aria-hidden="false"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M21.1169 1.11603L22.8839 2.88403L19.7679 6.00003L22.8839 9.11603L21.1169 10.884L17.9999 7.76803L14.8839 10.884L13.1169 9.11603L16.2329 6.00003L13.1169 2.88403L14.8839 1.11603L17.9999 4.23203L21.1169 1.11603ZM18 22H13C6.925 22 2 17.075 2 11V6C2 5.447 2.448 5 3 5H7C7.553 5 8 5.447 8 6V10C8 10.553 7.553 11 7 11H6C6.063 14.938 9 18 13 18V17C13 16.447 13.447 16 14 16H18C18.553 16 19 16.447 19 17V21C19 21.553 18.553 22 18 22Z"
                                            ></path>
                                        </svg>
                                    </div>
                                </button>
                            </Popover>
                        </div>
                    </div>
                </div>
                <div
                    className="flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyEnd-2E6vba alignCenter-1dQNNs noWrap-3jynv6"
                    style={{ flex: "0 1 50%" }}
                >
                    <div>
                        <Popover content={<div>Group Chat</div>} trigger="hover">
                            <button
                                aria-label="Pop Out"
                                type="button"
                                className="rightTrayIcon-3hFoUP button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN"
                                onClick={RightSider}
                            >
                                <CommentOutlined style={iconStyle} />
                            </button>
                        </Popover>
                    </div>
                    <div>
                        <Popover placement="topRight" content={<div>Full Screen</div>} trigger="hover">
                            <button
                                aria-label="Full Screen"
                                type="button"
                                className="rightTrayIcon-3hFoUP button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN"
                                onClick={ToggleFullscreen}
                            >
                                {(FullScreenActive) ? <FullscreenExitOutlined style={iconStyle} />
                                    : <FullscreenOutlined style={iconStyle} />}
                            </button>
                        </Popover>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Controls;
