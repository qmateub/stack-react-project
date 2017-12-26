import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Main from './components/main';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://graphql-pokemon.now.sh/graphql' }),
  cache: new InMemoryCache(),
});

window.onload = () => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>,
    document.getElementById('main')
  );
};
