import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../history';
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const App = () => (
	<div className="container">
		<Router history={history}>
			<Header />
			<Switch>
				<Route path="/login" component={LoginForm} />
				<Route path="/signup" component={SignupForm} />
			</Switch>
		</Router>
	</div>
);

export default App;
