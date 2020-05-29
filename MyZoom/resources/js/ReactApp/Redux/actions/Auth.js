import {
    FETCH_ERROR,
    FETCH_START,
    FETCH_SUCCESS,
    INIT_URL,
    SIGNOUT_USER_SUCCESS,
    USER_DATA,
    USER_TOKENS_SET,
    PASSWORD_GRANT_CLIENT
  } from "../../constants/Auth";
  import axios from 'axios'
  
  export const setInitUrl = (url) => {
    return {
      type: INIT_URL,
      payload: url
    };
  };
  
  export const userSignUp = ({username, password, name}) => {
    console.log(username, password);
    return (dispatch) => {
      dispatch({type: FETCH_START});
      axios.post('auth/register', {
          username: username,
          password: password,
          name: name
        }
      ).then(({data}) => {
        console.log("data:", data);
        if (data.result) {
          localStorage.setItem("token", JSON.stringify(data.token.access_token));
          axios.defaults.headers.common['authorization'] = "Bearer " + data.token.access_token;
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: USER_TOKEN_SET, payload: data.token.access_token});
          dispatch({type: USER_DATA, payload: data.user});
        } else {
          console.log("payload: data.error", data.error);
          dispatch({type: FETCH_ERROR, payload: "Network Error"});
        }
      }).catch(function (error) {
        dispatch({type: FETCH_ERROR, payload: error.message});
        console.log("Error****:", error.message);
      });
    }
  };
  
  export const userSignIn = ({username, password}) => {
    return (dispatch) => {
      dispatch({type: FETCH_START});
      axios.post('/oauth/token', {
          ...PASSWORD_GRANT_CLIENT,
          username: username,
          password: password,
        }
      ).then(({data}) => {
        console.log("userSignIn: ", data); 
        if (data.access_token) {
          localStorage.setItem("tokens", JSON.stringify({'access_token':data.access_token,'refresh_token':data.refresh_token}));
          axios.defaults.headers.common['authorization'] = "Bearer " + data.access_token;
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: USER_TOKENS_SET, payload: {'access_token':data.access_token,'refresh_token':data.refresh_token}});
        } else {
          dispatch({type: FETCH_ERROR, payload: data.error});
        }
      }).catch(function (error) {
        dispatch({type: FETCH_ERROR, payload: error.message});
        console.log("Error****:", error.message);
      });
    }
  };
  
  export const getUser = () => {
    return (dispatch) => {
      dispatch({type: FETCH_START});
      axios.post('auth/me',
      ).then(({data}) => {
        console.log("userSignIn: ", data);
        if (data.result) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: USER_DATA, payload: data.user});
        } else {
          dispatch({type: FETCH_ERROR, payload: data.error});
        }
      }).catch(function (error) {
        dispatch({type: FETCH_ERROR, payload: error.message});
        console.log("Error****:", error.message);
      });
    }
  };
  
  
  export const userSignOut = () => {
    return (dispatch) => {
      dispatch({type: FETCH_START});
      axios.post('auth/logout').then(({data}) => {
        if (data.result) {
          localStorage.removeItem("token");
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: SIGNOUT_USER_SUCCESS});
        } else {
          dispatch({type: FETCH_ERROR, payload: data.error});
        }
      }).catch(function (error) {
        dispatch({type: FETCH_ERROR, payload: error.message});
        console.log("Error****:", error.message);
      });
    }
  };
  