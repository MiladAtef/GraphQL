import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import AuthForm from './AuthForm';
import loginMutation from '../mutations/login';
import currentUserQuery from '../queries/currentUser';
import history from '../history';

class LoginForm extends Component {
	state = { loginError: '' };

	componentWillUpdate(nextProps, nextState) {
		if (!this.props.data.user && nextProps.data.user) {
			history.push('/dashboard');
		}
	}

	onSubmit = ({ email, password }) => {
		this.props
			.mutate({
				variables: { email, password },
				refetchQueries: [{ query: currentUserQuery }]
			})
			.catch(() => this.setState({ loginError: 'Invalid Email or Password' }));
	};

	render() {
		return (
			<div>
				<h3>Login</h3>
				{this.state.loginError && (
					<div className="errors">{this.state.loginError}</div>
				)}
				<AuthForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default graphql(currentUserQuery)(graphql(loginMutation)(LoginForm));
