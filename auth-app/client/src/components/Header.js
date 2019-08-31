import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import currentUserQuery from '../queries/currentUser';
import logOutMutation from '../mutations/logout';

class Header extends Component {
	onLogoutClick = () => {
		this.props.mutate({
			refetchQueries: [{ query: currentUserQuery }]
		});
	};

	renderButtons = () => {
		const { loading, user } = this.props.data;

		// the query is loading, so return nothing
		if (loading) return <div />;

		// the user is not null and has an object assign to it
		// means that the user is currently logged in
		if (user) {
			return (
				<li>
					<a onClick={this.onLogoutClick}>Logout</a>
				</li>
			);
		} else {
			return (
				<div>
					<li>
						<Link to="/signup">Signup</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
				</div>
			);
		}
	};

	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<Link to="/" className="brand-logo left">
						Home
					</Link>
					<ul className="right">{this.renderButtons()}</ul>
				</div>
			</nav>
		);
	}
}

export default graphql(logOutMutation)(graphql(currentUserQuery)(Header));
