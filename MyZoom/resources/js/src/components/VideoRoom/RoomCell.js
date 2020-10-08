import React from "react";
import {Dropdown, Menu, message, Tooltip} from "antd";
import { connect } from "react-redux";
import copy from "copy-to-clipboard";
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
    if (this.props.Room.isPrivate) {
      this.state={
        HiddenPassword:this.props.Room.RoomPassword.substr(0,2)+'*****',
        FullPassword:this.props.Room.RoomPassword,
        Reveal:false,
      }   
    } else {
      this.state={
        HiddenPassword:'',
        FullPassword:'',
        Reveal:false,
      }
    }
    
  }
  ToggelReveal(oldReveal){
    this.setState({
      Reveal:!oldReveal
    })
  }
  copyText(Password,type) {
    copy(Password);
    switch (type) {
      case 'password':
        message.success("Password Copied (^ç^) ");
        break;
      case 'link':
        message.success("Invite Link Copied (^ç^) ");
        break;
    }
    
  }
  
  render() {
    const {Room} = this.props;
    
    const {Name, isPrivate, RoomOwner,Chat_room_url, RoomPassword, Unique_Invite_Link} = Room;
    const {HiddenPassword, FullPassword,Reveal}=this.state;
    return (

      <div className="gx-contact-item">
        <div className="gx-module-list-info gx-contact-list-info">
          <div className="gx-module-contact-content">
            <p className="gx-mb-1">
              <span className="gx-text-truncate gx-contact-name"> {Name} </span>
              <span className="gx-toolbar-separator">&nbsp;</span>
              <span className="gx-text-truncate gx-job-title">{(isPrivate)?'Private':'Public'}</span>
              {(isPrivate==true)&&(<><span className="gx-toolbar-separator">&nbsp;</span>
              <Tooltip title="Copy">
                <span className="gx-text-truncate gx-job-title"
                style={{cursor: "pointer"}}
                onClick={()=>this.copyText(FullPassword,'password')} 
                onMouseEnter={()=>this.ToggelReveal(Reveal)}
                onMouseLeave={()=>this.ToggelReveal(Reveal)}
                >{(Reveal)?FullPassword:HiddenPassword}</span>
              </Tooltip>
              </>)}
            </p>

            <div className="gx-text-muted">
            <span className="gx-email gx-d-inline-block gx-mr-2">
            Room Moderator : 
            </span>
              <span className="gx-phone gx-d-inline-block">
                {(this.props.authUser.id==this.props.Room.RoomOwner.id)?"That's Mine ^ç^":RoomOwner.name}
                </span>
            </div>
            <div className="gx-text-muted">
            <span className="gx-email gx-d-inline-block gx-mr-2">
            Room Link : 
            </span>
              <span className="gx-phone gx-d-inline-block"><a href={Chat_room_url}>{Chat_room_url}</a></span>
            
            {(this.props.authUser.id==this.props.Room.RoomOwner.id)&&(
                <>
                  <span className="gx-toolbar-separator">&nbsp;</span>
                  <span className="gx-email gx-d-inline-block gx-mr-2">
                  Room Invite Link : 
                  </span>
                  <span className="gx-phone gx-d-inline-block">
                    <a onClick={()=>this.copyText(Unique_Invite_Link,'link')}>{Unique_Invite_Link}</a>
                  </span>
                </>
            )}
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
