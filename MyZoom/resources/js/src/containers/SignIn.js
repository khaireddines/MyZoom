import React, {useEffect} from "react";
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Button, Checkbox, Input } from "antd";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {userSignIn} from "../appRedux/actions/Auth";
import IntlMessages from "../util/IntlMessages";
import InfoView from "../components/InfoView";
import "./SignIn.css";

const FormItem = Form.Item;

const SignIn = (props) => {
  const dispatch = useDispatch();
  const tokens = useSelector(({auth}) => auth.tokens);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        dispatch(userSignIn(values));
      }
    });
  };

  useEffect(() => {
    if (tokens !== null) {
      props.history.push('/');
    }
  }, [tokens, props.history]);

  const {getFieldDecorator} = props.form;

  return (
    <div className="gx-app-login-wrap">
      <div className="gx-app-login-container">
        <div className="gx-app-login-main-content">
          <div className="gx-app-logo-content">
            <div className="gx-app-logo-content-bg">
              <img src={require("../assets/images/bg-mini.jpg")} alt='Neature'/>
            </div>
            <div className="gx-app-logo-wid">
              <h1><IntlMessages id="app.userAuth.signIn"/></h1>
              <p><IntlMessages id="app.userAuth.bySigning"/></p>
              <p><IntlMessages id="app.userAuth.getAccount"/></p>
            </div>
            <div className="gx-app-logo">
              {/* //FIXME LOGO */}
              <img alt="example" src={require("../assets/images/logo.png")}/>
            </div>
          </div>
          <div className="gx-app-login-content">
            <Form onSubmit={handleSubmit} className="gx-signin-form gx-form-row0">

              <FormItem>
                {getFieldDecorator('username', {
                  rules: [{
                    required: true, type: 'email', message: 'The input is not valid E-mail!',
                  }],
                })(
                  <Input placeholder="Email"/>
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{required: true, message: 'Please input your Password!'}],
                })(
                  <Input type="password" placeholder="Password"/>
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" className="gx-mb-0" htmlType="submit">
                  <IntlMessages id="app.userAuth.signIn"/>
                </Button>
                <span><IntlMessages id="app.userAuth.or"/></span> <Link to="/signup"><IntlMessages
                id="app.userAuth.signUp"/></Link>
              </FormItem>
            </Form>
          </div>
          <InfoView/>
        </div>
      </div>
    </div>
  );
};

const WrappedNormalLoginForm = Form.create()(SignIn);

export default WrappedNormalLoginForm;
