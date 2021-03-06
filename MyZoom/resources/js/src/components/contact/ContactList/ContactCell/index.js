import React from "react";
import {Avatar, Checkbox, Dropdown, Menu} from "antd";

import AddContact from "../../AddContact/index";

class ContactCell extends React.Component {

  getOption = () =>{ 
    let options = [];
    if (this.props.type === 'requests') {
      options = [
        'Accept',
        'Reject'
      ];
    } else if (this.props.type === 'contacts'){
      options = [
        'Unfriend'
      ];
    }
    return options;
  }

  onContactClose = () => {
    this.setState({addContactState: false});
  };
  onDeleteContact = (contact) => {
    this.setState({addContactState: false});
    this.props.onDeleteContact(contact);
  };
  onAcceptContact = (contact) => {
    this.props.onAcceptContact(contact);
  };
  menus = () => (<Menu onClick={(e) => {
    if (e.key === 'Accept') {
      this.onAcceptContact(this.props.contact)
    } else if (e.key === 'Unfriend'){
      this.onDeleteContact(this.props.contact)
    } else if (e.key === 'Reject'){
      this.onDeleteContact(this.props.contact)
    }
  }
  }>
    {this.getOption().map(option =>
      <Menu.Item key={option}>
        {option}
      </Menu.Item>,
    )}
  </Menu>);

  constructor() {
    super();
    this.state = {
      addContactState: false,
    }
  }

  render() {
    const {contact, onSaveContact, type} = this.props;
    const {addContactState} = this.state;
    const {name, email, Profile_picture} = contact;
    return (

      <div className="gx-contact-item">
        <div className="gx-module-list-icon">
          <div className="gx-ml-2 gx-d-none gx-d-sm-flex">
            {(Profile_picture === null || Profile_picture === '') ?
              <Avatar size="large">
                {name.charAt(0).toUpperCase()}
              </Avatar>
              :
              <Avatar size="large" alt={name}  src={`../assets/images/${Profile_picture}`} />
            }
          </div>
        </div>

        <div className="gx-module-list-info gx-contact-list-info">
          <div className="gx-module-contact-content">
            <p className="gx-mb-1">
              <span className="gx-text-truncate gx-contact-name"> {name} </span>
            </p>

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

            {addContactState &&
            <AddContact open={addContactState} contact={contact} onSaveContact={onSaveContact}
                        onContactClose={this.onContactClose} onDeleteContact={this.onDeleteContact}/>}
          </div>
        </div>
      </div>
    )
  }
}

export default ContactCell;
