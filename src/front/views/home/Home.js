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
  earningGraphLabels: Array<any>,
  earningGraphDatasets: Array<any>,
  teamMatesIsFetching: boolean,
  teamMates: Array<{
    picture: string,
    firstname: string,
    lastname: string,
    profile: string,
    profileColor: 'danger' | 'warning' | 'info' | 'success',
  }>,

  actions: {
    enterHome: () => any,
    leaveHome: () => any,
    fetchEarningGraphDataIfNeeded: () => Promise<any>,
    fetchTeamMatesDataIfNeeded: () => Promise<any>,
  },
} & RouterProps;

function Home({
  actions: {
    enterHome,
    leaveHome,
    fetchEarningGraphDataIfNeeded,
    fetchTeamMatesDataIfNeeded,
  },
  teamMates,
  teamMatesIsFetching,
  earningGraphLabels,
  earningGraphDatasets,
}: Props) {
  useEffect(() => {
    enterHome();
    fetchEarningGraphDataIfNeeded();
    fetchTeamMatesDataIfNeeded();

    return () => {
      leaveHome();
    };
  }, []);

  return (
    <AnimatedView>
      <div className="row" style={{ marginBottom: '5px' }}>
        TBA
      </div>
    </AnimatedView>
  );
}

Home.displayName = 'Home';

Home.propTypes = {
  // react-router 4:
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,

  earningGraphLabels: PropTypes.array,
  earningGraphDatasets: PropTypes.array,
  teamMatesIsFetching: PropTypes.bool,
  teamMates: PropTypes.arrayOf(
    PropTypes.shape({
      picture: PropTypes.string,
      firstname: PropTypes.string,
      lastname: PropTypes.string,
      profile: PropTypes.string,
      profileColor: PropTypes.oneOf(['danger', 'warning', 'info', 'success']),
    }),
  ),
  actions: PropTypes.shape({
    enterHome: PropTypes.func,
    leaveHome: PropTypes.func,
    fetchEarningGraphDataIfNeeded: PropTypes.func,
    fetchTeamMatesDataIfNeeded: PropTypes.func,
  }),
};

export default Home;
