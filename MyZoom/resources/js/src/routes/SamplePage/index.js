import React from "react";

import IntlMessages from "../../util/IntlMessages";
import configureStore from "../../appRedux/store";

const SamplePage = () => {
  return (
    <div>
      <h2 className="title gx-mb-4"><IntlMessages id="sidebar.samplePage"/></h2>

      <div className="gx-d-flex justify-content-center">
        <h4></h4>
        <h3></h3>
      </div>

    </div>
  );
};

export default SamplePage;
