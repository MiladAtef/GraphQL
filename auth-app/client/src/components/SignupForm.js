import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import AuthForm from './AuthForm';
import signupMutation from '../mutations/signup';
import currentUserQuery from '../queries/currentUser';
import history from '../history';

class SignupForm extends Component {
	state = { signupError: '' };

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
			.catch(() => this.setState({ signupError: 'Email already in use' }));
	};

	render() {
		return (
			<div>
				<h3>Sign Up</h3>
				{this.state.signupError && (
					<div className="errors">{this.state.signupError}</div>
				)}
				<AuthForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default graphql(currentUserQuery)(graphql(signupMutation)(SignupForm));
