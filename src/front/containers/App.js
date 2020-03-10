// @flow
import React, { Component, Fragment, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import FeatureImportance from '../views/FeatureImportance';
import Task2 from '../views/Task2';
import Task3 from '../views/Task3';
import Task4 from '../views/Task4';
import Extra from '../views/Extra';
import HomePage from '../views/HomePage';

// #region imports
import { Header, AsideLeft, AsideRight } from '../components';
// import { Modals } from '../views';
import { appConfig } from '../config';
import { navigation } from '../models';
import MainRoutes from '../routes/MainRoutes';
import { NotificationContainer } from '../components/ReactNotifications';
import { toggleSideMenu } from '../redux/actions';
// #endregion

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu(e) {
    if (e) {
      e.preventDefault();
      this.props.toggleSideMenu();
    }
  }
  render() {
    const { isCollapsed, currentView } = this.props;
    const appName = appConfig.APP_NAME;

    return (
      <Fragment>
        <NotificationContainer />
        <Fragment>
          <div>
            <Header
              appName={appName}
              currentView={currentView}
              toggleSideMenu={this.toggleMenu}
            />
            <div className="wrapper row-offcanvas row-offcanvas-left">
              <AsideLeft
                isAnimated={true}
                sideMenu={navigation.sideMenu}
                currentView={currentView}
                isCollapsed={isCollapsed}
              />
              <AsideRight isAnimated={true} isExpanded={isCollapsed}>
                <Switch>
                <Route exact path="/" component={HomePage} />
                  <Route
                    path="/Dashboard/Homepage"
                    component={HomePage}
                  />
                   <Route path="/Dashboard/featureimportance" component={FeatureImportance} />
                   <Route path="/Dashboard/home" component={HomePage} />
                  <Route path="/Dashboard/task2" component={Task2} />
                  <Route path="/Dashboard/task3" component={Task3} />
                  <Route path="/Dashboard/task4" component={Task4} />
                  <Route path="/Dashboard/extra" component={Extra} />
                  <Route path="/" component={HomePage} />
                </Switch>
                {/* <MainRoutes /> */}
              </AsideRight>
            </div>
            {/* <Footer /> */}
            {/* modals cannot be placed anywhere (avoid backdrop or modal placement issues) so all grouped in same component and outside .wrapper*/}
            {/* <Modals /> */}
          </div>
        </Fragment>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { isCollapsed, currentView } = settings;
  return { isCollapsed, currentView };
};

export default connect(mapStateToProps, { toggleSideMenu })(App);
