import React from "react";

import RoomCell from "./RoomCell";

const RoomList = ({roomList, onDeleteRoom}) => {
    return (
    <div className="gx-contact-main-content">
      {roomList.map((Room, index) =>
        <RoomCell key={index} Room={Room} onDeleteRoom={onDeleteRoom} />
      )}

    </div>
  )
};

export default RoomList;