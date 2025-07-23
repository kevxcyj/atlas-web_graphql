import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema/schema.js';

const app = express();

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema: schema,
}));

app.listen(PORT, () => {
  console.log(`now listening for request on port ${PORT}`);
});
