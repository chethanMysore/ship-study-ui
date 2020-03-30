// @flow

/* eslint no-process-env:0 */
import React from "react";
import { Route, Switch } from "react-router-dom";
import FeatureImportance from "../views/FeatureImportance";
import ProjectOverview from "../views/ProjectOverview";
import FeatureExplanations from "../views/FeatureExplanations";
import ParticipantAnalysis from "../views/ParticipantAnalysis";
import ModelPerformance from "../views/ModelPerformance";
import HomePage from "../views/HomePage";

export const MainRoutes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />

    <Route path="/Dashboard/featureImportance" component={FeatureImportance} />
    <Route path="/Dashboard/projectOverview" component={ProjectOverview} />
    <Route
      path="/Dashboard/featureExplanations"
      component={FeatureExplanations}
    />
    <Route
      path="/Dashboard/participantAnalysis"
      component={ParticipantAnalysis}
    />
    <Route path="/Dashboard/modelPerformance" component={ModelPerformance} />
    <Route path="/" component={HomePage} />
  </Switch>
);

export default MainRoutes;
