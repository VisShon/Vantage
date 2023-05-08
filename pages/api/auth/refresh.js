import { refresh } from "../graphql"
import cookie from 'cookie'
import { decode, verify } from "jsonwebtoken";

export default async function handler(req,res){
    const jwt = req.cookies.token

    console.log(jwt)
    if (jwt === undefined) {
        console.log(jwt)
        return res.redirect('/login');
    }

    try {
        await verify(jwt, process.env.JWT_KEY);
        const email = await decode(jwt)?.email
        const token = await refresh({
            email:email,
        })
        console.log(token,email)
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
        res.redirect(200,'/profile')

    } catch (error) {
        console.log(error);
        res.redirect(404,'/login')
    }

}