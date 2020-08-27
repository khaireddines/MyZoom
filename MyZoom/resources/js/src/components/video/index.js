import React, { useState, useEffect } from "react";
import { Avatar, Card, Layout, Menu, Button } from "antd";
import Controls from "./components/controls";
import Communication from "./components/communication";
import IsExistRoom from "./components/IsExistRoom";
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined
} from "@ant-design/icons";
import "./video.css";
import HereList from "./components/hereList";
var classNames = require("classnames");

const { Header, Footer, Sider, Content } = Layout;
const VideoLayout = ({ RoomName, SFUHandler, myroom, RoomExist }) => {
    const hideControls = (() => {
        var onmousestop = () => {
                document
                    .getElementById("controls")
                    .setAttribute("style", "visibility: hidden;");
            },
            thread;

        return () => {
            clearTimeout(thread);
            thread = setTimeout(onmousestop, 3000);
        };
    })();
    const showControls = () => {
        document
            .getElementById("controls")
            .setAttribute("style", "visibility: visible;");
    };
    const [CollapsedRight, setCollapsedRight] = useState(true);
    const [CollapsedLeft, setCollapsedLeft] = useState(true);
    const toggleCollapsedRight = () => {
        setCollapsedRight(!CollapsedRight);
    };
    const toggleCollapsedLeft = () => {
        setCollapsedLeft(!CollapsedLeft);
    };

    let removeWhenCollapsedLeft = classNames({
        siderleft: CollapsedLeft,
        size: !CollapsedLeft
    });
    let removeWhenCollapsedRight = classNames({
        siderleft: CollapsedRight,
        size: !CollapsedRight
    });

    return (
        <>
            {RoomExist ? (
                <Layout>
                    <Sider
                        className={removeWhenCollapsedLeft}
                        breakpoint="lg"
                        collapsedWidth="0"
                        trigger={null}
                        collapsible
                        collapsed={CollapsedLeft}
                    >
                        <HereList />
                    </Sider>
                    <Layout
                        onMouseOver={hideControls}
                        onMouseMove={showControls}
                        style={{
                            height: "100vh",
                            backgroundColor: "#26262b",
                            overflowX: "none"
                        }}
                    >
                        <Content
                            id="layout"
                            style={{
                                padding: "15px 15px",
                                overflowX: "hidden"
                            }}
                        >
                            {/** here goes the video layouts */}
                            
                            
                        </Content>
                        <Footer style={{ padding: "3px 32px" }}>
                            <Controls
                                RoomName={RoomName}
                                LeftSider={toggleCollapsedLeft}
                                RightSider={toggleCollapsedRight}
                                SFUHandler={SFUHandler}
                            />
                        </Footer>
                    </Layout>
                    <Sider
                        className={removeWhenCollapsedRight}
                        collapsedWidth="0"
                        trigger={null}
                        collapsible
                        collapsed={CollapsedRight}
                    >
                        <Communication myroom={myroom}></Communication>
                    </Sider>
                </Layout>
            ) : (
                <IsExistRoom />
            )}
        </>
    );
};
export default VideoLayout;
