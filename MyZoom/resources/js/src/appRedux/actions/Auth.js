import {
    FETCH_ERROR,
    FETCH_START,
    FETCH_SUCCESS,
    INIT_URL,
    SIGNOUT_USER_SUCCESS,
    USER_DATA,
    USER_TOKENS_SET,
    PASSWORD_GRANT_CLIENT
} from "../../constants/ActionTypes";
import axios from "../../util/Api";


export const setInitUrl = url => {
    return {
        type: INIT_URL,
        payload: url
    };
};

export const userSignUp = ({ email, password, name }) => {
    return dispatch => {
        dispatch({ type: FETCH_START });
        axios
            .post("/api/register", {
                email: email,
                password: password,
                name: name
            })
            .then(({ data,status }) => {

                if (status===200) {
                  dispatch({ type: FETCH_SUCCESS });
                  dispatch(userSignIn({username:email,password:password}));
                } else {
                    console.log("payload: data.error", data);
                    dispatch({ type: FETCH_ERROR, payload: "Network Error" });
                }
            })
            .catch(function(error) {
                
                dispatch({ type: FETCH_ERROR, payload: 'The email has already been taken.' });
                console.log("Error****:", error.message);
            });
    };
};

export const userSignIn = ({ username, password }) => {
    return dispatch => {
        dispatch({ type: FETCH_START });
        axios
            .post("/oauth/token", {
                ...PASSWORD_GRANT_CLIENT,
                username: username,
                password: password
            })
            .then(({ data }) => {
                if (data.access_token) {
                    localStorage.setItem(
                        "tokens",
                        JSON.stringify({
                            access_token: data.access_token,
                            refresh_token: data.refresh_token
                        })
                    );
                    axios.defaults.headers.common["authorization"] =
                        "Bearer " + data.access_token;
                    dispatch(getUser());
                    dispatch({ type: FETCH_SUCCESS });
                    dispatch({
                        type: USER_TOKENS_SET,
                        payload: {
                            access_token: data.access_token,
                            refresh_token: data.refresh_token
                        }
                    });
                } else {
                    dispatch({ type: FETCH_ERROR, payload: data.error });
                }
            })
            .catch(function(error) {
                dispatch({ type: FETCH_ERROR, payload: error.message });
                console.log("Error****:", error.message);
            });
    };
};

export const getUser = () => {
    return dispatch => {
        dispatch({ type: FETCH_START });
        axios
            .post("api/getUser")
            .then(({ data }) => {
                
                if (data) {
                    localStorage.setItem("user",JSON.stringify(data));
                    dispatch({ type: FETCH_SUCCESS });
                    dispatch({ type: USER_DATA, payload: data });
                } else {
                    dispatch({ type: FETCH_ERROR, payload: data });
                }
            })
            .catch(function(error) {
                dispatch({ type: FETCH_ERROR, payload: error.message });
                console.log("Error****:", error.message);
            });
    };
};

export const userSignOut = () => {
    return dispatch => {
        dispatch({ type: FETCH_START });
        localStorage.removeItem("tokens");
        localStorage.removeItem("user");
        dispatch({ type: FETCH_SUCCESS });
        dispatch({ type: SIGNOUT_USER_SUCCESS });
    };
};
