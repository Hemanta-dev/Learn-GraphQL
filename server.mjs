import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";


import typeDefs from "./schemaGQL.mjs";
import resolvers from "./resolvers.mjs";

// Connect to MongoDB
import connectToDatabase from './DB.mjs';
connectToDatabase();

//for apollo server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});

// Start the Apollo Server
server.listen().then(({ url }) => {
    console.log(`Server is running at ${url}`);
});
