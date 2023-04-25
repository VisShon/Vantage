import { logIn } from "../graphql"

export default async function handler(req,res){
	const args = req.body.args
	//convert password to hash

	const token = await logIn(args)

	if(token=='USER_NOT_EXISTS')
		res.send('User Does Not Exists').redirect(404,'/signup')

	setCookie(res, 'user', token, { path: '/', maxAge: 2592000 })
	res.send('User Signed Up').redirect(200,'/')
}