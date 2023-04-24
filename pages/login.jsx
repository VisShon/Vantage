import Image from "next/image";
import { useEffect, useState } from "react";
import localFont from 'next/font/local'
import { useRouter } from "next/router";
const Milans = localFont({ src: '../styles/fonts/Milans/Milans.ttf' })
import LoginButton from '../components/LoginButton'

function Login() {

	const router = useRouter()
	const [email, setEmail] = useState(router.query.email)
	const [isPrev, setIsPrev] = useState(router.query.email)
	const [password, setPassword] = useState('')

	useEffect(() => {
		router.prefetch('/Explore')
	}, [router])
	
	return (
		<main className='relative bg-[#F6AC63] w-screen h-screen flex flex-col justify-center items-center text-center select-none'>
			<Image
				className="absolute top-5 left-[28%] w-[19%] z-0"
				src={"/OrbBlue.svg"}
				width={50}
				height={50}
			/>
			<Image
				className="absolute w-[29%] z-0 top-24"
				src={"/OrbYellow.svg"}
				width={50}
				height={50}
			/>
			<Image
				className="absolute bottom-72 right-[30%] w-[19%] z-0"
				src={"/OrbBlue.svg"}
				width={50}
				height={50}
			/>
			
			<div className="text-[25vw] z-20 absolute -top-20">
				<h1 className={Milans.className}>Vantage</h1>
			</div>

			<p className="absolute top-20 z-10 font-light mt-20">
				Experience the Event Advantage.
			</p>

			<div className="h-[50%] flex flex-col justify-end w-[30%] items-center">
				<input
					className="h-10 z-30 rounded-lg p-5 my-2 w-full text-[grey] glass bg-[#ffffffaf] "
					value={email}
					onChange={(e)=>setEmail(e.target.value)}
					placeholder="Email"
					>
				</input>

				<input
					className="h-10 z-30 rounded-lg p-5 my-2 w-full text-[grey] glass bg-[#ffffffaf] "
					value={password}
					onChange={(e)=>setPassword(e.target.value)}
					placeholder="Password"
					>
				</input>

				<LoginButton/>

			</div>
	</main>
	)
}

export default Login