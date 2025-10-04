import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginCacheControl } from "@apollo/server/plugin/cacheControl";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  schema{
   query:Query
  }
  type Query {
   greeting: String
  }
`;



const resolvers ={

   Query:{
      greeting:()=> "Hello world!"
   }
}



const server = new ApolloServer({typeDefs,resolvers}); 


const {url} = await startStandaloneServer(server, {listen:{port:9000}});

console.log(`Server is running at ${url}`);


