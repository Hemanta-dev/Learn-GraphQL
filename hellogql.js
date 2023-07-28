import {ApolloServer,gql} from "apollo-server";
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core';
import { users,quotes } from "./fakeDB.js";


const typeDefs = gql`
  type Query{
    greet:String
  }
`

const resolvers ={
    Query:{
        greet:()=>{
            return "Hello world";
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

server.listen().then(({url})=>{
    console.log(`server is running ${url}`);
})