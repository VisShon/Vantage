import '@/styles/globals.css'
import AuthProvider from '@/context/AuthContext'
import {useEffect} from 'react'
import Nprogress from 'nprogress'
import Router from 'next/router'


export default function App({ Component, pageProps }) {

	useEffect(() => {
		Router.events.on("routeChangeStart",(url)=>{
			Nprogress.start()
		})
		Router.events.on("routeChangeComplete", (url)=>{
			Nprogress.done(false)
		})
		Router.events.on("routeChangeError", (url)=>{
			Nprogress.done(false)
		})
	},[Router])


	return (
		<>	
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</>
	)
}
