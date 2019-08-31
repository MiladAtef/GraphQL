import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import currentUserQuery from '../queries/currentUser';
import history from '../history';

// this is a HOC (Higher Order Component)
// to check out if the user is logged in or not
export default WrappedComponent => {
	class RequireAuth extends Component {
		componentWillUpdate(nextProps) {
			const { loading, user } = nextProps.data;

			// if the query successfully issued and the user
			// is not logged in, redirect them to login page
			if (!loading && !user) {
				history.push('/login');
			}
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	}

	return graphql(currentUserQuery)(RequireAuth);
};
