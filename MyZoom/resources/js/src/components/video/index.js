import React, { useState ,useEffect } from "react";
import { Avatar, Card, Layout, Menu, Button } from "antd";
import Controls from "./components/controls";
import Communication from "./components/communication";
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined
} from "@ant-design/icons";
import "./video.css";
var classNames = require("classnames");

const { Header, Footer, Sider, Content } = Layout;
const VideoLayout = ({ RoomName, SFUHandler,myroom }) => {
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
        <Layout>
            <Sider
                className={removeWhenCollapsedLeft}
                breakpoint="lg"
                collapsedWidth="0"
                trigger={null}
                collapsible
                collapsed={CollapsedLeft}
            >
                <div className="logo" />
                <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        nav 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        nav 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        nav 3
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout
                onMouseOver={hideControls}
                onMouseMove={showControls}
                style={{ height: "100vh", backgroundColor: "#26262b" }}
            >
                <Content id="layout" style={{ padding: "15px 15px" }}>
                    {/** here goes the video layouts */}
                </Content>
                <Footer style={{ padding: "3px 32px" }}>
                    <Controls
                        RoomName="myRoom"
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
    );
};
export default VideoLayout;
