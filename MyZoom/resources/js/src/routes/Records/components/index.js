import React, { Component } from 'react'
import { 
    SmileOutlined,
    BarsOutlined,
    ShareAltOutlined,
    VideoCameraAddOutlined,
    CloudServerOutlined
} from "@ant-design/icons";
import IntlMessages from "../../../util/IntlMessages";
import RecordList from "./RecordsList";
import AppModuleHeader from "../../../components/AppModuleHeader/index";
import CustomScrollbars from "../../../util/CustomScrollbars";
import { Drawer, Modal, Empty} from "antd";
import Axios from "../../../util/Api";
import { connect } from "react-redux";

let iconStyle = {
    marginRight: "16px",
    fontSize: "20px"
  };
const { confirm } = Modal;

const filterOptions = [
    {
        id: 1,
        name: 'Previews',
        icon: <CloudServerOutlined style={iconStyle} />
    },
    {
        id: 2,
        name: 'All Records',
        icon: <BarsOutlined style={iconStyle} />
    },
    {
        id: 3,
        name: 'My Records',
        icon: <SmileOutlined style={iconStyle} />
    },
    {
        id: 4,
        name: 'Shared Records',
        icon: <ShareAltOutlined style={iconStyle} />
    }
];
class index extends Component {
    ContactSideBar = (user) => {
        return <div className="gx-module-side">
            <div className="gx-module-side-header">
                <div className="gx-module-logo">
                    <VideoCameraAddOutlined style={{fontSize: "26px",marginRight: "16px"}} />
                    <span><IntlMessages id="sidebar.Records" /></span>
                </div>
            </div>
            <div className="gx-module-side-content">
                <CustomScrollbars className="gx-module-side-scroll">
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
    filterSearchRecords = (RoomName) => {
        const { filterOption } = this.state;
        if (RoomName === '') {
            if (filterOption === 'Previews') {
                this.setState({ recordsList: this.state.allRecords });
            }else
            {
                this.setState({ recordsList: this.state.allRecordsReady });
            }
        } else {
            let filterRecords = '';
            if (filterOption === 'Previews'){
                filterRecords = this.state.allRecords.filter((record) =>
                JSON.parse(record.name).RoomName.toLowerCase().indexOf(RoomName.toLowerCase()) > -1);
                this.setState({ recordsList: filterRecords });
            } else if (filterOption === 'All Records') {
                filterRecords = this.state.allRecordsReady.filter((record) =>
                (record.Room.Name).toLowerCase().indexOf(RoomName.toLowerCase()) > -1);
                this.setState({ recordsList: filterRecords });
            } else if (filterOption === 'My Records') {
                filterRecords = this.state.allRecordsReady.filter((record) =>
                (record.Room.Name).toLowerCase().indexOf(RoomName.toLowerCase()) > -1);
                this.setState({ recordsList: filterRecords });
            } else if (filterOption === 'Shared Records'){
                filterRecords = this.state.allRecordsReady.filter((record) =>
                (record.Room.Name).toLowerCase().indexOf(RoomName.toLowerCase()) > -1);
                this.setState({ recordsList: filterRecords })
            }
        }
    };
    onFilterOptionSelect = (option) => {
        switch (option.name) {
            case 'Previews': {
                this.getRecordsOfServer();
                this.setState({
                    selectedSectionId: option.id,
                    type:'preview',
                    filterOption: option.name,
                    recordsList: this.state.allRecords
                });
                break;
            }
            case 'All Records': {
                this.getRecordsReady();
                this.setState({
                    selectedSectionId: option.id,
                    type:'records',
                    filterOption: option.name,
                    recordsList: this.state.allRecordsReady
                });
                break;
            }
            case 'My Records': {
                if (!this.state.loadedOnce) {
                    this.getRecordsReady();
                }
                this.setState({
                    selectedSectionId: option.id,
                    type:'records',
                    filterOption: option.name,
                    recordsList: this.state.allRecordsReady.filter((record) =>
                    record.RecordOwner.id == this.props.authUser.id
                    )
                });
                break;
            }
            case 'Shared Records': {
                if (!this.state.loadedOnce) {
                    this.getRecordsReady();
                }
                this.setState({
                    selectedSectionId: option.id,
                    type:'records',
                    filterOption: option.name,
                    recordsList: this.state.allRecordsReady.filter((record) =>
                    record.RecordOwner.id != this.props.authUser.id
                    )
                });
                break;
            }
            default:
                break;
        }
    };
    updateRecordsList(evt) {
        this.setState({
          searchRecords: evt.target.value,
        });
        this.filterSearchRecords(evt.target.value)
    };
    onToggleDrawer() {
        this.setState({
          drawerState: !this.state.drawerState
        });
    };
    getRoomIds = async()=>{
        let result = [];
        let Res = await Axios.post('api/AllRooms');
        if(Res.data.length !=0){
            Res.data.map((row)=>{
                result.push(row.Name); 
            });
        }
        return result;
    }
    
    componentDidMount(){
        this.filterRecords();
    }
    filterRecords = ()=>{
        this.getRoomIds().then((res)=>{
            let result = [];
            this.state.allRecordsOfServer.map((row)=>{
                let data = JSON.parse(row.name);
                if (res.includes(data.RoomName)) {
                    result.push(row);
                }
            });
            this.setState({
                recordsList:result,
                allRecords: result
            })
        });
    }
    getRecordsOfServer = async ()=>{
        var update = { request: "update" };
        await this.state.RecordHandler.send({
            message: update, success: () => {
                var rec = { request: "list" };
                this.state.RecordHandler.send({
                    message: rec, success: (result) => {
                        this.setState({
                            allRecordsOfServer:result.list
                        })
                    }
                });
            }
        });
        this.filterRecords();
    }
    getRecordsReady = async ()=> {
        let Res = await Axios.post('api/GetRecords',{});
        this.setState({
            allRecordsReady: Res.data,
            recordsList : Res.data,
            loadedOnce:true
        });
    }
    playPreview(Recordid){    
        var play = { request: "play", id: Recordid };
        this.state.RecordHandler.send({ message: play })
    }
    stopPreview(){
        var stop = { request: "stop" };
        this.state.RecordHandler.send({ message: stop })
    }
    constructor(props) {
        super(props);
        this.state = {
          type:'preview',
          selectedSectionId: 1,
          drawerState: false,
          searchRecords: '',
          filterOption: 'Previews',
          allRecordsOfServer: this.props.recordsList,
          allRecordsReady:[],
          loadedOnce:false,
          allRecords: [],
          recordsList: [],
          selectedContact: null,
          selectedContacts: 0,
          RecordHandler:this.props.RecordHandlerInState
        }
    }
    render() {
        const {user, recordsList, drawerState, type} = this.state;
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
                                onClick={this.onToggleDrawer.bind(this)} />
                        </span>

                        <AppModuleHeader placeholder="Search Records By Room Name" notification={false} apps={false}
                            onChange={this.updateRecordsList.bind(this)}
                            value={this.state.searchRecords} />
                    </div>
                    <div className="gx-module-box-content">

                    
                    {recordsList.length === 0 ?
                    <div className="gx-h-100 gx-d-flex gx-align-items-center gx-justify-content-center">
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} 
                        description={<span>No Records Found !!</span>}/>
                    </div>:
                        <CustomScrollbars className="gx-module-content-scroll">
                            <RecordList 
                            recordsList={recordsList}
                            playPreview={this.playPreview.bind(this)}
                            stopPreview={this.stopPreview.bind(this)} 
                            type={type}
                            />
                        </CustomScrollbars>
                    }
                    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(index)

{/* <video height={500} width={800} controls >
<source src="/uploads/Records/records/rec-3058697650806749.webm" type="video/webm" />
</video> */}