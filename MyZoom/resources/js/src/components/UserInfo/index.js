import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Avatar, Popover} from "antd";
import {userSignOut} from "../../appRedux/actions/Auth";

const UserInfo = () => {

  const dispatch = useDispatch();

  const userMenuOptions = (
    <ul className="gx-user-popover">
      <li>My Account</li>
      <li>Connections</li>
      <li onClick={() => dispatch(userSignOut())}>Logout
      </li>
    </ul>
  );
  const {authUser} = useSelector(({auth})=> auth);
  return (
    <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={userMenuOptions}
             trigger="click">
      <Avatar src={`/assets/images/${authUser.Profile_picture}`}
              className="gx-avatar gx-pointer" alt=""/>
    </Popover>
  )
};

export default UserInfo;
