import React from "react";

import RecordCell from "./RecordCell";

const RecordList = ({recordsList, type, playPreview, stopPreview}) => {
  
  return (
    <div className="gx-contact-main-content">
      {recordsList.map((record, index) =>
        <RecordCell key={index} record={record} stopPreview={stopPreview}
         playPreview={playPreview} type={type} 
                     />
      )}

    </div>
  )
};

export default RecordList;
