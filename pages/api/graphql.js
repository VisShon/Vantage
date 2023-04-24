import { ApolloServer } from "apollo-server-micro";
import { schema } from "@/graphql";
import typeDefs from '@/graphql/schema/schema.gql'
import { Neo4jGraphQL } from "@neo4j/graphql"
import neo4j from "neo4j-driver"

const driver = neo4j.driver(
	"bolt://localhost:7687",
	neo4j.auth.basic("neo4j", "ucvnr0021b")
)


export const schema = new Neo4jGraphQL({ 
	typeDefs,
	driver 
})


const getSchema = async () => {
    console.log("Building GraphQL Schema");
    return await schema.getSchema();
};
   
const apolloServer = new ApolloServer({
    schema: await getSchema(),
    playground: true,
    introspection: true,
});

const startServer = apolloServer.start();

export default async function handler(req, res) {
    await startServer;
    await apolloServer.createHandler({
      path: "/api/graphql",
    })(req, res);
  }
  
  export const config = {
    api: {
      bodyParser: false,
    },
};