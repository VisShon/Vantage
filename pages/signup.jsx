import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import localFont from 'next/font/local'
const Milans = localFont({ src: '../styles/fonts/Milans/Milans.ttf' })
import SignUpButton from '@/components/SignupButton'

function SignUp() {

	const router = useRouter()
	const [email, setEmail] = useState(router.query.email)
	const [password, setPassword] = useState('')
	const [username, setUsername] = useState('')

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
			
			<div className="text-[25vw] z-0 absolute -top-20">
				<h1 className={Milans.className}>Vantage</h1>
			</div>

			<div className="h-[40%] flex flex-col justify-end w-[30%] items-center">
				<input
					className="glass bg-[#ffffffaf] h-10 z-5 rounded-lg p-3 my-2 w-full text-[grey]"
					value={email}
					onChange={(e)=>setEmail(e.target.value)}
					placeholder="Email"
					>
				</input>

				<input
					className="glass bg-[#ffffffaf] h-10 z-5 rounded-lg p-3 my-2 w-full text-[grey]"
					value={username}
					onChange={(e)=>setUsername(e.target.value)}
					placeholder="Username"
					>
				</input>

				<input
					className="glass bg-[#ffffffaf] h-10 z-5 rounded-lg p-3 my-2 w-full text-[grey]"
					value={password}
					type="password"
					onChange={(e)=>setPassword(e.target.value)}
					placeholder="Password"
					>
				</input>

				<div className="relative z-0 h-[15%] flex w-full justify-center text-[white] items-center mt-5">
				    <SignUpButton
						username={username}
						email={email}
						password={password}

					/>
				</div>
			</div>
	</main>
	)
}

export default SignUp