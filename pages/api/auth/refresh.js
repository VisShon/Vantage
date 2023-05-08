import { refresh } from "../graphql"
import cookie from 'cookie'
import { decode } from "jsonwebtoken";
import { NextResponse } from "next/server";

export default async function handler(req,res){

    const jwt = req.cookies.token
    const {pathname} = req.nextUrl;

    if (jwt === undefined) {
        return NextResponse.redirect('/login');
    }

    try {
        await verify(jwt.value, process.env.JWT_KEY);
        const email = await decode(jwt)?.email
        const token = await refresh({
            email:email,
        })

        console.log('token set form refresh')
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
        NextResponse.redirect('/profile')

    } catch (error) {
        req.nextUrl.pathname = pathname;
        return NextResponse.redirect('/login');
    }

}