import { signUp } from "../graphql"
import bcrypt from 'bcrypt'
import cookie from 'cookie'

export default async function handler(req,res){
	const {password,email,username} = req.body
	const passwordHash = await bcrypt.hash(password,12)
	const token = await signUp({
		username:username,
		email:email,
		password:passwordHash,
	})

	if(token=='USER_EXISTS')
		res.redirect(201,'/login')
	if(token=='ERROR')
		res.redirect(500,'/signup')

	else if(token!='ERROR'&&token!='USER_EXISTS'){
		res.setHeader(
			"Set-Cookie",
			cookie.serialize('token', token, 
				{
					httpOnly: true,
					secure: process.env.NODE_ENV !== "development",
					maxAge: 2592000,
					sameSite: "strict",
					path: "/",
				}
			)
		);
		res.redirect(200,'/')
	}
}