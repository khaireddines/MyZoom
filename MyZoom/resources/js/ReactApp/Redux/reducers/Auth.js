import {INIT_URL, SIGNOUT_USER_SUCCESS, USER_DATA, USER_TOKENS_SET} from "../../constants/Auth";

const INIT_STATE = {
  token: JSON.parse(localStorage.getItem('tokens')),
  initURL: '',
  authUser: JSON.parse(localStorage.getItem('user')),
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {


    case INIT_URL: {
      return {...state, initURL: action.payload};
    }

    case SIGNOUT_USER_SUCCESS: {
      return {
        ...state,
        tokens: null,
        authUser: null,
        initURL: ''
      }
    }

    case USER_DATA: {
      return {
        ...state,
        authUser: action.payload,
      };
    }

    case USER_TOKENS_SET: {
      return {
        ...state,
        tokens: action.payload,
      };
    }

    default:
      return state;
  }
}