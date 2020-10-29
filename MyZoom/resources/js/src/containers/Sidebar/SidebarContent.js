import React, { useEffect, useState } from "react";
import {useSelector} from "react-redux";
import {Menu} from "antd";
import {Link} from "react-router-dom";

import CustomScrollbars from "../../util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "../../constants/ThemeSetting";
import "./sidebar.css";
import IntlMessages from "../../util/IntlMessages";
import { VideoCameraOutlined, VideoCameraAddOutlined  } from "@ant-design/icons";

const SidebarContent = () => {

  let {navStyle, themeType, pathname} = useSelector(({settings}) => settings);

  const getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return "gx-no-header-notifications";
    }
    return "";
  };

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  const {authUser}= useSelector(({auth})=>auth);
  const [user,setUser] = useState(null);
  useEffect(()=>{
    setUser(authUser);
  });

  return (<>

      <SidebarLogo/>
      <div className="gx-sidebar-content">
        <div className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}>
          {(user !=null) && <UserProfile user={user} />}
          <AppsNavigation/>
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar" >
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline"
            >

            <Menu.Item key="ConferenceRoom">
              <Link to="/ConferenceRoom"><VideoCameraOutlined style={{fontSize: "20px"}} />
                <IntlMessages id="sidebar.ConferenceRoomPage"/></Link>
            </Menu.Item>
            <Menu.Item key="social/chat">
              <Link to="/social/chat"><i className="icon icon-chat-bubble"/>
                <IntlMessages id="sidebar.chatApp"/></Link>
            </Menu.Item>
            <Menu.Item key="social/contacts">
              <Link to="/social/contacts"><i className="icon icon icon-contacts"/>
                <IntlMessages id="sidebar.contactsApp"/></Link>
            </Menu.Item>
            <Menu.Item key="Records">
              <Link to="/Records"><VideoCameraAddOutlined style={{fontSize: "20px"}} />
                <IntlMessages id="sidebar.Records"/></Link>
            </Menu.Item>
          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};

export default SidebarContent;

