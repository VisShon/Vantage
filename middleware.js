import { NextResponse } from 'next/server'
import {decodeJwt, jwtVerify} from 'jose'

export async function middleware(req) {
    const jwt = req.cookies.get("token");
    const {pathname} = req.nextUrl;

    //Profile link redirects
    if (pathname.startsWith("/profile")||pathname.startsWith("/dasboard")||pathname.startsWith("/host")) {
        if (jwt === undefined) {
            req.nextUrl.pathname = "/login";
            return NextResponse.redirect(req.nextUrl);
        }
        try {
            await verify(jwt.value, process.env.JWT_KEY);
            const user = await decode(jwt.value)
            req.nextUrl.pathname = '/profile';
            req.nextUrl.search = `?id=${user.id}`;
            return NextResponse.next();
        } catch (error) {
            req.nextUrl.pathname = "/login";
            return NextResponse.redirect(req.nextUrl);
        }
    }

    // User link redirects
    if (pathname.startsWith("/user")) {
        if (jwt === undefined) {
            req.nextUrl.pathname = pathname;
            return NextResponse.redirect(req.nextUrl);
        }
  
        try {
            await verify(jwt.value, process.env.JWT_KEY);
            const user = await decode(jwt.value)
            if(pathname.endsWith(user?.id)){
                req.nextUrl.pathname = '/profile';
            req.nextUrl.search = `?id=${user.id}`;
                return NextResponse.redirect(req.nextUrl);
            }

            return NextResponse.next();
        } catch (error) {
            req.nextUrl.pathname = pathname;
            return NextResponse.redirect(req.nextUrl);
        }

    }

    //SignUp and Login link redirects
    if (pathname.startsWith("/login")||pathname.startsWith("/signup")) {
        if (!jwt === undefined) {
            const user = await decode(jwt.value)
            req.nextUrl.pathname = '/profile';
            req.nextUrl.search = `?id=${user.id}`;
            return NextResponse.redirect(req.nextUrl);
        }
        try {
            await verify(jwt.value, process.env.JWT_KEY);
            const user = await decode(jwt.value)
            req.nextUrl.pathname = '/profile';
            req.nextUrl.search = `?id=${user.id}`;
            return NextResponse.redirect(req.nextUrl);
        } catch (error) {
            return NextResponse.next();
        }
    }

}

export async function verify(token, secret) {
    const {payload} = await jwtVerify(token, new TextEncoder().encode(secret));
    return payload;
}

export async function decode(token) {
    const decoded = decodeJwt(token);
    return decoded
}

export const config = {
	matcher: ['/profile','/user/:path*','/dashboard/:path*','/signup','/login', '/host'],
}
