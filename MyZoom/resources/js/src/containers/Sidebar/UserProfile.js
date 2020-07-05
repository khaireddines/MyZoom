import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Popover } from "antd";
import { userSignOut } from "../../appRedux/actions/Auth";
import { useHistory } from "react-router-dom";
const UserProfile = ({user}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userMenuOptions = (
        <ul className="gx-user-popover">
            <li>My Account</li>
            <li>Connections</li>
            <li
                onClick={() => {
                    dispatch(userSignOut());
                    history.push("/");
                }}
            >
                Logout
            </li>
        </ul>
    );
    
        console.log(user);
    return (
        <div className="gx-flex-row gx-align-items-center gx-mb-4 gx-avatar-row">
            <Popover
                placement="bottomRight"
                content={userMenuOptions}
                trigger="click"
            >
                <Avatar
                    src={`/assets/images/${user.Profile_picture}`}
                    className="gx-size-40 gx-pointer gx-mr-1"
                    alt=""
                />
                <span className="gx-avatar-name">
                    {user.name}
                    <i className="icon icon-chevron-down gx-fs-xxs gx-ml-2" />
                </span>
            </Popover>
        </div>
    );
};

export default UserProfile;
