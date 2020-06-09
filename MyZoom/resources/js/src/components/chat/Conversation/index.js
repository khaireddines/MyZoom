import React,{useEffect} from "react";

import ReceivedMessageCell from "./ReceivedMessageCell/index";
import SentMessageCell from "./SentMessageCell/index";

const Conversation = ({conversationData, selectedUser}) => {
useEffect(()=>{
  window.Echo.join(`Chat_${selectedUser.id}`)
    .here((users)=>{
      console.log(users);
    })
    .listen('MessageSent', (e) => {
        console.log(e.message);
    }); 
  
},[selectedUser]);
  return (
    <div className="gx-chat-main-content">
      {conversationData.map((conversation, index) => conversation.type === 'sent' ?
        <SentMessageCell key={index} conversation={conversation}/> :
        <ReceivedMessageCell key={index} conversation={conversation} user={selectedUser}/>
      )}
    </div>
  )
};

export default Conversation;
