import { refresh } from "../graphql"
import cookie from 'cookie'
import { decode } from "jsonwebtoken";

export default async function handler(req,res){

    const jwt = req.cookies.token
    const email = await decode(jwt)?.email
	const token = await refresh({
		email:email,
	})

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