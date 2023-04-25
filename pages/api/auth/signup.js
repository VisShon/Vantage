import { signUp } from "../graphql"

export default async function handler(req,res){
	const args = req.body.args
	const token = await signUp(args)
	//convert password to hash

	if(token=='USER_EXISTS')
		res.send('User Already Exists').redirect(201,'/login')
	if(token=='ERROR')
		res.send('Internal Server Error').redirect(500,'/signup')

	setCookie(res, 'user', token, { path: '/', maxAge: 2592000 })
	res.send('User Signed Up').redirect(200,'/')
}