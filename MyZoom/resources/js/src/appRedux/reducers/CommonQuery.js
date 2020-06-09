import { FETCH_FRIENDS } from "../../constants/ActionTypes";



const INIT_STATE = {
    friendList: ''
};
export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_FRIENDS: {
            return { ...state, friendList: action.payload };
        }
        default:
            return state;
    }
};
