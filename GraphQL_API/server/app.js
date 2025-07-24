import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema/schema.js';

const app = express();
const PORT = 4000

app.use('/graphql', graphqlHTTP({
  schema: schema,
}));

app.listen(4000, () => {
  console.log(`now listening for request on port ${4000}`);
});
