import { ApplicationConfig, inject } from '@angular/core';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { environment } from '../environments/environment.development';

export function apolloOptionsFactory() {
  const httpLink = inject(HttpLink);
  return {
    link: httpLink.create({ uri: environment.graphqlEndpoint }),
    cache: new InMemoryCache(),
  };
}


export const graphqlProvider: ApplicationConfig['providers'] = [
  Apollo,
  {
    provide: APOLLO_OPTIONS,
    useFactory: apolloOptionsFactory,
  },
];
