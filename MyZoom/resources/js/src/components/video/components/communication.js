import React, { Component } from "react";
import Axios from "../../../util/Api";
import Conversation from "../../../components/chat/Conversation/index";
import CustomScrollbars from "../../../util/CustomScrollbars";
import Moment from "moment";
import { connect } from "react-redux";
import { userSignIn } from "../../../appRedux/actions";
class communication extends Component {
    constructor(props) {
        super(props);

        this.state = {
            conversation: null,
            message: ""
        };
    }
    componentDidMount() {
        const fetchdata = async () => {
            let result = await Axios.post("api/ConversationRoom", { room_id: this.props.myroom });
            this.setState({
                conversation: result.data
            }); 
        };
        fetchdata();
        this.scrollPositionBottom();
    }
    
    componentDidUpdate(prevProps,prevState){
        const {ChatRoom_message_recived}=this.props;
        const {selectedUser,conversation}= this.state;
        if (prevProps.ChatRoom_message_recived !== ChatRoom_message_recived) {
            (ChatRoom_message_recived.Room_id==this.props.myroom)&&this.showRecived_Message(ChatRoom_message_recived);
          }
        if(prevState.conversation !== conversation){
            this.scrollPositionBottom();
        }
    }
    /** chat */

    _handleKeyPress = e => {
        if (e.key === "Enter") {
            this.submitComment();
        }
    };
    updateMessageValue(evt) {
        this.setState({
            message: evt.target.value
        });
    }
    scrollPositionBottom() {
        var element = document.getElementsByClassName("gx-chat-list-scroll");
        if (element.length != 0) {
            element[0].firstElementChild.scrollTop =
                element[0].firstElementChild.scrollHeight;
        }
    }
    showRecived_Message(msgObj){
        //console.log(msgObj);
         const updatedConversation = this.state.conversation.conversationData.concat({
          'type': 'recived',
          'message': msgObj.msg,
          'from':[msgObj.from_user], // change that 
          'sentAt': Moment().format('MMM D,Y h:mmA'),
        });
        this.setState({
          conversation: {
            ...this.state.conversation, conversationData: updatedConversation
        }}); 
      }
    submitComment() {
        var audio = new Audio("/assets/sounds/sent.mp3");
        if (this.state.message !== "") {
            const updatedConversation = this.state.conversation.conversationData.concat(
                {
                    type: "sent",
                    message: this.state.message,
                    sentAt: Moment().format("MMM D,Y h:mmA")
                }
            );
            Axios.post("api/StoreMessageChatRoom", {
                room_id:this.props.myroom,
                msg:this.state.message
            }).then(() => {
                audio.play();
            });
            this.setState({
                conversation: {
                    ...this.state.conversation,
                    conversationData: updatedConversation
                },
                message: ""
            });
        }
    }

    /**End Chat */
    render() {
        const { message, conversation } = this.state;
        return (
            <div className="gx-chat-main" style={{ height: "100%" }}>
                {conversation != null && (
                    <CustomScrollbars className="gx-chat-list-scroll maxHeight">
                        <Conversation
                            conversationData={conversation.conversationData}
                            multichat={true}
                        />
                    </CustomScrollbars>
                )}

                <div className="gx-chat-main-footer">
                    <div
                        className="gx-flex-row gx-align-items-center"
                        style={{ maxHeight: 51 }}
                    >
                        <div className="gx-col">
                            <div className="gx-form-group">
                                <textarea
                                    id="required"
                                    className="gx-border-0 ant-input gx-chat-textarea"
                                    onKeyUp={this._handleKeyPress.bind(this)}
                                    onChange={this.updateMessageValue.bind(this)}
                                    value={message}
                                    placeholder="Type and hit enter to send message"
                                />
                            </div>
                        </div>
                        <i className="gx-icon-btn icon icon-sent" onClick={this.submitComment} />
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state)=> ({
    message_recived:state.commonQuery.message_recived,
    ChatRoom_message_recived:state.commonQuery.ChatRoom_message_recived
  })
  const mapDispatchToProps =dispatch =>({
    
  })
export default connect(mapStateToProps,mapDispatchToProps)(communication)