import React from "react";
import { Menu, Modal, Dropdown } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import Moment from "moment";

class RecordCellReady extends React.Component {
    handleCancel = (e) => {
        this.setState({ videoPlayClicked: false });
        document.getElementById(`thevideo_${this.props.record.id}`).pause();
    };
    onPlayClick = () => {
        this.setState({ videoPlayClicked: true });
    }
    download=()=>{
        document.getElementById(`link_${this.props.record.id}`).click();
    }
    getOption = () =>{ 
        let options = ['Download'];
        return options;
      }
    menus = () => (<Menu onClick={(e) => {
        if (e.key === 'Download') {
          this.download();
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
            videoPlayClicked: false
        }
    }

    render() {
        const { record } = this.props;
        const { id, RecordOwner, Room, created_at, RecordPathName } = record;
        
        const modifiedDate = Moment(created_at, "YYYY-MM-DD hh:mm:ss").format('llll');
        return (
            <div className="gx-contact-item">
                <div className="gx-module-list-icon">
                    <div className="gx-ml-2 gx-d-none gx-d-sm-flex play">
                        <PlayCircleOutlined onClick={() => { this.onPlayClick() }} style={{ marginRight: '12px', fontSize: '30px', color: '#038fde' }} />
                    </div>
                </div>

                <div className="gx-module-list-info gx-contact-list-info">
                    <div className="gx-module-contact-content">
                        <p className="gx-mb-1">
                            <span className="gx-text-truncate gx-contact-name"> [{modifiedDate}] </span>

                        </p>
                        <div className="gx-text-muted">
                            <span className="gx-email gx-d-inline-block gx-mr-2">
                                Room Name :
                            </span>
                            <span className="gx-phone gx-d-inline-block">
                                 {Room.Name} 
                            </span>
                        </div>
                        <div className="gx-text-muted">
                            <span className="gx-email gx-d-inline-block gx-mr-2">
                                Record Of :
                            </span>
                            <span className="gx-phone gx-d-inline-block">
                                {(this.props.authUser.id == RecordOwner.id) ? "That's Mine ^ç^" : RecordOwner.name}
                            </span>
                        </div>
                    </div>
                    <a hidden id={`link_${id}`} style={{display:'hidden'}} href={`/uploads/Records/records/${RecordPathName}`} download></a>
                    <Modal
                        title= {`Record Of ${RecordOwner.name}, [${modifiedDate}]`}
                        visible={this.state.videoPlayClicked}
                        footer={null}
                        onCancel={this.handleCancel}
                        width={600}
                        style={{top:'50px'}}
                        className="preview"
                    >
                        <video id={`thevideo_${id}`} style={{width:"100%"}} autoPlay controls >
                            <source src={`/uploads/Records/records/${RecordPathName}`} type="video/webm" />
                        </video>
                    </Modal>
                    <div className="gx-module-contact-right">
                        <Dropdown overlay={this.menus()} placement="bottomRight" trigger={['hover']}>
                            <i className="gx-icon-btn icon icon-ellipse-v" />
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
export default connect(mapStateToProps, mapDispatchToProps)(RecordCellReady);
