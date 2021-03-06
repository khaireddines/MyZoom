import React from "react";
import {Avatar} from "antd";

const SentMessageCell = ({conversation,user}) => {
  
  return (
    <div className="gx-chat-item gx-flex-row-reverse">
      <Avatar className="gx-size-40 gx-align-self-end" src={`/assets/images/${user.Profile_picture}`}
              alt={conversation.name}/>

      <div className="gx-bubble-block">
        <div className="gx-bubble">
          <div className="gx-message">{conversation.message}</div>
          <div className="gx-time gx-text-muted gx-text-right gx-mt-2"><small>{conversation.sentAt}</small></div>
        </div>
      </div>

    </div>
  )
};

export default SentMessageCell;
