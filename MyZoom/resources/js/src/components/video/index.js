import React, { useState } from "react";
import { Avatar, Row, Col, Card, Layout, Menu, Button } from "antd";
import Controls from "./components/controls";
import Conversation from "../../components/chat/Conversation/index";
import CustomScrollbars from "../../util/CustomScrollbars";
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined
} from "@ant-design/icons";
import "./video.css";
var classNames = require("classnames");
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
const VideoLayout = ({ RoomName, SFUHandler }) => {
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
        siderleft: CollapsedLeft
    });
    let removeWhenCollapsedRight = classNames({
        siderleft: CollapsedRight
    });
    /** chat */
    let conversationData=[{}];
    let selectedUser={};
    const [message, setMessage] = useState();
    submitComment() {
      var audio = new Audio('/assets/sounds/sent.mp3');
      if (this.state.message !== '') {
        const updatedConversation = this.state.conversation.conversationData.concat({
          'type': 'sent',
          'message': this.state.message,
          'sentAt': Moment().format('MMM D,Y h:mmA'),
        });
        Axios.post('api/storeMessage',{
          with:this.state.conversation.id,
          msg:this.state.message
        }).then(()=>{
          audio.play();
        });
        this.setState({
          conversation: {
            ...this.state.conversation, conversationData: updatedConversation
          },
          message: '',
          /* conversationList: this.state.conversationList.map(conversationData => {
            if (conversationData.id === this.state.conversation.id) {
              return {...this.state.conversation, conversationData: updatedConversation};
            } else {
              return conversationData;
            }
          }) */
        });
        
      }
    }
    const Communication = () =>{
      return <div className="gx-chat-main">
      <div className="gx-chat-main-header">
        <span className="gx-d-block gx-d-lg-none gx-chat-btn">
          <i className="gx-icon-btn icon icon-chat"
          /></span>
        <div className="gx-chat-main-header-info">

          <div className="gx-chat-avatar gx-mr-2">
            <div className="gx-status-pos">
              <Avatar src={`/assets/images/DefaultPicture.png`}
                      className="gx-rounded-circle gx-size-60"
                      alt=""
                      />

              <span className={`gx-status gx-online`}/>
            </div>
          </div>

          <div className="gx-chat-contact-name">
            
          </div>
        </div>

      </div>

      <CustomScrollbars className="gx-chat-list-scroll">
        <Conversation conversationData={conversationData}
                      selectedUser={selectedUser}/>
      </CustomScrollbars>

      <div className="gx-chat-main-footer">
        <div className="gx-flex-row gx-align-items-center" style={{maxHeight: 51}}>
          <div className="gx-col">
            <div className="gx-form-group">
                            <textarea
                              id="required" className="gx-border-0 ant-input gx-chat-textarea"
                    
                              value={message}
                              placeholder="Type and hit enter to send message"
                            />
            </div>
          </div>
          <i className="gx-icon-btn icon icon-sent" />
        </div>
      </div>
    </div>
    }
    /**End Chat */
    return (
        <Layout>
            <Sider
                className={removeWhenCollapsedLeft}
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
                <Communication></Communication>
            </Sider>
        </Layout>
    );
};
export default VideoLayout;
