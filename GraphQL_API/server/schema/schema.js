import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString }
  }
});

// Export the schema
export const schema = new GraphQLSchema({
  query: TaskType,
  mutation: null // Add mutations here if needed
});
