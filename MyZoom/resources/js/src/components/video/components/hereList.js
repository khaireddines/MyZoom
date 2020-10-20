import React, { Component } from 'react';
import { Divider, Avatar, Empty, Spin, Badge } from "antd";
import Moment from "moment";
import { AudioOutlined, FundViewOutlined, FrownOutlined, AudioMutedOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import './hereList.css';
import CustomScrollbars from '../../../util/CustomScrollbars';
import Conversation from '../../chat/Conversation';
import Axios from "../../../util/Api";
let iconStyle = {
    marginRight: "16px",
    fontSize: "20px"
};
var classNames = require('classnames');

class HereList extends Component {
    onSelectUser = async (user) => {
        //FIXME: Scrolling Problem after onclick user !
        let conversationData = await Axios.post('api/PrivateChatConversation', { 
            id: user.id,
            RoomId: this.state.RoomId
        })
        this.setState({
            ActiveMessages:{[user.id]:''}
        });
        this.setState({
            loading: true,
            selectedSectionId: user.id,
            selectedUser: {...user,Profile_picture:user.img},
            conversation: conversationData.data
        });
        
        setTimeout(() => {
            this.setState({ loading: false });
            this.scrollPositionBottom();
        }, 500);
    };
    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          this.submitComment();
        }
    };
    updateMessageValue(evt) {
        this.setState({
          message: evt.target.value
        });
    };
    submitComment() {
        var audio = new Audio('/assets/sounds/sent.mp3');
        if (this.state.message !== '') {
          const updatedConversation = this.state.conversation.conversationData.concat({
            'type': 'sent',
            'message': this.state.message,
            'sentAt': Moment().format('MMM D,Y h:mmA'),
          });
           Axios.post('api/PrivateChatNewMsg',{
            with: this.state.conversation.id,
            msg: this.state.message,
            RoomId: this.state.RoomId
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
    constructor(props) {
        super(props);
        this.state = {
            Me:this.props.Me,
            loading:false,
            selectedSectionId: null,
            peoples_here: [],
            peoples_here_render: [],
            message: '',
            selectedUser: null,
            conversation: {
                "id": 0,
                "conversationData": []
            },
            RoomId: this.props.myroom,
            RoomOwnerId:null,
            ActiveMessages:[],
            SFUHandler:this.props.SFUHandler,
            pin:null,
            People_Mute_State:[],
            Muted:this.props.Muted
        }
    }
    GetServerMuteState=async()=>{
        let Res = await Axios.post('api/GetRoomConfigFile',{RoomId:this.state.RoomId});
        if (Res.status === 200) {
            this.setState({
                People_Mute_State:Res.data
            });
        }
    }
    
    
    RoomOwnerId=async()=>{
        let Res = await Axios.post('api/RoomOwnerId',{RoomId:this.state.RoomId});
        this.setState({
            RoomOwnerId:Res.data
        });
    }
    GetRoomPin=async()=>{
        let Res = await Axios.post('api/GetRoomPin',{RoomId:this.state.RoomId});
        this.setState({
            pin:Res.data
        });
    }
    enable_recording=()=>{
        this.GetRoomPin();
        let EnableRecord = {
            "request" : "enable_recording",
            "room" : this.state.myroom,
            "secret" : this.state.pin,
            "record" : 'true',
        }
        this.state.SFUHandler.send({message:EnableRecord});
    }
    
    componentDidMount(prevProps, prevState) {
        this.RoomOwnerId();
        this.GetServerMuteState();
        
        var audiorecieve = new Audio('/assets/sounds/recived.mp3');
        window.Echo.join(`PrivateChatInRooms_${this.state.Me.id}`)
        .here(users => {
        })
        .listen("PrivateChatInRooms", message_recived => {
            if (this.state.selectedUser ==null || message_recived.from !=this.state.selectedUser.id) {
                this.setState({
                    ActiveMessages:{
                        ...this.state.ActiveMessages, [message_recived.from]:"active"
                    }
                })
                audiorecieve.play();
            }
            if (this.state.selectedUser != null) {
                (message_recived.from==this.state.selectedUser.id)?this.showRecived_Message(message_recived):'';
            }
        });
                
    }
    scrollPositionBottom(){
        var element = document.getElementsByClassName("gx-chat-list-scroll");
        if(element.length !=0)
        {element[0].firstElementChild.scrollTop = element[0].firstElementChild.scrollHeight}
      }
    showRecived_Message(msgObj){
        const updatedConversation = this.state.conversation.conversationData.concat({
          'type': 'recived',
          'message': msgObj.msg,
          'sentAt': Moment().format('MMM D,Y h:mmA'),
        });
        this.setState({
            conversation: {
            ...this.state.conversation, conversationData: updatedConversation
        }});
        
      }
    componentDidUpdate(prevProps, prevState) {
        const {conversation}= this.state;
        if(prevState.conversation !== conversation){
            this.scrollPositionBottom();
        }
        if (this.props.newPerson != prevProps.newPerson) {
            this.state.peoples_here.push(this.props.newPerson);
            setTimeout(() => {
                this.setState({ peoples_here_render: this.state.peoples_here });
            }, 2000);
        }
        if (this.props.whoLeft != prevProps.whoLeft) {
            if (this.props.whoLeft.id == this.state.selectedSectionId) {
                setTimeout(() => {
                    this.setState({
                        selectedSectionId: null,
                        selectedUser: null,
                    });
                }, 2000);
            }
            this.state.peoples_here.forEach((data, index) => {
                if (data.id == this.props.whoLeft.id) {
                    this.state.peoples_here.splice(index, 1);
                    setTimeout(() => {
                        this.setState({ peoples_here_render: this.state.peoples_here });
                    }, 2000);
                    return;
                }
            })


        }
    }
    ToggleMuteUser = (User)=>{
        let UserRemoteSFUHandler = User.remoteHandler;
        UserRemoteSFUHandler.send({message:{"request" : "configure","audio" :false}});
        //console.log(UserRemoteSFUHandler.isAudioMuted());
    }
    TogglePermitShareScreen = (User)=>{
        console.log(User);
    }
    render() {
        const { peoples_here_render, selectedSectionId, conversation,
                selectedUser, message, loading, ActiveMessages, RoomOwnerId,
                Me, People_Mute_State } = this.state;
        const { conversationData } = conversation;
        let isEmpty = classNames({
            'privatechat':(peoples_here_render.length == 0)?true:false
        });
        return (

            <>
                <button onClick={()=>{
                    this.enable_recording();
                }}></button>
                <Divider orientation="left">People</Divider>
                <div className={isEmpty} style={{ height: '30%', overflowY: 'scroll' }}>
                    {(peoples_here_render.length == 0)?
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={
                        <span>
                            Sad, Room Is Empty
                        </span>
                      } />
                    :peoples_here_render.map((data) => {
                        
                        return (
                            <div key={data.id} className={`gx-chat-user-item ${selectedSectionId === data.id ? 'active' : ''}`}
                             >
                                <div className="gx-chat-user-row">
                                    <div className="gx-chat-avatar" onClick={() => {
                                        this.onSelectUser(data);
                                    }}>
                                        <div className="gx-status-pos">
                                            <Badge count={(ActiveMessages[data.id]&&ActiveMessages[data.id]=== "active")? 1:0} dot >
                                                <Avatar src={`/assets/images/${data.img}`} className="gx-size-40" alt="Abbott" />
                                                {/* <span className={`gx-status gx-active`} /> */}
                                            </Badge>
                                        </div>
                                    </div>

                                    <div className="gx-chat-contact-col" onClick={() => {
                                        this.onSelectUser(data);
                                    }}>
                                        <div className={`h4 gx-name ${ActiveMessages[data.id] ? 'recievedMsg':''}`}>{data.name}</div>
                                        <div className="gx-chat-info-des gx-text-truncate">{/* {user.mood.substring(0, 40) + "..."} */}</div>
                                    </div>
                                    {(RoomOwnerId==Me.id)&&
                                    (<>
                                        <span className={`icons-controle person${data.id} ${People_Mute_State[data.id]?'Muted':'' }`} id={`${data.id}`} onClick={()=>{this.ToggleMuteUser(data)}}>{People_Mute_State[data.id]?<AudioMutedOutlined style={iconStyle} />:<AudioOutlined style={iconStyle} />}</span>
                                        <span className={`icons-controle person${data.id} `} onClick={()=>{this.TogglePermitShareScreen(data)}}><FundViewOutlined style={iconStyle} /></span>
                                    </>)}
                                </div>

                            </div>
                        )
                    })

                    }
                </div>
                <Divider orientation="left">Private Chat</Divider>
                <div className="privatechat">
                    { (selectedUser == null)?
                    (<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={
                        <span>
                            Choose a person to start chatting
                        </span>
                      } />)
                    :(loading)?(<Spin />):(<>
                        <CustomScrollbars className="gx-chat-list-scroll privateSection">
                        <Conversation conversationData={conversationData}
                            selectedUser={selectedUser} />
                    </CustomScrollbars>
                    <div className="gx-chat-main-footer" style={{position: 'absolute',bottom: '0px'}}>
                        <div className="gx-flex-row gx-align-items-center" style={{ maxHeight: 51 }}>
                            <div className="gx-col">
                                <div className="gx-form-group">
                                    <textarea
                                        id="required" className="gx-border-0 ant-input gx-chat-textarea"
                                        onKeyUp={this._handleKeyPress.bind(this)}
                                        onChange={this.updateMessageValue.bind(this)}
                                        value={message}
                                        placeholder="Type and hit enter to send message"
                                    />
                                </div>
                            </div>
                            <i className="gx-icon-btn icon icon-sent" onClick={this.submitComment.bind(this)} />
                        </div>
                    </div></>)}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    Me:state.auth.authUser,
    newPerson: state.commonQuery.peoples_here,
    whoLeft: state.commonQuery.who_left,
});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(HereList);