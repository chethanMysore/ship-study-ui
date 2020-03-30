// @flow

import React, { Component } from "react";
import PropTypes from "prop-types";

class CustomModal extends Component {
  render() {
    return (
      <section>
        {/* modals cannot be placed anywhere (avoid backdrop or modal placement issues) */}
        {/* <div id="generalViewModals"> */}
        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="myModalGeneral"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
                <h4 className="modal-title">{this.props.title}</h4>
              </div>
              <div className="modal-body">asdasd</div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    );
  }
}
export default CustomModal;
