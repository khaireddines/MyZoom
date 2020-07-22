import React, { Component } from "react";
import { Input, Modal, Tooltip, Select, message, Button } from "antd";
import { InfoCircleOutlined, UserOutlined, LinkOutlined } from "@ant-design/icons";

class JoinRoom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            InviteLink:""
        };
    }
   
    render() {
        const { onSaveJoinRoom, onJoinRoomClose, open } = this.props;
        const { InviteLink } = this.state;

        return (
            <Modal
                title="Join Room"
                toggle={onJoinRoomClose}
                visible={open}
                closable={false}
                destroyOnClose={true}
                onCancel={() => {
                    onJoinRoomClose();
                    this.setState({
                        InviteLink:""
                    });
                }}
                onOk={() => {
                    if (InviteLink === "") return;
                    onJoinRoomClose();
                    onSaveJoinRoom({
                        InviteLink:InviteLink
                    });
                    this.setState({
                        InviteLink:""
                    });
                }}
            >
                <div className="gx-modal-box-row">
                    <div className="gx-modal-box-form-item">
                        <div className="gx-form-group">
                            <Input
                                required
                                placeholder="InviteLink"
                                prefix={<LinkOutlined />}
                                suffix={
                                    <Tooltip title="Provide a valid invite link">
                                        <InfoCircleOutlined
                                            style={{
                                                color: "rgba(0,0,0,.45)"
                                            }}
                                        />
                                    </Tooltip>
                                }
                                onChange={e =>
                                    this.setState({
                                        InviteLink: e.target.value
                                    })
                                }
                                margin="none"
                            />
                            
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}
export default JoinRoom;
