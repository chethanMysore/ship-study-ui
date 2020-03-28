// @flow

import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { Link } from "react-router-dom";

const ViewLink = ({ isActive, linkTo, viewName, itemCount, faIconName }) => (
  <li className={cx({ active: isActive })}>
    <Link to={linkTo}>
      <i className={`fa ${faIconName}`} style={{ marginLeft: "10px" }} />
      <span style={{ fontSize: "13px", fontWeight: isActive ? 700 : 500 }}>
        {viewName}
      </span>
      {itemCount > 0 && (
        <span className="label label-primary pull-right">{itemCount}</span>
      )}
    </Link>
  </li>
);

ViewLink.displayName = "ViewLink";

ViewLink.defaultProps = {
  isActive: false
};

export default ViewLink;
