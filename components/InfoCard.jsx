
import Image from "next/image"
import Link from "next/link"
import localFont from 'next/font/local'
import { useState, useEffect } from "react";
import { getType } from "@/util/getType";
import { useMutation } from "@apollo/client"
import AddAttendee from "../apollo/Event/addAttendee.graphql"
const Milans = localFont({ src: '../styles/fonts/Milans/Milans.ttf' })
import nProgress from "nprogress";
import { useRouter } from "next/router";

function InfoCard({fromDate, toDate, links, address, attendees, id, userID} ) {
	const router = useRouter()
	
	const [isUserAttending,setIsUserAttending] =  useState(false)
	console.log(isUserAttending)
	const [addAttendee,{error,loading,data}] = useMutation(AddAttendee);
	
	useEffect(() => {
		const attendeeisUser = attendees?.filter(item=>item.id==userID) || []
		setIsUserAttending(attendeeisUser.length!=0)
	},[userID,attendees])

	const handleRegister = async() =>{
		if(!userID){
			router.push('/login')
		}

		await addAttendee({
			variables:{
				where: {
				  id
				},
				connect: {
				  attendees: [
					{
					  where: {
						node: {
						  id: userID
						}
					  },
					  edge: {
						URL: null
					  },
					  overwrite: false
					}
				  ]
				}
			}
		})

		await fetch("/api/auth/refresh", {
			method: "post",
			mode:'cors',
			headers: {
				'Content-Type': 'application/json'
			}
		})

		setIsUserAttending(true)
	}

	useEffect(() => {
		if(loading){
			nProgress.start()
		}
		if(!loading){
			nProgress.done(false)
			if(error)
				alert(error)
		}
		
		if(error){
			nProgress.done(false)
		}
	},[loading])


	return (
		<div className="sticky top-10 justify-self-center bg-[white] p-5 rounded-xl text-[#898989] text-left flex flex-col items-center gap-2 hover:shadow-md">

			<div className="text-[2vw] z-20 self-start ">
				<h2 className="text-[#316ABE] font-medium">
					from.
				</h2>
				<p className={Milans.className}>
					{fromDate}
				</p>
			</div>

			<div className="text-[2vw] z-20 self-start font-medium">
				<h2 className="text-[#316ABE]">
					to.
				</h2>
				<p className={Milans.className}>
					{toDate}
				</p>
			</div>

			<div className="flex w-full justify-start">
				{links?.map((item,index)=>(
					<Link 
						key={index}
						className='p-2 mr-2 bg-[#EAFBFF] rounded-full flex justify-center items-center hover:shadow-md active:opacity-90 select-none'
						href={item}
					>
						<Image
							className="w-[1.5rem] p-1"
							src={`/${getType(item)}_316ABE.svg`}
							width={50}
							height={50}
						/>
					</Link>
				))}
				<div className='p-2 mr-2 text-3xl h-10 rounded-full text-[#316ABE] flex justify-center items-center hover:shadow-md active:opacity-90 select-none bg-[#EAFBFF] '>
					<h2 className={Milans.className}>
						{attendees?.length>100?
						(attendees?.length-attendees?.length%100):
						attendees?.length}+
					</h2>
				</div>
			</div>

			{address&&<iframe
                  width="450"
                  height="140"
				  className="w-full rounded-xl"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAGvy5rBo-MPjD0vR2BkkRhtKAXmFHCLVY&q=${encodeURIComponent(
                    address
                  )}`}
                  allowFullScreen
			></iframe>}

			{!isUserAttending&&<button
				className='p-4 bg-[#316ABE] font-light font-lexend text-center rounded-lg w-full hover:bg-[#2a5ba5] m-4 text-[white]'
				onClick={handleRegister}
			>
				Register
			</button>}

			{isUserAttending&&
			<Link
				className='p-4 bg-[#316ABE] font-light font-lexend text-center rounded-lg w-full hover:bg-[#2a5ba5] m-4 text-[white]'
				href={`/dashboard/${id}/attend`}
			>
				Dashboard
			</Link>}
		</div>
	)
}

export default InfoCard