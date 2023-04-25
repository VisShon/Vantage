import neo4j from "neo4j-driver"
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { Neo4jGraphQL } from "@neo4j/graphql"
import { OGM } from "@neo4j/graphql-ogm";
import typeDefs from '@/graphql/schema.graphql'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const driver = neo4j.driver(
	process.env.NEO4J_URI,
	neo4j.auth.basic(
		process.env.NEO4J_USERNAME, 
		process.env.NEO4J_PASSWORD
	)
)

const ogm = new OGM({
	typeDefs,
	driver,
})

export const signUp = async(args) =>{
	const User = ogm.model('User')
	const existingUser = User.find(args) 

	if(existingUser)
		return 'USER_EXISTS'
	
	await User.create(args)
	const newUser = User.find(args) 

	if(!newUser)
		return 'ERROR'

	const token = jwt.sign(
		newUser,
		process.env.JWT_KEY,
		{
			expiresIn:2592000
		}
	)
	return token
}

export const logIn = async(args) =>{
	const User = ogm.model('User')
	const existingUser = User.find(args)

	if(!existingUser)
		return 'USER_NOT_EXIST'
	
	const token = jwt.sign(
		existingUser,
		process.env.JWT_KEY,
		{
			expiresIn:2592000
		}
	)
	return token
}


const schema = new Neo4jGraphQL({ 
	typeDefs,
	driver 
})


const getSchema = async () => {
	console.log("Building GraphQL Schema")
	return await schema.getSchema()
}
	 
const apolloServer = new ApolloServer({
	schema: await getSchema(),
	// context: { driverConfig: { database: 'neo4j' } },
	playground: true,
})

export default startServerAndCreateNextHandler(apolloServer);
