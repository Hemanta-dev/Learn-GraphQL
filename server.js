import { ApolloServer,gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import typeDefs from "./schemaGQL.js";
import resolvers from "./resolvers.js";


const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins:
    [ ApolloServerPluginLandingPageGraphQLPlayground() ]
})


server.listen().then(({url})=>{
    console.log(`server is running in ${url}`)
})