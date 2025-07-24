import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLList } from 'graphql';
import { GraphQLSchema } from 'graphql';
import lodash from 'lodash';

import Task from "../models/task.js";
import Project from "../models/project.js";


const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    weight: { type: GraphQLString },
    description: { type: GraphQLString },
    project: {
      type: ProjectType,
      resolve: async (parent) => {
        return await Project.findById(parent.projectId);
      },
    },
  }),
});

const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString },
    tasks: {
      type: new GraphQLList(TaskType),
       resolve: async (parent) => {
        return await Task.find({ projectId: parent.id });
      },
    },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    task: {
      type: TaskType,
      args: {
        id: { type: GraphQLID },
      },

      // tasks
      resolve: async (_, args) => {
        return await Task.findById(args.id);
      },
    },

    project: {
      type: ProjectType,
      args: {
        id: { type: GraphQLID },
      },

      // projects
      resolve: async (_, args) => {
        return await Project.findById(args.id);
      },
    },


    tasks: {
      type: new GraphQLList(TaskType),
      resolve: async () => {
        return await Task.find();
      },
    },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve: async () => {
        return await Project.find();
      },
    },
  }),
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addProject: {
      type: ProjectType,
      args: {
        title: { type: GraphQLNonNull(GraphQLString) },
        weight: { type: GraphQLNonNull(GraphQLInt) },
        description: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(_, args) {
        const project = new Project({
          title: args.title,
          weight: args.weight,
          description: args.description,
        });
        return project.save();
      },
    },
  }),
});


export const schema = new GraphQLSchema({
  query: RootQueryType,
});
