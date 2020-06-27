import React,{ useState } from "react";
import { Popover } from "antd";
import "./controls.css";
var classNames = require('classnames');
const Controls = ({ RoomName, SFUHandler, RightSider, LeftSider }) => {
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
            'active':CameraActive
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
            'active':ShareScreenActive
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
            'active':MicrophoneActive
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

    const ToggleFullscreen = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
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
    const ToggleMicrophone = () => {
        let micOff = SFUHandler.isAudioMuted();
        if (micOff) 
            {
                SFUHandler.unmuteAudio();
                setMicrophoneActive(false);
            }
        else 
            {
                SFUHandler.muteAudio();
                setMicrophoneActive(true);
            }

        micOff = SFUHandler.isAudioMuted();
    };
    const HangUpCall = () =>{
        SFUHandler.send({message:{request:'leave'}});
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
            error: ()=>{
                setShareScreenActive(false);
            }
        });
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
                    <Popover placement="topLeft" content={<div>Invite Person</div>} trigger="hover">
                        <button
                            aria-label="Invite"
                            type="button"
                            className="leftTrayIcon-vpfJk5 button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN"
                            onClick={LeftSider}
                        >
                            <div className="contents-18-Yxp lineHeightReset-3dQm1W">
                                <svg
                                    className="controlIcon-35oS15"
                                    aria-hidden="false"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13 2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z"
                                    ></path>
                                </svg>
                            </div>
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
                                            d="M21.526 8.149C21.231 7.966 20.862 7.951 20.553 8.105L18 9.382V7C18 5.897 17.103 5 16 5H4C2.897 5 2 5.897 2 7V17C2 18.104 2.897 19 4 19H16C17.103 19 18 18.104 18 17V14.618L20.553 15.894C20.694 15.965 20.847 16 21 16C21.183 16 21.365 15.949 21.526 15.851C21.82 15.668 22 15.347 22 15V9C22 8.653 21.82 8.332 21.526 8.149Z"
                                        ></path>
                                    </svg>
                                </div>
                            </button>
                            </Popover>
                        </div>
                        <div>
                        <Popover content={<div>Share Your Screen</div>} trigger="hover">
                            <button
                                aria-label="Share Your Screen"
                                type="button"
                                className={ShareScreenClassNames}
                                onClick={publishShareScreen}
                            >
                                <div className="contents-18-Yxp lineHeightReset-3dQm1W">
                                    <svg
                                        className="controlIcon-35oS15 centerIcon-2G6o-T"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M2 4.5C2 3.397 2.897 2.5 4 2.5H20C21.103 2.5 22 3.397 22 4.5V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5ZM13.2 14.3375V11.6C9.864 11.6 7.668 12.6625 6 15C6.672 11.6625 8.532 8.3375 13.2 7.6625V5L18 9.6625L13.2 14.3375Z"
                                        ></path>
                                    </svg>
                                </div>
                            </button>
                            </Popover>
                        </div>
                        <div>
                        <Popover content={<div>Mute</div>} trigger="hover">
                            <button
                                aria-label="Mute"
                                type="button"
                                className={MicrophoneClassNames}
                                onClick={ToggleMicrophone}
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
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z"
                                            fill="currentColor"
                                        ></path>
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </div>
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
                    <Popover content={<div>Chat</div>} trigger="hover">
                        <button
                            aria-label="Pop Out"
                            type="button"
                            className="rightTrayIcon-3hFoUP button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN"
                            onClick={RightSider}
                        >
                            <div className="contents-18-Yxp lineHeightReset-3dQm1W">
                                <svg
                                    className="controlIcon-35oS15"
                                    aria-hidden="false"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"
                                        fill="currentColor"
                                    ></path>
                                    <path
                                        d="M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </div>
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
                            <div className="contents-18-Yxp lineHeightReset-3dQm1W">
                                <svg
                                    className="controlIcon-35oS15"
                                    aria-hidden="false"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M19,3H14V5h5v5h2V5A2,2,0,0,0,19,3Z"
                                    ></path>
                                    <path
                                        fill="currentColor"
                                        d="M19,19H14v2h5a2,2,0,0,0,2-2V14H19Z"
                                    ></path>
                                    <path
                                        fill="currentColor"
                                        d="M3,5v5H5V5h5V3H5A2,2,0,0,0,3,5Z"
                                    ></path>
                                    <path
                                        fill="currentColor"
                                        d="M5,14H3v5a2,2,0,0,0,2,2h5V19H5Z"
                                    ></path>
                                </svg>
                            </div>
                        </button>
                        </Popover>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Controls;
