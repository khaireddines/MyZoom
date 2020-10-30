import React from "react";

import RecordCell from "./RecordCell";
import RecordCellReady from "./RecordCellReady";

const RecordList = ({ recordsList, type, playPreview, stopPreview }) => {

  return (
    <div className="gx-contact-main-content">
      {(type === 'preview') ?
        (recordsList.map((record, index) =>
          <RecordCell key={index} record={record} stopPreview={stopPreview}
            playPreview={playPreview} 
          />))
        :
        (recordsList.map((record, index) =>
          <RecordCellReady key={index} record={record} 
          />))
      }

    </div>
  )
};

export default RecordList;
