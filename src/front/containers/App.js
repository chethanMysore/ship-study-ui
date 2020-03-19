// @flow
import React, { Component, Fragment, useState, useCallback } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import FeatureImportance from "../views/FeatureImportance";
import Task2 from "../views/Task2";
import IndividualFeatureExplaination from "../views/IndividualFeatureExplaination";
import ParticipantAnalysis from "../views/ParticipantAnalysis";
import ModelPerformance from "../views/ModelPerformance";
import HomePage from "../views/HomePage";
import { ON_LOADER_HIDE } from "../constants/actionTypes";

// #region imports
import { Header, AsideLeft, AsideRight } from "../components";
// import { Modals } from '../views';
import { appConfig } from "../config";
import { navigation } from "../models";
import MainRoutes from "../routes/MainRoutes";
import { NotificationContainer } from "../components/ReactNotifications";
import { toggleSideMenu, fetchFeatureImportance } from "../redux/actions";
import LoaderComponent from "../components/LoaderComponent";
// #endregion

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  componentDidMount() {
    this.props.fetchFeatureImportance(ON_LOADER_HIDE);
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
          {this.props.loader ? (
            <LoaderComponent />
          ) : (
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
                    <Route path="/Dashboard/Homepage" component={HomePage} />
                    <Route
                      path="/Dashboard/featureimportance"
                      component={FeatureImportance}
                    />
                    <Route path="/Dashboard/home" component={HomePage} />
                    <Route path="/Dashboard/task2" component={Task2} />
                    <Route
                      path="/Dashboard/IndividualFeatureExplaination"
                      component={IndividualFeatureExplaination}
                    />
                    <Route
                      path="/Dashboard/participantAnalysis"
                      component={ParticipantAnalysis}
                    />
                    <Route
                      path="/Dashboard/modelPerformance"
                      component={ModelPerformance}
                    />
                    <Route path="/" component={HomePage} />
                  </Switch>
                  {/* <MainRoutes /> */}
                </AsideRight>
              </div>
              {/* <Footer /> */}
              {/* modals cannot be placed anywhere (avoid backdrop or modal placement issues) so all grouped in same component and outside .wrapper*/}
              {/* <Modals /> */}
            </div>
          )}
        </Fragment>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { isCollapsed, currentView, loader } = settings;
  return { isCollapsed, currentView, loader };
};

export default connect(mapStateToProps, {
  toggleSideMenu,
  fetchFeatureImportance
})(App);
