import Image from "next/image";
import {useContext, useState } from "react";
import localFont from 'next/font/local'
import { useRouter } from "next/router";
const Milans = localFont({ src: '../styles/fonts/Milans/Milans.ttf' })
import { AuthContext } from "@/context/AuthContext";

export default function Home() {
	const colors = ['#000000','#F85B5B','#F6AC63','#9F36AE','#648AAE','#86BDA6']
	const [email,setEmail] = useState('')
	const [color,setColor] = useState(0)

	const router = useRouter()	
	const {checkUser} = useContext(AuthContext)

	const EnterEmailHandler = async() => {
		const prevUser = await checkUser(email)

		prevUser?
		router.push({
			pathname:`/Login`,
			query:{
				email
			}
		}):
		router.push({
			pathname:`/Sign`,
			query:{
				email
			}
		})
	}


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
				className="text-[25vw] cursor-pointer z-20 absolute h-[30%] top-20"
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

			<div className="flex space-x-5 text-[grey]">
				<input
					className="relative h-10 z-10 rounded-lg p-3 my-10"
					value={email}
					onChange={(e)=>setEmail(e.target.value)}
					placeholder="Your Email"
				>
				</input>

				<button
					className="relative z-10 my-10"
					onClick={EnterEmailHandler}
				>
					<Image
						className="bg-[#6326A8] rounded-[50%] w-10 h-10 p-2"
						src={"/Arrow.svg"}
						width={100}
						height={100}
					/>
				</button>
			</div>
		</main>
	)
}
