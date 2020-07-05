import { FETCH_FRIENDS, MESSAGE_RECIVED, CHATROOM_MESSAGE_RECIVED } from "../../constants/ActionTypes";

const INIT_STATE = {
    friendList: "",
    message_recived:null,
    ChatRoom_message_recived:null
};
export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_FRIENDS: {
            return { ...state, friendList: action.payload };
        }
        case MESSAGE_RECIVED:{
            return {...state, message_recived: action.payload };
        }
        case CHATROOM_MESSAGE_RECIVED:{
            return {...state, ChatRoom_message_recived:action.payload };
        }
        default:
            return state;
    }
};
