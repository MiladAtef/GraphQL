import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from '../history';
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Dashboard from './Dashboard';
import requireAuth from './requireAuth';

const App = () => (
	<div className="container">
		<Router history={history}>
			<Header />
			<Switch>
				<Route path="/login" component={LoginForm} />
				<Route path="/signup" component={SignupForm} />
				<Route path="/dashboard" component={requireAuth(Dashboard)} />
			</Switch>
		</Router>
	</div>
);

export default App;
