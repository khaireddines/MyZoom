import React from "react";
import {Avatar, Checkbox, Dropdown, Menu} from "antd";


const options = [
  'Accept',
  'Reject',
];

class UserCell extends React.Component {

  
  onDeleteUserRequest = (data) => {
    this.props.onDeleteUserRequest(data);
  };
  onAcceptUserRequest = (data) => {
    this.props.onAcceptUserRequest(data);
  };
  menus = () => (<Menu onClick={(e) => {
    if (e.key === 'Accept') {
      this.onAcceptUserRequest(this.props.data);
    } else {
      this.onDeleteUserRequest(this.props.data)
    }
  }
  }>
    {options.map(option =>
      <Menu.Item key={option}>
        {option}
      </Menu.Item>,
    )}
  </Menu>);

  constructor() {
    super();
    
  }

  render() {
    const {data} = this.props;
    const {idroom, nameroom, isPrivate}= data.roomdata;
    const {iduser, nameuser, Profile_picture, email} = data.userdata;
    

    return (

      <div className="gx-contact-item">
        <div className="gx-module-list-icon">
          <div className="gx-ml-2 gx-d-none gx-d-sm-flex">
              <Avatar size="large" alt={name} src={`./assets/images/${Profile_picture}`}/>
          </div>
        </div>

        <div className="gx-module-list-info gx-contact-list-info">
          <div className="gx-module-contact-content">
            <p className="gx-mb-1">
              <span className="gx-text-truncate gx-contact-name"> {nameuser} </span>
            </p>
            <div className="gx-text-muted">
            <span className="gx-email gx-d-inline-block gx-mr-2">
                Request to Join Your {(isPrivate)?'Private':'Public'} Room : {nameroom}
            </span>
            </div>
            <div className="gx-text-muted">
            <span className="gx-email gx-d-inline-block gx-mr-2">
                {email}
            </span>
            </div>
          </div>

          <div className="gx-module-contact-right">

            <Dropdown overlay={this.menus()} placement="bottomRight" trigger={['hover']}>
              <i className="gx-icon-btn icon icon-ellipse-v"/>
            </Dropdown>

            
          </div>
        </div>
      </div>
    )
  }
}
export default UserCell;
