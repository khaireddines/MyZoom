import React, {Component} from "react";
import {Button, Checkbox, Drawer, message, Modal} from "antd";
import CustomScrollbars from "../../../util/CustomScrollbars";
import ContactList from "../../../components/contact/ContactList";
import AppModuleHeader from "../../../components/AppModuleHeader/index";
import AddContact from "../../../components/contact/AddContact";
import IntlMessages from "../../../util/IntlMessages";
import axios from "../../../util/Api";
import {
  UnlockOutlined,
  BarsOutlined,
  LockOutlined,
  DesktopOutlined,
  SmileOutlined,
  SubnodeOutlined,
  ExclamationCircleTwoTone
} from "@ant-design/icons";
import './Contact.css';
let iconStyle = {
  marginRight: "16px",
  fontSize: "20px"
};
const { confirm } = Modal;
const filterOptions = [
  {
    id: 1,
    name: 'All Contacts',
    icon: <SmileOutlined style={iconStyle} />
  }, {
    id: 2,
    name: 'Friend Requests',
    icon: <SubnodeOutlined style={iconStyle} />
  }
];

class Contact extends Component {
  ContactSideBar = (user) => {
    return <div className="gx-module-side">
      <div className="gx-module-side-header">
        <div className="gx-module-logo">
          <i className="icon icon-contacts gx-mr-4"/>
          <span><IntlMessages id="chat.contacts"/></span>
        </div>
      </div>

      <div className="gx-module-side-content">
        <CustomScrollbars className="gx-module-side-scroll">
          <div className="gx-module-add-task">
            <Button className="gx-btn-block ant-btn" type="primary" aria-label="add"
                    onClick={this.onAddContact}>
              <i className="icon icon-add gx-mr-2"/>
              <span>Add New Contact</span>
            </Button>
          </div>
          <div className="gx-module-side-nav">
            <ul className="gx-module-nav">
              {filterOptions.map(option => <li key={option.id} className="gx-nav-item">
                  <span
                    className={`gx-link ${option.id === this.state.selectedSectionId ? 'active' : ''}`} onClick={
                    this.onFilterOptionSelect.bind(this, option)
                  }>
                   
                    {option.icon}
                    <span>{option.name}</span>
                  </span>
                </li>
              )}

            </ul>
          </div>
        </CustomScrollbars>
      </div>
    </div>

  };
  onAddContact = () => {
    this.setState({addContactState: true});
  };
  onContactClose = () => {
    this.setState({addContactState: false});
  };
  onFilterOptionSelect = (option) => {
    switch (option.name) {
      case 'All Contacts': {
        this.getAllContact().then(Res => {
          this.setState({
            selectedSectionId: option.id,
            filterOption: option.name,
            contactList: this.state.allContact
          });
        })
        break;
      }
      case 'Friend Requests': {
        this.getAllFriendshipRequests().then(Res =>{
          this.setState({
            selectedSectionId: option.id,
            filterOption: option.name,
            contactList: this.state.allContact
          });
        });
        break;
      }
      default:
        break;
    }

  };
  
  onSaveContact = (data) => {
    axios.post('/api/addfriend',data).then(res =>{
      this.setState({
        alertMessage: res.data,
        showMessage: true,
      })
    })
    // this.onFilterOptionSelect(this.state.filterOption);
  };
  // Accept Contact
  onAcceptContact = (data) => {
    let Res = axios.post('api/AcceptFriendship',{FriendId:data.id}).then(Res => {
      message.success(<span id='Accept-id'>Friendship Accepted</span>,3);
      this.getAllFriendshipRequests();
    });
  }
  // Delete & Reject Contact
  onDeleteContact = (data) => {
    const {type}=this.state;
    let contaxt = this;
    confirm({
      title: "Confirmation",
      icon: <ExclamationCircleTwoTone twoToneColor="#f73e2d" />,
      content: <span id="Confirmation-span">Are you sure ?
      This Action will result in deleting this contact !! </span>,
      onOk() {
        axios.post('api/RejectOrDeleteFriendship',{FriendId:data.id}).then(res =>{
          message.success(<span id="message-id">{res.data}</span>, 3);
          if (type === 'requests') {
            contaxt.getAllFriendshipRequests();
          } else {
            contaxt.getAllContact();
          }
          
        })
      },
      okText: "I Understand",
      okType: 'danger'
  });
  };
  filterContact = (userName) => {
    const {filterOption} = this.state;
    if (userName === '') {
      this.setState({contactList: this.state.allContact});
    } else {
      const filterContact = this.state.allContact.filter((contact) =>
        contact.name.toLowerCase().indexOf(userName.toLowerCase()) > -1);
      if (filterOption === 'All Contacts') {
        this.setState({contactList: filterContact});
      } else if (filterOption === 'Friend Requests') {
        this.setState({contactList: filterContact});
      }
    }
  };
  handleRequestClose = () => {
    this.setState({
      showMessage: false,
    });
  };
  getAllContact = async () => {
    let Res = await axios.post("api/contactList",{FriendsOrRequests:true});
    this.setState({
        type:'contacts',
        noContentFoundMessage: 'No Contact Found !!',
        allContact: Res.data,
        contactList: Res.data
    });
  };
  getAllFriendshipRequests = async () =>{
    let Res = await axios.post("api/contactList",{FriendsOrRequests:false});
    this.setState({
        type:'requests',
        noContentFoundMessage: 'No Requests Found !!',
        allContact: Res.data,
        contactList: Res.data
    });
  }
  componentDidMount(){
    this.getAllContact();
  }
  constructor() {
    super();
    this.state = {
      noContentFoundMessage: 'No Contact Found !!',
      type:'contacts',
      alertMessage: '',
      showMessage: false,
      selectedSectionId: 1,
      drawerState: false,
      searchUser: '',
      filterOption: 'All Contacts',
      allContact: [],
      contactList: [],
      selectedContact: null,
      selectedContacts: 0,
      addContactState: false,
    }
  }
  onToggleDrawer() {
    this.setState({
      drawerState: !this.state.drawerState
    });
  }
  render() {
    const {user, contactList, addContactState, drawerState, alertMessage, showMessage, noContentFoundMessage} = this.state;
    return (
      <div className="gx-main-content">
        <div className="gx-app-module">

          <div className="gx-d-block gx-d-lg-none">
            <Drawer
              placement="left"
              closable={false}
              visible={drawerState}
              onClose={this.onToggleDrawer.bind(this)}>
              {this.ContactSideBar()}
            </Drawer>
          </div>
          <div className="gx-module-sidenav gx-d-none gx-d-lg-flex">
            {this.ContactSideBar(user)}
          </div>

          <div className="gx-module-box">
            <div className="gx-module-box-header">
              <span className="gx-drawer-btn gx-d-flex gx-d-lg-none">
                  <i className="icon icon-menu gx-icon-btn" aria-label="Menu"
                     onClick={this.onToggleDrawer.bind(this)}/>
              </span>

              <AppModuleHeader placeholder="Search contact" notification={false} apps={false}
                               onChange={this.updateContactUser.bind(this)}
                               value={this.state.searchUser}/>
            </div>
            <div className="gx-module-box-content">

              
              <CustomScrollbars className="gx-module-content-scroll">
                {contactList.length === 0 ?
                  <div className="gx-h-100 gx-d-flex gx-align-items-center gx-justify-content-center">
                    {noContentFoundMessage}
                  </div>
                  : <ContactList contactList={contactList}
                                 onDeleteContact={this.onDeleteContact.bind(this)}
                                 onAcceptContact={this.onAcceptContact.bind(this)}
                                 onSaveContact={this.onSaveContact.bind(this)}
                                 type={this.state.type} />
                }
              </CustomScrollbars>

            </div>
          </div>
        </div>

        <AddContact open={addContactState} contact={{
          'email': ''
        }} onSaveContact={this.onSaveContact}
           onContactClose={this.onContactClose} 
           onDeleteContact={this.onDeleteContact}/>

        {showMessage && message.info(<span id="message-id">{alertMessage}</span>, 3, this.handleRequestClose)}
      </div>
    )
  }
}

export default Contact;
