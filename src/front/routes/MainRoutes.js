// @flow

/* eslint no-process-env:0 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../components/privateRoute/PrivateRoute';
import FeatureImportance from '../views/FeatureImportance';
import Task2 from '../views/Task2';
import Task3 from '../views/Task3';
import Task4 from '../views/Task4';
import Extra from '../views/Extra';

export const MainRoutes = () => (
  <Switch>
    <Route exact path="/" component={FeatureImportance} />

    <Route path="/Dashboard/featureImportance" component={FeatureImportance} />
    <Route path="/Dashboard/task2" component={Task2} />
    <Route path="/Dashboard/task3" component={Task3} />
    <Route path="/Dashboard/task4" component={Task4} />
    <Route path="/Dashboard/extra" component={Extra} />
    {/* <Route exact path="/general" component={GeneralConnected} />
    <Route path="/general/breadcrumb" component={BreadcrumbViewConnected} />
    <Route path="/general/stat" component={StatViewConnected} />
    <Route
      path="/general/basicProgressBars"
      component={BasicProgressBarConnected}
    />
    <Route path="/general/tabPanels" component={TabPanelConnected} />
    <Route
      path="/general/stripedProgressBars"
      component={StripedProgressBarConnected}
    />
    <Route path="/general/alerts" component={AlertConnected} />
    <Route path="/general/pagination" component={PaginationViewConnected} /> */}

    {/* <PrivateRoute path="/protected" component={ProtectedConnected} /> */}

    <Route path="/" component={FeatureImportance} />
  </Switch>
);

export default MainRoutes;
