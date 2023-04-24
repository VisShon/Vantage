import neo4j from "neo4j-driver"
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { Neo4jGraphQL } from "@neo4j/graphql"
import typeDefs from '@/graphql/schema.graphql'

const driver = neo4j.driver(
)

export const schema = new Neo4jGraphQL({ 
	typeDefs,
	driver 
})


const getSchema = async () => {
	console.log("Building GraphQL Schema")
	return await schema.getSchema()
}
	 
const apolloServer = new ApolloServer({
	schema: await getSchema(),
	context: { driverConfig: { database: 'neo4j' } },
	playground: true,
})

export default startServerAndCreateNextHandler(apolloServer);
