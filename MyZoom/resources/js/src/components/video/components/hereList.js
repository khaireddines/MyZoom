import React, { Component } from 'react';
import { Divider, Avatar, Empty, Spin } from "antd";
import Moment from "moment";
import { AudioOutlined, FundViewOutlined, FrownOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import './hereList.css';
import CustomScrollbars from '../../../util/CustomScrollbars';
import Conversation from '../../chat/Conversation';
import Axios from "../../../util/Api";
let iconStyle = {
    marginRight: "16px",
    fontSize: "20px"
};
let ifEmpty=classNames({
    'privatechat':(this.peoples_here_render.length ==0)?true:false
})
class HereList extends Component {
    scrollPositionBottom() {
        var element = document.getElementsByClassName("gx-chat-list-scroll");
        if (element.length != 0) { element[0].firstElementChild.scrollTop = element[0].firstElementChild.scrollHeight }
    }
    onSelectUser = async (user) => {
        let conversationData = await Axios.post('api/PrivateChatConversation', { 
            id: user.id,
            RoomId: this.state.RoomId
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
        }, 1500);
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
            RoomId: this.props.myroom
        }
    }
    componentDidMount(prevProps, prevState) {
        
    }
    componentDidUpdate(prevProps, prevState) {
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
    
    render() {
        const { peoples_here_render, selectedSectionId, conversation, selectedUser, message, loading } = this.state;
        const { conversationData } = conversation;
        return (

            <>
                <Divider orientation="left">People</Divider>
                <div className={ifEmpty} style={{ height: '30%', overflowY: 'scroll' }}>
                    {(peoples_here_render.length == 0)?
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={
                        <span>
                            Sad, Room Is Empty
                        </span>
                      } />
                    :peoples_here_render.map((data) => {
                        return (
                            <div key={data.id} className={`gx-chat-user-item ${selectedSectionId === data.id ? 'active' : ''}`}
                             onClick={() => {
                                this.onSelectUser(data);
                            }}>
                                <div className="gx-chat-user-row">
                                    <div className="gx-chat-avatar">
                                        <div className="gx-status-pos">
                                            <Avatar src={`/assets/images/${data.img}`} className="gx-size-40" alt="Abbott" />
                                            <span className={`gx-status gx-active`} />
                                        </div>
                                    </div>

                                    <div className="gx-chat-contact-col">
                                        <div className="h4 gx-name">{data.name}</div>
                                        <div className="gx-chat-info-des gx-text-truncate">{/* {user.mood.substring(0, 40) + "..."} */}</div>
                                    </div>
                                    <span className={`icons-controle person${data.id}`}><AudioOutlined style={iconStyle} /></span>
                                    <span className={`icons-controle person${data.id}`}><FundViewOutlined style={iconStyle} /></span>
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
    newPerson: state.commonQuery.peoples_here,
    whoLeft: state.commonQuery.who_left
});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(HereList);