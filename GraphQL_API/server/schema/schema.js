import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

export const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: Mutation,
});