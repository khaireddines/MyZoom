import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Drawer, message } from "antd";
import {
    UnlockOutlined,
    BarsOutlined,
    LockOutlined,
    DesktopOutlined,
    SmileOutlined,
    SubnodeOutlined
} from "@ant-design/icons";
import CustomScrollbars from "../../util/CustomScrollbars";
import AppModuleHeader from "../../components/AppModuleHeader/index";
import IntlMessages from "../../util/IntlMessages";
import axios from "../../util/Api";
import "./ChatRoom.css";
import RoomList from "../../components/VideoRoom/RoomList";
import NewRoom from "../../components/VideoRoom/NewRoom";
import Janus from "../../util/JanusES6";
import adapter from "webrtc-adapter";

const decodenum = string => {
    let result;
    try {
        result = window.atob(window.atob(window.atob(string)));
    } catch (error) {
        result = 0;
    }
    return result;
};
let iconStyle = {
    marginRight: "16px",
    fontSize: "20px"
};
const filterOptions = [
    {
        id: 1,
        name: "All Rooms",
        icon: <BarsOutlined style={iconStyle} />
    },
    {
        id: 2,
        name: "Public Rooms",
        icon: <UnlockOutlined style={iconStyle} />
    },
    {
        id: 3,
        name: "Private Rooms",
        icon: <LockOutlined style={iconStyle} />
    },
    {
        id: 4,
        name: "My Rooms",
        icon: <SmileOutlined style={iconStyle} />
    },
    {
        id: 5,
        name: "Join Requests",
        icon: <SubnodeOutlined style={iconStyle} />
    }
];

class ChatRooms extends Component {
    RoomSideBar = user => {
        return (
            <div className="gx-module-side">
                <div className="gx-module-side-header">
                    <div className="gx-module-logo">
                        <DesktopOutlined
                            className="gx-mr-4"
                            style={{ fontSize: "27px" }}
                        />
                        <span>
                            <IntlMessages id="chat.VideoRoom" />
                        </span>
                    </div>
                </div>

                <div className="gx-module-side-content">
                    <CustomScrollbars className="gx-module-side-scroll">
                        <div
                            className="gx-module-add-task"
                            style={{ paddingBottom: "0px", paddingTop: "11px" }}
                        >
                            <Button
                                className="gx-btn-block ant-btn"
                                type="primary"
                                aria-label="add"
                                onClick={this.onAddRoom}
                            >
                                <i className="icon icon-add gx-mr-2" />
                                <span>Create Room</span>
                            </Button>
                        </div>
                        <div
                            className="gx-module-add-task"
                            style={{ paddingBottom: "0px", paddingTop: "11px" }}
                        >
                            <Button
                                className="gx-btn-block ant-btn"
                                aria-label="sub"
                            >
                                <i className="icon icon-signin gx-mr-2" />
                                <span>Subscribe To A Room</span>
                            </Button>
                        </div>
                        <div className="gx-module-side-nav">
                            <ul className="gx-module-nav">
                                {filterOptions.map(option => (
                                    <li
                                        key={option.id}
                                        className="gx-nav-item gx-mb-3"
                                    >
                                        <span
                                            className={`gx-link ${
                                                option.id ===
                                                this.state.selectedSectionId
                                                    ? "active"
                                                    : ""
                                            }`}
                                            onClick={this.onFilterOptionSelect.bind(
                                                this,
                                                option
                                            )}
                                        >
                                            {option.icon}
                                            <span>{option.name}</span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </CustomScrollbars>
                </div>
            </div>
        );
    };
    onAddRoom = () => {
        this.setState({ addRoomState: true });
    };
    onRoomClose = () => {
        this.setState({ addRoomState: false });
    };
    onFilterOptionSelect = option => {
        switch (option.name) {
            case "All Rooms": {
                this.setState({
                    selectedSectionId: option.id,
                    filterOption: option.name,
                    roomList: this.state.allRooms
                });
                break;
            }
            case "Public Rooms": {
                this.setState({
                    selectedSectionId: option.id,
                    filterOption: option.name,
                    roomList: this.state.allRooms.filter(
                        Room => !Room.isPrivate
                    ) // change the list of rooms
                });
                break;
            }
            case "Private Rooms": {
                this.setState({
                    selectedSectionId: option.id,
                    filterOption: option.name,
                    roomList: this.state.allRooms.filter(Room => Room.isPrivate)
                });
                break;
            }
            case "My Rooms": {
                this.GetPersonalRooms().then(Res => {
                    this.setState({
                        selectedSectionId: option.id,
                        filterOption: option.name,
                        roomList: Res.data,
                        PersonalRooms: Res.data
                    });
                });
                break;
            }
            default:
                break;
        }
    };
    onSaveRoom = async data => {
      //work on the data that will be sent to the server before sending !!
      let payload={};
      if (data.type==='Private') 
        payload={
          Name:data.name,
          isPrivate: true,
          RoomPassword:data.password
        }
      else
        payload={
          Name:data.name,
          isPrivate: false,
        }
      let res=await axios.post("api/NewChatRoom", payload);
      if (res.status == 200) {
        this.CreateRoomInJanus(res.data);
        /* this.setState({
          alertMessage: "Room Added Successfully!!",
          showMessage: true
      }); */
      }
      console.log(data);
      // this.onFilterOptionSelect(this.state.filterOption);
    };
    onDeleteRoom = data => {
        this.setState({
            alertMessage: "Room Deleted Successfully",
            showMessage: true,
            allRooms: this.state.allRooms.filter(
                contact => contact.id !== data.id
            ),
            roomList: this.state.allRooms.filter(
                contact => contact.id !== data.id
            )
        });
    };
    filterRoom = RoomName => {
        const { filterOption } = this.state;
        if (RoomName === "") {
            if (filterOption === "All Rooms") {
                this.setState({ roomList: this.state.allRooms });
            } else if (filterOption === "Public Rooms") {
                this.setState({
                    roomList: this.state.allRooms.filter(
                        Room => !Room.isPrivate
                    )
                });
            } else if (filterOption === "Private Rooms") {
                this.setState({
                    roomList: this.state.allRooms.filter(Room => Room.isPrivate)
                });
            } else if (filterOption === "My Rooms") {
                this.setState({ roomList: this.state.PersonalRooms });
            }
        } else {
            const filterContact = this.state.allRooms.filter(
                Room =>
                    Room.Name.toLowerCase().indexOf(RoomName.toLowerCase()) > -1
            );
            if (filterOption === "All Rooms") {
                this.setState({ roomList: filterContact });
            } else if (filterOption === "Public Rooms") {
                this.setState({
                    roomList: filterContact.filter(Room => !Room.isPrivate)
                });
            } else if (filterOption === "Private Rooms") {
                this.setState({
                    roomList: filterContact.filter(Room => Room.isPrivate)
                });
            } else if (filterOption === "My Rooms") {
                const PersonalRooms = this.state.PersonalRooms.filter(
                    Room =>
                        Room.Name.toLowerCase().indexOf(
                            RoomName.toLowerCase()
                        ) > -1
                );
                this.setState({ roomList: PersonalRooms });
            }
        }
    };
    handleRequestClose = () => {
        this.setState({
            showMessage: false
        });
    };
    updateRoomDetails(evt) {
        this.setState({
            searchRoom: evt.target.value
        });
        this.filterRoom(evt.target.value);
    }
    onToggleDrawer() {
        this.setState({
            drawerState: !this.state.drawerState
        });
    }
    GetRooms = async () => {
        let Res = await axios.post("api/AllRooms");
        this.setState({
            roomList: Res.data,
            allRooms: Res.data
        });
    };
    GetPersonalRooms = async () => {
        return await axios.post("api/PersonalRooms");
    };
    constructor(props) {
        super(props);
        this.state = {
            noRoomFoundMessage: "ops! No Rooms Found",
            alertMessage: "",
            showMessage: false,
            selectedSectionId: 1,
            drawerState: false,
            searchRoom: "",
            filterOption: "All Rooms",
            allRooms: [],
            PersonalRooms: [],
            roomList: [],
            selectedContact: null,
            selectedContacts: 0,
            addRoomState: false,
            SFUHandler:null
        };
    }
    render() {
        const {
            roomList,
            addRoomState,
            drawerState,
            alertMessage,
            showMessage,
            noRoomFoundMessage
        } = this.state;
        return (
            <div className="gx-main-content">
                <div className="gx-app-module">
                    <div className="gx-d-block gx-d-lg-none">
                        <Drawer
                            placement="left"
                            closable={false}
                            visible={drawerState}
                            onClose={this.onToggleDrawer.bind(this)}
                        >
                            {this.RoomSideBar()}
                        </Drawer>
                    </div>
                    <div className="gx-module-sidenav gx-d-none gx-d-lg-flex">
                        {this.RoomSideBar()}
                    </div>
                    <div className="gx-module-box">
                        <div className="gx-module-box-header">
                            <span className="gx-drawer-btn gx-d-flex gx-d-lg-none">
                                <i
                                    className="icon icon-menu gx-icon-btn"
                                    aria-label="Menu"
                                    onClick={this.onToggleDrawer.bind(this)}
                                />
                            </span>
                            <AppModuleHeader
                                placeholder="Search contact"
                                onChange={this.updateRoomDetails.bind(this)}
                                value={this.state.searchRoom}
                            />
                        </div>
                        <div className="gx-module-box-content">
                            <CustomScrollbars className="gx-module-content-scroll">
                                {roomList.length === 0 ? (
                                    <div className="gx-h-100 gx-d-flex gx-align-items-center gx-justify-content-center">
                                        {noRoomFoundMessage}
                                    </div>
                                ) : (
                                    <RoomList
                                        roomList={roomList}
                                        onDeleteRoom={this.onDeleteRoom.bind(
                                            this
                                        )}
                                    />
                                )}
                            </CustomScrollbars>
                        </div>
                    </div>
                </div>
                <NewRoom
                    open={addRoomState}
                    onSaveRoom={this.onSaveRoom}
                    onRoomClose={this.onRoomClose}
                />
                {showMessage &&
                    message.info(
                        <span id="message-id">{alertMessage}</span>,
                        3,
                        this.handleRequestClose
                    )}
            </div>
        );
    }
    CreateRoomInJanus(RoomID){
      const myroom = parseInt(decodenum(RoomID));
      var body = {
          request: "create",
          room: myroom,
          is_private: false,
          videocodec: "vp9"
      };
    this.state.SFUHandler.send({ message: body });
    

    }
    componentDidMount() {
      this.GetRooms();
        Janus.init({
            debug: true,
            dependencies: Janus.useDefaultDependencies({ adapter }),
            callback: () => {
                janus = new Janus({
                    server: server,
                    success: () => {
                        // Done! attach to plugin XYZ
                        janus.attach({
                            plugin: "janus.plugin.videoroom",
                            opaqueId: opaqueId,
                            success: pluginHandler => {
                                SFUHandler = pluginHandler;
                                this.setState({SFUHandler:pluginHandler});
                                Janus.log(
                                    "Plugin attached! (" +
                                        SFUHandler.getPlugin() +
                                        ", id=" +
                                        SFUHandler.getId() +
                                        ")"
                                );
                            },
                            onmessage: (msg, jsep) => {
                              Janus.log(msg);
                            },
                            error: error => {
                                Janus.error(
                                    "  -- Error attaching plugin...",
                                    error
                                );
                                
                            }
                        });
                    },
                    error: cause => {
                        // Error, can't go on...
                        Janus.error(error);
                        /* bootbox.alert(error, function() {
                  window.location.reload();
              }); */
                    }
                });
            }
        });
    }
}
let janus = null;
const server = "https://acelens.me:8089/janus";

const opaqueId = "videoroom-" + Janus.randomString(12);
let SFUHandler = null;

const mapStateToProps = state => ({
    authUser: state.auth.authUser
});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(ChatRooms);
