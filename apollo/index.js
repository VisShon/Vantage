import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

export const Initalize = (composeClient) => {
	const link = createHttpLink({
		uri: '/graphql',
		credentials: 'same-origin'
	  });
	  
	const client = new ApolloClient({
		cache: new InMemoryCache(),
		link,
	});

	return client
}