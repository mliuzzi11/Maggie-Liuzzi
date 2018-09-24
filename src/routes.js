import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './app.js';
import Login from './login/login.js';
import Dashboard from './dashboard/dashboard.js';
import Settings from './settings/settings.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
	<Route path="/dashboard" component={Dashboard} />
	<Route path="/login" component={Login} />
    <Route path="/settings" component={Settings} />
  </Route>
);