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

function Extra({
  
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

Extra.displayName = 'Extra';

Extra.propTypes = {
  // react-router 4:
  
};

export default Extra;