import React from "react";
import {Avatar} from "antd";

const SentMessageCell = ({conversation}) => {
  return (
    <div className="gx-chat-item gx-flex-row-reverse">
      {/*  TODO :: you need to replace the avatar picture with the current user */}
      <Avatar className="gx-size-40 gx-align-self-end" src={"https://via.placeholder.com/150x150"}
              alt={conversation.name}/>

      <div className="gx-bubble-block">
        <div className="gx-bubble">
          <div className="gx-message">{conversation.message}</div>
          <div className="gx-time gx-text-muted gx-text-right gx-mt-2">{conversation.sentAt}</div>
        </div>
      </div>

    </div>
  )
};

export default SentMessageCell;
