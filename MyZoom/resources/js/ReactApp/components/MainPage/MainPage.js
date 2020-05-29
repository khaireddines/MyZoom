import React, { Component } from "react";
import { Button, Grid } from "@material-ui/core";
import "./MainPage.css";
import { Link } from "react-router-dom";
import {userSignIn} from "../../Redux/actions";
import { connect } from "react-redux";
class MainPage extends Component {
    state = {
        user : {
            username: "",
            password: ""
    }
    };
    handleForm = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            user:{...this.state.user,[name]:value} 
        });
    };
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.logInUser({...this.state.user});
        

    }
    render() {
        return (
            <Grid container justify="center" className="center" spacing={8}>
                <Grid item>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            name="username"
                            onChange={this.handleForm}
                        />
                        <input
                            type="text"
                            name="password"
                            onChange={this.handleForm}
                        />
                        <button type="submit"> test</button>
                    </form>
                </Grid>
            </Grid>
        );
    }
}
const mapStateToProps = (state) =>({
    app: state.auth
})
const mapDispatchToProps = (dispatch) =>({
    logInUser: (data)=>dispatch(userSignIn(data)),
})
export default connect(mapStateToProps , mapDispatchToProps)(MainPage)