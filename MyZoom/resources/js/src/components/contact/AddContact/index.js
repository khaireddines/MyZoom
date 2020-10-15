import React from "react";
import {Avatar, Input, Modal, message} from "antd";

import IntlMessages from "../../../util/IntlMessages";

class AddContact extends React.Component {
  constructor(props) {
    super(props);

    const {email} = props.contact;
    this.state = {
      email
    }
  }

  render() {
    const {onSaveContact, onContactClose, open, contact} = this.props;
    const { email } = this.state;
    
    return (
      <Modal
        title={<IntlMessages id="contact.addContact"/>}
        toggle={onContactClose} visible={open}
        closable={false}
        onOk={() => {
          if (email === '')
            {message.warning(<span>Please Provide an email</span>,3); return;}
          onContactClose();
          onSaveContact(
            {
              'email': email,
            });
          this.setState({
            'email': '',
          })

        }}
        onCancel={onContactClose}>

        <div className="gx-modal-box-row">
          <div className="gx-modal-box-avatar" style={{margin:'auto'}}>
            <Avatar size="large" src={`../assets/images/DefaultUser.png`} />
          </div>
          
        </div>
        <div>
          <Input
                placeholder="Email"
                onChange={(event) => this.setState({email: event.target.value})}
                value={email}
                margin="normal"/>
          </div>
      </Modal>
    );
  }
}

export default AddContact;
