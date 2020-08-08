import React, { Component } from 'react';
import { Divider, Avatar } from "antd";
import { AudioOutlined, FundViewOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import './hereList.css';
let iconStyle = {
    marginRight: "16px",
    fontSize: "20px"
};
class HereList extends Component {
    onSelectUser(data){
        this.setState({selectedSectionId:data.id});
    }
    constructor(props){
        super(props);
        this.state={
            selectedSectionId:null,
            peoples_here:[],
            peoples_here_render:[]
        }
    }
    componentDidUpdate(prevProps, prevState){
        if (this.props.newPerson != prevProps.newPerson) {
            this.state.peoples_here.push(this.props.newPerson);
            setTimeout(() => {
                this.setState({peoples_here_render:this.state.peoples_here});
            }, 2000);
        }
        if (this.props.whoLeft != prevProps.whoLeft) {
            this.state.peoples_here.forEach((data,index)=>{
                if (data.id == this.props.whoLeft.id) {
                    this.state.peoples_here.splice(index,1);
                    setTimeout(() => {
                        this.setState({peoples_here_render:this.state.peoples_here});
                    }, 2000);
                    return ;
                }
            })
            
            
        }
    }
    render() {
        const { peoples_here_render, selectedSectionId } = this.state;
        return (
            
            <>
              <Divider orientation="left">People</Divider>
              <div style={{height:'30%',overflowY: 'scroll'}}>
                  { peoples_here_render.map((data)=>{
                     return ( 
                     <div key={data.id} className={`gx-chat-user-item ${selectedSectionId === data.id ? 'active' : ''}`} onClick={() => {
                        this.onSelectUser(data);
                      }}>
                        <div className="gx-chat-user-row">
                          <div className="gx-chat-avatar">
                            <div className="gx-status-pos">
                              <Avatar src={`/assets/images/${data.img}`} className="gx-size-40" alt="Abbott"/>
                              <span className={`gx-status gx-active`}/>
                            </div>
                          </div>
                  
                          <div className="gx-chat-contact-col">
                            <div className="h4 gx-name">{data.name}</div>
                            <div className="gx-chat-info-des gx-text-truncate">{/* {user.mood.substring(0, 40) + "..."} */}</div>
                          </div>
                          <span className={`icons-controle person${data.id}`}><AudioOutlined  style={iconStyle} /></span>
                          <span className={`icons-controle person${data.id}`}><FundViewOutlined style={iconStyle} /></span>
                        </div>
                        
                    </div>
                    )
                  })

                  }
              </div>
              <Divider orientation="left">Private Chat</Divider>
              <div style={{height:'65%'}}></div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    newPerson: state.commonQuery.peoples_here,
    whoLeft: state.commonQuery.who_left
});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(HereList);