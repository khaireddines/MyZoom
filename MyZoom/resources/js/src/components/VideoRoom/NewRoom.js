import React, { Component } from "react";
import { Input, Modal, Tooltip, Select, Space } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
const { Option } = Select;
class NewRoom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            type: "",
            password: ""
        };
    }
    
    render() {
        const { onSaveRoom, onRoomClose, open } = this.props;
        const { name, type, password } = this.state;

        return (
            <Modal
                title="New Room"
                toggle={onRoomClose}
                visible={open}
                closable={false}
                onCancel={()=>{
                    onRoomClose();
                    this.setState({
                        name: "",
                        type: "",
                        password: ""
                    });
                }}
                onOk={() => {
                    if (name === "") return;
                    onRoomClose();
                    onSaveRoom({
                        name: name,
                        type: type,
                        password: password
                    });
                    this.setState({
                        name: "",
                        type: "",
                        password: ""
                    });
                }}
            >
                <div className="gx-modal-box-row">
                    <div className="gx-modal-box-form-item">
                        <div className="gx-form-group">
                            <Space direction="horizontal" size="small">
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
                                        <UserOutlined className="site-form-item-icon" />
                                    }
                                    suffix={
                                        <Tooltip title="Extra information">
                                            <InfoCircleOutlined
                                                style={{
                                                    color: "rgba(0,0,0,.45)"
                                                }}
                                            />
                                        </Tooltip>
                                    }
                                />
                            </Space>
                        </div>
                        <div className="gx-form-group">
                            <Space direction="horizontal" size="small">
                                <Select
                                    defaultValue="Public"
                                    style={{ width: "48%", marginRight: "4%" }}
                                    onChange={e => {
                                        this.setState({ type: e.target.value });
                                    }}
                                >
                                    <Option value="Public">Public</Option>
                                    <Option value="Private">Private</Option>
                                </Select>
                                {this.state.type === "Private" && (
                                    <Input.Password
                                        placeholder="password"
                                        iconRender={visible =>
                                            visible ? (
                                                <EyeTwoTone />
                                            ) : (
                                                <EyeInvisibleOutlined />
                                            )
                                        }
                                        onChange={e => {
                                            this.setState({
                                                password: e.target.value
                                            });
                                        }}
                                    />
                                )}
                            </Space>
                        </div>
                        {/* 
            <div className="gx-form-group">
              <Input
                placeholder="Phone"
                onChange={(event) => this.setState({phone: event.target.value})}
                value={phone}
                margin="normal"
              />
            </div>
            <div className="gx-form-group">
              <Input
                placeholder="Designation"
                onChange={(event) => this.setState({designation: event.target.value})}
                value={designation}
                autosize={{minRows: 2, maxRows: 6}}
                margin="normal"/>
            </div> */}
                    </div>
                </div>
            </Modal>
        );
    }
}

export default NewRoom;
