import express, { json } from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import graphql from "./graphql";

const PORT = process.env.PORT || 5000;
const app = express();

app.listen(PORT, () => console.log(`Server Running On Port ${PORT}...`));

app.use(json());
app.use(cors());

// GraphQL
app.use("/graphql", graphqlHTTP({
    schema: graphql.schemas,
    rootValue: graphql.resolvers,
    graphiql: true
}));

