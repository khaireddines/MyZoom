import React from 'react';
import { Result, Button } from "antd";

const IsExistRoom = () => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" onClick={()=>{window.location.replace('/')}}>Back Home</Button>}
        />
    )
}

export default IsExistRoom;

