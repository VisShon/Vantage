import { NextResponse } from 'next/server'
import {decodeJwt, jwtVerify} from 'jose'

export async function middleware(req) {
    const jwt = req.cookies.get("token");
    const {pathname} = req.nextUrl;
    const{search} = req.nextUrl

    //Profile link redirects
    if (pathname.startsWith("/profile")||pathname.startsWith("/dashboard")||pathname.startsWith("/host")) {
        if (jwt === undefined) {
            req.nextUrl.pathname = "/login";
            return NextResponse.redirect(req.nextUrl);
        }

        try {
            await verify(jwt.value, process.env.JWT_KEY);
        } catch (error) {
            req.nextUrl.pathname = "/login";
            return NextResponse.redirect(req.nextUrl);
        }
    }

    if(pathname==='/profile'&&!search){
        if (jwt !== undefined) {
            console.log('poop')
            const user = await decode(jwt.value)
            req.nextUrl.pathname = '/profile';
            req.nextUrl.search = `?id=${user.id}`;
            return NextResponse.redirect(req.nextUrl);
        }
    }

    //Dashboard redirects
    if (pathname.startsWith("/dashboard")) {
        const user = await decode(jwt.value)

        const regex = /\/dashboard\/([\w-]+)\/(host|attend)/;
        const match = regex.exec(pathname);
        const eventId = match[1];

        const organisedEvents = user.OrganisedEvent.filter(item=>item.id==eventId)
        const attendedEvents = user.AttendedEvents.filter(item=>item.id==eventId)
        
        console.log(attendedEvents)

        if(organisedEvents.length!=0&&pathname.endsWith('/host')){
            return NextResponse.next()
        }

        if(attendedEvents.length!=0&&pathname.endsWith('/attend')){
            return NextResponse.next()
        }

        if(attendedEvents.length!=0&&pathname.endsWith('/host')){
            req.nextUrl.pathname = `/dashboard/${eventId}/attend`
            return NextResponse.redirect(req.nextUrl)
        }

        if(organisedEvents.length!=0&&pathname.endsWith('/attend')){
            req.nextUrl.pathname = `/dashboard/${eventId}/host`
            return NextResponse.redirect(req.nextUrl)
        }

        req.nextUrl.pathname = `/event/${eventId}`
        return NextResponse.redirect(req.nextUrl)
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
