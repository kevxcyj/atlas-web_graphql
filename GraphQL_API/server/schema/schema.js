import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

// Define the schema
const schema = new GraphQLObjectType({
  name: 'Task',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString }
  }
});

export default schema;
