import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import App from './components/App';

const cache = new InMemoryCache({ dataIdFromObject: o => o.id });
const link = new HttpLink({
	uri: 'http://localhost:5000/graphql',
	credentials: 'include'
});
const client = new ApolloClient({ cache, link });

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
);
