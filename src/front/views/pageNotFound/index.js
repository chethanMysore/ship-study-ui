// @flow

import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import AnimatedView from '../../components/animatedView/AnimatedView';

class PageNotFound extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <AnimatedView>
        <div className="row">
          <div className="col-md-12">
            <h2>
              <i className="fa fa-frown-o" aria-hidden="true" />
              &nbsp; Sorry... This page does not exist
            </h2>
          </div>
        </div>
      </AnimatedView>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { currentView } = settings;
  return { currentView };
};

export default connect(mapStateToProps, {
  enterPageNotFound,
  leavePageNotFound,
})(PageNotFound);
