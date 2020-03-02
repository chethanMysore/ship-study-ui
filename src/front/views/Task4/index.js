// @flow

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  AnimatedView,
  StatsCard,
  EarningGraph,
  Notifications,
  WorkProgress,
  TwitterFeed,
  TodoListDemo,
  TeamMatesDemo,
} from '../../components';
import { type RouterProps } from '../../types/react-router';

type Props = {
  
} & RouterProps;

function Task4({
  
}: Props) {
  useEffect(() => {
    
  }, []);

  return (
    <AnimatedView>
      <div className="row" style={{ marginBottom: '5px' }}>
        TBA
      </div>
    </AnimatedView>
  );
}

Task4.displayName = 'Task4';

Task4.propTypes = {
  // react-router 4:
  
};

export default Task4;
