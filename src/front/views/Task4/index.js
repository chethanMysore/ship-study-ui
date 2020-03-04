// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AnimatedView } from '../../components';

class Task4 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <AnimatedView>
        <div className="row" style={{ marginBottom: '5px' }}>
          TBA
        </div>
      </AnimatedView>
    );
  }
}

const mapStateToProps = ({}) => {
  // const { isCollapsed, currentView } = settings;
  return {};
};

export default connect(mapStateToProps, {})(Task4);
