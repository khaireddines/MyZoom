import React from "react";
import {Dropdown, Menu} from "antd";
import { connect } from "react-redux";
class RoomCell extends React.Component {

  onDeleteRoom = (Room) => {
    this.props.onDeleteRoom(Room);
  };
  
  menus = () => (<Menu onClick={(e) => {
    if (e.key === 'Delete') {
      this.onDeleteRoom(this.props.Room)
    }
  }
  }>
      <Menu.Item key="Delete">
        {(this.props.authUser.id==this.props.Room.RoomOwner.id)?'Delete':'Unsubscribe'}
      </Menu.Item>
    
  </Menu>);

  constructor(props) {
    super(props);
    
  }
  
  render() {
    const {Room} = this.props;
    
    const {Name, isPrivate, RoomOwner,Chat_room_url, RoomPassword} = Room;
    
    return (

      <div className="gx-contact-item">
        <div className="gx-module-list-info gx-contact-list-info">
          <div className="gx-module-contact-content">
            <p className="gx-mb-1">
              <span className="gx-text-truncate gx-contact-name"> {Name} </span>
              <span className="gx-toolbar-separator">&nbsp;</span>
              <span className="gx-text-truncate gx-job-title">{(isPrivate)?'Private':'Public'}</span>
              {(isPrivate==true)&&(<><span className="gx-toolbar-separator">&nbsp;</span>
              <span className="gx-text-truncate gx-job-title">{RoomPassword}</span></>)}
            </p>

            <div className="gx-text-muted">
            <span className="gx-email gx-d-inline-block gx-mr-2">
            Room Moderator : 
            </span>
              <span className="gx-phone gx-d-inline-block">{RoomOwner.name}</span>
            </div>
            <div className="gx-text-muted">
            <span className="gx-email gx-d-inline-block gx-mr-2">
            Room Link : 
            </span>
              <span className="gx-phone gx-d-inline-block"><a href={Chat_room_url}>{Chat_room_url}</a></span>
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
const mapStateToProps = state => ({
  authUser: state.auth.authUser
});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps,mapDispatchToProps)(RoomCell);
