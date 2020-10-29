import React from "react";
import { Menu, Modal } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import Moment from "moment";
class RecordCell extends React.Component {
    handleCancel = (e) => {
        this.setState({ videoPlayClicked: false });
        this.props.stopPreview();
        
    };
    onPlayClick = (RecordId) => {
        this.setState({ videoPlayClicked: true });
        setTimeout(() => {
            this.props.playPreview(RecordId);
        }, 500);
    }
    constructor() {
        super();
        this.state = {
            videoPlayClicked: false
        }
    }

    render() {
        const { record, type, playPreview } = this.props;
        const { id, name, date } = record;
        const data = JSON.parse(name);
        const modifiedDate = Moment(date, "YYYY-MM-DD hh:mm:ss").format('llll');
        return (
            <div className="gx-contact-item">
                <div className="gx-module-list-icon">
                    <div className="gx-ml-2 gx-d-none gx-d-sm-flex play">
                        <PlayCircleOutlined onClick={() => { this.onPlayClick(id) }} style={{ marginRight: '12px', fontSize: '30px', color: '#038fde' }} />
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
                                {data.RoomName}
                            </span>
                        </div>
                        <div className="gx-text-muted">
                            <span className="gx-email gx-d-inline-block gx-mr-2">
                                Record Of :
                            </span>
                            <span className="gx-phone gx-d-inline-block">
                                {(this.props.authUser.id == data.id) ? "That's Mine ^ç^" : data.name}
                            </span>
                        </div>
                    </div>
                    <Modal
                        title= {`Preview Of ${data.RoomName}, [${modifiedDate}]`}
                        visible={this.state.videoPlayClicked}
                        footer={null}
                        onCancel={this.handleCancel}
                        width={600}
                        style={{top:'50px'}}
                        className="preview"
                    >
                        <video id={`thepreview_${id}`} style={{width:"100%"}} autoPlay playsInline />
                    </Modal>
                    {/*  <div className="gx-module-contact-right">

                        <Dropdown overlay={this.menus()} placement="bottomRight" trigger={['hover']}>
                            <i className="gx-icon-btn icon icon-ellipse-v" />
                        </Dropdown>
                    </div> */}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    authUser: state.auth.authUser
});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(RecordCell);
