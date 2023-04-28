import neo4j from "neo4j-driver"
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { Neo4jGraphQL } from "@neo4j/graphql"
import { Neo4jGraphQLAuthJWTPlugin } from "@neo4j/graphql-plugin-auth";
import { OGM } from "@neo4j/graphql-ogm";

import typeDefs from '@/graphql/schema.graphql'
import jwt from 'jsonwebtoken';
import { cache } from "react";

const driver = neo4j.driver(
	process.env.NEO4J_URI,
	neo4j.auth.basic(
		process.env.NEO4J_USERNAME, 
		process.env.NEO4J_PASSWORD
	),
	// {
	// 	encrypted: process.env.NEO4J_ENCRYPTED ? 'ENCRYPTION_ON' : 'ENCRYPTION_OFF',
	// }
)

const schema = new Neo4jGraphQL({ 
	typeDefs,
	driver 
})

const getSchema = async () => {
	console.log("Building GraphQL Schema")
	return await schema.getSchema()
}

const decodeToken = async (token) =>{
	return jwt.decode(token)
}

const verifyToken = async (token) =>{
	try{
		jwt.verify(token, process.env.JWT_KEY)
		return true
	}
	catch{
		return false
	}
}
	 
const apolloServer = new ApolloServer({
	schema: await getSchema(),
	playground: false,
})


const ogm = new OGM({
	typeDefs,
	driver,
	plugins: {
        auth: new Neo4jGraphQLAuthJWTPlugin({
            secret: process.env.JWT_KEY
        })
    }
})


export const signUp = async(args) =>{
	await ogm.init()
	const User = ogm.model('User')

	const existingUser = await User.find({
		where:{email:args.email}
	}) 

	if(existingUser.length!=0)
		return 'USER_EXISTS'
	
	await User.create({
		input:args
	})
	
	const newUser = await User.find({
		where:{email:args.email}
	}) 

	if(newUser.length==0)
		return 'ERROR'

	const token = jwt.sign(
		newUser[0],
		process.env.JWT_KEY,
		{
			expiresIn:2592000
		}
	)
	return token
}


export const logIn = async(args) =>{
	await ogm.init()
	const User = ogm.model('User')

	const existingUser = await User.find({
		where:{email:args.email, password:args.password}
	}) 

	if(existingUser.length==0)
		return 'USER_NOT_EXIST'
	
	const token = jwt.sign(
		existingUser[0],
		process.env.JWT_KEY,
		{
			expiresIn:2592000
		}
	)
	return token
}

export default startServerAndCreateNextHandler(apolloServer,{
	context: async (req) => {
		const token = req.cookies.token;
		let payload = {}
		const validity = await  verifyToken(token)
		if(validity)
			payload = await decodeToken(token)

		console.log(payload)
		return { 
			executionContext: driver,
			jwt: payload
		}
	}
});
