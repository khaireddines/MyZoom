import React, { useEffect, useState } from "react";

import ReceivedMessageCell from "./ReceivedMessageCell/index";
import SentMessageCell from "./SentMessageCell/index";
import { useSelector } from "react-redux";

const Conversation = ({ conversationData, selectedUser,multichat=false }) => {
    const [user, setUser] = useState(null);

    const { authUser } = useSelector(({ auth }) => auth);
    useEffect(() => {
        setUser(authUser);
    }, [authUser]);
    /* useEffect(() => {
        window.Echo.join(`Chat_${selectedUser.id}`)
            .here(users => {
                console.log(users);
            })
            .listen("MessageSent", e => {
                console.log(e.message);
            });
    }, [selectedUser]); */
    return (<>
      {(user!=null) &&
        <div className="gx-chat-main-content" /* style={{backgroundImage:`url(/assets/images/chatbg.jpg)`}} */>
            {conversationData.map((conversation, index) =>
                conversation.type === "sent" ? (
                    <SentMessageCell
                        key={index}
                        conversation={conversation}
                        user={user}
                    />
                ) : (
                    (!multichat)?(<ReceivedMessageCell
                        key={index}
                        conversation={conversation}
                        user={selectedUser}
                    />):(<ReceivedMessageCell
                        key={index}
                        conversation={conversation}
                        user={conversation.from[0]}
                        multichat={true}
                    />)
                )
            )}
        </div>
      } 
    </>
    );
};

export default Conversation;
