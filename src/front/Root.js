// @flow

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import ScrollTop from './components/scrollToTop/ScrollToTop';
import App from './containers/App';
import { configureStore } from './redux/store';

// #region constants
// $FlowIgnore
// const store = configureStore();
// #endregion

function Root() {
  return (
    <Provider store={configureStore()}>
      <Router>
        <ScrollTop>
          <Switch>
            <Route path="/" component={App} />
          </Switch>
        </ScrollTop>
      </Router>
    </Provider>
  );
}

Root.displayName = 'Root';

export default Root;
