
import { ApolloServer, gql } from 'apollo-server';
import { typeDefs } from './graphql/typedefs';
import { resolvers } from './graphql/resolvers';

const server = new ApolloServer({
  typeDefs: gql`
    ${typeDefs}
  `,
  resolvers,
  engine: {
    reportSchema: true
  }
});


server.listen().then(({ url, subscriptionsUrl }) => {
  console.log(`🚀 Server ready at ${url}`);
  console.log(`🚀 Subscriptions ready at ${subscriptionsUrl}`);
});