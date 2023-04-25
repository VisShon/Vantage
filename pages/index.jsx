import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import localFont from 'next/font/local'
const Milans = localFont({ src: '../styles/fonts/Milans/Milans.ttf' })

export default function Home() {
	const colors = ['#000000','#F85B5B','#F6AC63','#9F36AE','#648AAE','#86BDA6']
	const [email,setEmail] = useState('')
	const [color,setColor] = useState(0)

	return (
		<main 
			className="flex flex-col p-5 items-center text-center justify-around h-screen w-screen cursor-default select-none font-lexend relative z-10 overflow-clip"
			style={{backgroundColor:colors[color]}}
		>
			<p className="flex space-x-2 justify-center w-[13%] opacity-70">
				<span>Organise.</span>
				<span>Participate.</span>
				<span>Explore.</span>
			</p>

			<Image
				className="absolute w-[40%] z-0"
				src={"/logo.svg"}
				width={100}
				height={100}
			/>

			<Image
				className="absolute bottom-20 ml-20 left-[30%] w-[13%] z-0"
				src={"/OrbYellow.svg"}
				width={50}
				height={50}
			/>

			<Image
				className="absolute top-28 right-[30%] w-[14%] z-0"
				src={"/OrbPink.svg"}
				width={50}
				height={50}
			/>

			<div 
				className="text-[25vw] cursor-pointer z-20 absolute h-[30%] top-8"
				onClick={()=>
					color==colors.length-1?
					setColor(0):setColor(prev=>prev+1)
				}
			>
				<h1 className={Milans.className}>Vantage</h1>
			</div>

			<div className="relative z-10 font-light opacity-70 h-[35%] flex flex-col justify-end">
				<p className="my-1">Experience the Event Advantage.</p>
				<p>The one stop solution for event management</p>
			</div>

			<div className="flex flex-col items-center justify-center text-[grey] relative z-20">
				<input 
					className="relative h-10 z-10 rounded-lg p-3 "
					type="email" 
					value={email}
					onChange={(e)=>setEmail(e.target.value)}
					placeholder="user@example.com" 
					required
				>
				</input>

				<div className="flex gap-4">
					<Link
						className="relative z-10 my-10 bg-[#3f0c8b] rounded-full p-2 text-[white] hover:bg-[#30096b]"
						href={{
							pathname:'/signup',
							query:{email:email}
						}}
					>
						Sign Up
					</Link>

					<Link
						className="relative z-10 my-10 bg-[#3f0c8b] rounded-full p-2 text-[white] hover:bg-[#30096b]"
						href={{
							pathname:'/login',
							query:{email:email}
						}}
					>
						Log In
					</Link>
				</div>
			</div>
		</main>
	)
}
