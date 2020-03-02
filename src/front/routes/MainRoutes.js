// @flow

/* eslint no-process-env:0 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../components/privateRoute/PrivateRoute';
import HomeConnected from '../views/home';
import FeatureImportance from '../views/FeatureImportance';
import Task2 from '../views/Task2';
import Task3 from '../views/Task3';
import Task4 from '../views/Task4';
import Extra from '../views/Extra';
import AlertConnected from '../views/alert';
import BasicElementsConnected from '../views/basicElements';
import BasicProgressBarConnected from '../views/basicProgressBar';
import BreadcrumbViewConnected from '../views/breadcrumb';
import EarningGraphConnected from '../views/earningGraph';
import GeneralConnected from '../views/general';
import NotificationsConnected from '../views/notifications';
import PaginationViewConnected from '../views/pagination';
import SimpleTablesConnected from '../views/simpleTables';
import StatViewConnected from '../views/stat';
import StatsCardConnected from '../views/statsCard';
import StripedProgressBarConnected from '../views/stripedProgressBar';
import TabPanelConnected from '../views/tabPanel';
import TeamMatesViewConnected from '../views/teamMates';
import TodoListViewConnected from '../views/todoList';
import TwitterFeedConnected from '../views/twitterFeed';
import WorkProgressConnected from '../views/workProgress';
import ProtectedConnected from '../views/protected';

export const MainRoutes = () => (
  <Switch>
    <Route exact path="/" component={HomeConnected} />

    <Route path="/Dashboard/statsCard" component={StatsCardConnected} />
    <Route path="/Dashboard/featureImportance" component={FeatureImportance} />
    <Route path="/Dashboard/task2" component={Task2} />
    <Route path="/Dashboard/task3" component={Task3} />
    <Route path="/Dashboard/task4" component={Task4} />
    <Route path="/Dashboard/extra" component={Extra} />
    <Route path="/Dashboard/earningGraph" component={EarningGraphConnected} />
    <Route path="/Dashboard/notifications" component={NotificationsConnected} />
    <Route path="/Dashboard/workProgress" component={WorkProgressConnected} />
    <Route path="/Dashboard/twitterFeed" component={TwitterFeedConnected} />
    <Route path="/Dashboard/teamMates" component={TeamMatesViewConnected} />
    <Route path="/Dashboard/todoList" component={TodoListViewConnected} />

    <Route exact path="/simpleTables" component={SimpleTablesConnected} />

    <Route exact path="/basicElements" component={BasicElementsConnected} />

    <Route exact path="/general" component={GeneralConnected} />
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
    <Route path="/general/pagination" component={PaginationViewConnected} />

    {/* private views: need user to be authenticated */}
    <PrivateRoute path="/protected" component={ProtectedConnected} />

    <Route path="/" component={HomeConnected} />
  </Switch>
);

export default MainRoutes;
