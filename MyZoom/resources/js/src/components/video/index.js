import React from "react";
import { Avatar, Row, Col, Card, Layout } from "antd";
import { UserOutlined } from '@ant-design/icons';
import Controls from "./components/controls";
import './video.css';
const { Header, Footer, Sider, Content } = Layout;
const VideoLayout = () => {
    const hideControls = (() => {
        var onmousestop = () => {
            document.getElementById('controls').setAttribute('style','visibility: hidden;');
        }, thread;
      
        return () => {
          clearTimeout(thread);
          thread = setTimeout(onmousestop, 3000);
        };
      })();
      const showControls = ()=>{
        document.getElementById('controls').setAttribute('style','visibility: visible;');
      }
    return (
        <Layout onMouseOver={hideControls} onMouseMove={showControls} style={{height:'100vh',backgroundColor:'#26262b'}}>
            <Content style={{padding: '15px 15px'}}>
                <Row gutter={[4]} id="layout" justify="center" style={{justifyContent:'center',height:'100%',alignItems: 'center',overflowX: 'overlay'}}>
                    <Col span={6} >
                        <video id="myvideo" autoPlay muted="muted" playsInline width={'100%'} />
                    </Col>
                    <Col span={6} ><Card style={{width:'auto'}}><Avatar size={64} src={'./assets/images/DefaultUser.png'}></Avatar></Card></Col>
                    <Col span={6} ><Card style={{width:'auto'}}><Avatar size={64} src={'./assets/images/DefaultUser.png'}></Avatar></Card></Col>
                    <Col span={6} ><Card style={{width:'auto'}}><Avatar size={64} src={'./assets/images/DefaultUser.png'}></Avatar></Card></Col>
                    <Col span={6} ><Card style={{width:'auto'}}><Avatar size={64} src={'./assets/images/DefaultUser.png'}></Avatar></Card></Col>
                    <Col span={6} ><Card style={{width:'auto'}}><Avatar size={64} src={'./assets/images/DefaultUser.png'}></Avatar></Card></Col>
                    <Col span={6} ><Card style={{width:'auto'}}><Avatar size={64} src={'./assets/images/DefaultUser.png'}></Avatar></Card></Col>
                    <Col span={6} ><Card style={{width:'auto'}}><Avatar size={64} src={'./assets/images/DefaultUser.png'}></Avatar></Card></Col>
                    <Col span={6} ><Card style={{width:'auto'}}><Avatar size={64} src={'./assets/images/DefaultUser.png'}></Avatar></Card></Col>
                    <Col span={6} ><Card style={{width:'auto'}}><Avatar size={64} src={'./assets/images/DefaultUser.png'}></Avatar></Card></Col>
                    <Col span={6} ><Card style={{width:'auto'}}><Avatar size={64} src={'./assets/images/DefaultUser.png'}></Avatar></Card></Col>
                </Row>
            </Content>
            <Footer style={{padding:'3px 32px'}}>
            <Controls RoomName='myRoom'/>
            </Footer>
        </Layout>
    );
};
export default VideoLayout;
