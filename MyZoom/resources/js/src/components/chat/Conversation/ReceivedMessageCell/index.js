import React from "react";
import {Avatar} from "antd";

const ReceivedMessageCell = ({conversation, user,multichat=false}) => {
  
  return (
    <div className="gx-chat-item">

      <Avatar className="gx-size-40 gx-align-self-end" src={`/assets/images/${user.Profile_picture}`}
              alt=""/>

      <div className="gx-bubble-block">
      {(multichat)&&<div className="gx-name" style={{
        fontSize: 'smaller',
        marginBottom: '4px',
        fontWeight: '400',
        fontStyle: 'italic'
      }}>{user.name}</div>}
        <div className="gx-bubble">
          <div className="gx-message">{conversation.message}</div>
          <div className="gx-time gx-text-muted gx-text-right gx-mt-2"><small>{conversation.sentAt}</small></div>
        </div>
      </div>

    </div>
  )
};

export default ReceivedMessageCell;
