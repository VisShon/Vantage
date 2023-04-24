import Image from "next/image"
import { useState, useEffect } from "react"
import localFont from 'next/font/local'
import { useRouter } from "next/router"
const Milans = localFont({ src: '../styles/fonts/Milans/Milans.ttf' })
import LinkTab from '../components/LinkTab'
import SignUpButton from '../components/SignupButton'

function SignUp() {

	const router = useRouter()
	const [email, setEmail] = useState(router.query.email)
	const [password, setPassword] = useState('')
	const [passwordCheck, setPasswordCheck] = useState('')
	const [openLinkInput,setOpenLinkInput] = useState(false)

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

			<div className="h-[40%] flex flex-col justify-end w-[30%] items-center">
				<input
					className="glass bg-[#ffffffaf] h-10 z-30 rounded-lg p-3 my-2 w-full text-[grey]"
					value={email}
					onChange={(e)=>setEmail(e.target.value)}
					placeholder="Email"
					>
				</input>

				<input
					className="glass bg-[#ffffffaf] h-10 z-30 rounded-lg p-3 my-2 w-full text-[grey]"
					value={password}
					onChange={(e)=>setPassword(e.target.value)}
					placeholder="Password"
					>
				</input>

				<input
					className="glass bg-[#ffffffaf] h-10 z-30 rounded-lg p-3 my-2 w-full text-[grey]"
					value={passwordCheck}
					onChange={(e)=>setPasswordCheck(e.target.value)}
					placeholder="Once More"
					>
				</input>

				<div className="relative z-10 h-[15%] flex flex-col justify-start text-[white] items-center mt-5">
					<p className="my-1">
						Add social links
					</p>
					<div className="flex">
						<LinkTab
							type='twitter'
							setOpenLinkInput={setOpenLinkInput}
						/>
						<LinkTab
							type='insta'
							setOpenLinkInput={setOpenLinkInput}
						/>
						<LinkTab
							type='linkedin'
							setOpenLinkInput={setOpenLinkInput}
						/>
						<LinkTab
							type='telegram'
							setOpenLinkInput={setOpenLinkInput}
						/>
					</div>
				    <SignUpButton/>
				</div>

			</div>
	</main>
	)
}

export default SignUp