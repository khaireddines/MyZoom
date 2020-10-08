import React, { Component } from "react";
import { Input, Modal, Tooltip, Select, message } from "antd";
import { InfoCircleOutlined, UserOutlined, LinkOutlined } from "@ant-design/icons";
const { Option } = Select;
class NewRoom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            type: "",
            password: "",
            showPass: false,
            
        };
    }
   
    render() {
        const { onSaveRoom, onRoomClose, open } = this.props;
        const { name, type, password} = this.state;

        return (
            <Modal
                title="New Room"
                toggle={onRoomClose}
                visible={open}
                closable={false}
                onCancel={() => {
                    onRoomClose();
                    this.setState({
                        name: "",
                        type: "",
                        password: ""
                    });
                }}
                onOk={() => {
                    if (name === "") {message.error('Please provide a Room name');return;}
                    if (this.state.showPass==true && password ==="") {message.error('Please provide a password');return;}
                    onRoomClose();
                    onSaveRoom({
                        name: name,
                        type: type,
                        password: password
                    });
                    this.setState({
                        name: "",
                        type: "",
                        password: "",
                    });
                }}
            >
                <div className="gx-modal-box-row">
                    <div className="gx-modal-box-form-item">
                        <div className="gx-form-group">
                            <Input
                                required
                                style={{ width: "48%", marginRight: "4%" }}
                                placeholder="Name"
                                onChange={e =>
                                    this.setState({
                                        name: e.target.value
                                    })
                                }
                                defaultValue={name}
                                margin="none"
                            />
                            <Input
                                required
                                style={{ width: "48%" }}
                                placeholder="UniqueLink"
                                disabled
                                margin="none"
                                prefix={
                                    <LinkOutlined />
                                }
                                suffix={
                                    <Tooltip title="We will generate an invite link for you behind the seen.">
                                        <InfoCircleOutlined
                                            style={{
                                                color: "rgba(0,0,0,.45)"
                                            }}
                                        />
                                    </Tooltip>
                                }
                            />
                        </div>
                        <div className="gx-form-group">
                            <Select
                                defaultValue="Public"
                                style={{ width: "48%", marginRight: "4%" }}
                                onChange={e => {
                                    this.setState({ type: e, showPass: !this.state.showPass });
                                }}
                            >
                                <Option value="Public">Public</Option>
                                <Option value="Private">Private</Option>
                            </Select>
                            {(this.state.showPass) && (
                                <Input.Password
                                    placeholder="password"
                                    style={{ width: "48%" }}
                                    onChange={e => {
                                        this.setState({
                                            password: e.target.value
                                        });
                                    }}
                                />
                            )}
                        </div>
                        
                    </div>
                </div>
            </Modal>
        );
    }
}

export default NewRoom;
