import express from 'express';
import { graphqlHTTP } from 'express-graphql';

const app = express();

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema: schema,
}));

app.listen(PORT, () => {
  console.log(`now listening for request on port ${PORT}`);
});
