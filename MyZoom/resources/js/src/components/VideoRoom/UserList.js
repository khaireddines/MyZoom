import React from "react";

import UserCell from "./UserCell";

const UserList = ({DataList, onAcceptUserRequest, onDeleteUserRequest}) => {
    return (
    <div className="gx-contact-main-content">
      {DataList.map((data, index) =>
        <UserCell key={index} data={data}
        onAcceptUserRequest={onAcceptUserRequest}
        onDeleteUserRequest={onDeleteUserRequest} />
      )}

    </div>
  )
};
export default UserList;