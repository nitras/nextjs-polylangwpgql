import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

let client;

/**
 * getApolloClient
 */

export function getApolloClient() {
	if (!client) {
		client = _createApolloClient();
	}
	return client;
}

/**
 * createApolloClient
 */

export function _createApolloClient() {
	return new ApolloClient({
		link: new HttpLink({
			uri: 'https://headless.nitras.be/graphql',
		}),
		cache: new InMemoryCache(),
	});
}

const cache = new InMemoryCache({
	typePolicies: {
		Language: {
			keyFields: ['es', 'en'],
		},
	},
});
