import React, { Component } from 'react'
import { 
    SmileOutlined,
    BarsOutlined,
    ShareAltOutlined,
    VideoCameraAddOutlined
} from "@ant-design/icons";
import IntlMessages from "../../../util/IntlMessages";
import RecordList from "./RecordsList";
import AppModuleHeader from "../../../components/AppModuleHeader/index";
import CustomScrollbars from "../../../util/CustomScrollbars";
import { Drawer, Modal, Empty} from "antd";

let iconStyle = {
    marginRight: "16px",
    fontSize: "20px"
  };
const { confirm } = Modal;
const filterOptions = [
    {
        id: 1,
        name: 'All Records',
        icon: <BarsOutlined style={iconStyle} />
    },{
        id: 2,
        name: 'My Records',
        icon: <SmileOutlined style={iconStyle} />
    },
    {
        id: 3,
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
    filterRecords = (RoomName) => {
        const { filterOption } = this.state;
        if (RoomName === '') {
            this.setState({ recordsList: this.state.allRecords });
        } else {
            const filterRecords = this.state.allRecords.filter((record) =>
                JSON.parse(record.name).RoomName.toLowerCase().indexOf(RoomName.toLowerCase()) > -1);
            if (filterOption === 'All Records') {
                this.setState({ recordsList: filterRecords });
            } else if (filterOption === 'My Records') {
                this.setState({ recordsList: filterRecords });
            } else if (filterOption === 'Shared Records'){
                this.setState({ recordsList: filterRecords })
            }
        }
    };
    onFilterOptionSelect = (option) => {
        switch (option.name) {
            case 'All Records': {
                this.setState({
                    selectedSectionId: option.id,
                    filterOption: option.name,
                    recordsList: this.state.allRecords
                });
                break;
            }
            case 'My Records': {
                this.setState({
                    selectedSectionId: option.id,
                    filterOption: option.name,
                    recordsList: this.state.allRecords
                });
                break;
            }
            case 'Shared Records': {
                this.setState({
                    selectedSectionId: option.id,
                    filterOption: option.name,
                    recordsList: this.state.allRecords
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
        this.filterRecords(evt.target.value)
    };
    onToggleDrawer() {
        this.setState({
          drawerState: !this.state.drawerState
        });
    };
    componentDidMount(){
        this.state.recordsList.map((row)=>{
            console.log(row);
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
          filterOption: 'All Records',
          allRecords: this.props.recordsList,
          recordsList: this.props.recordsList,
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
export default index

{/* <video height={500} width={800} controls >
<source src="/uploads/Records/records/rec-3058697650806749.webm" type="video/webm" />
</video> */}