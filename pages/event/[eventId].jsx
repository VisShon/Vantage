import Image from "next/image";
import { useState, useEffect} from 'react'
import { useRouter } from "next/router"
import { useQuery } from '@apollo/client'
import localFont from 'next/font/local'
import InfoCard from "@/components/InfoCard";
import { decode } from 'jsonwebtoken';
const Milans = localFont({ src: '../../styles/fonts/Milans/Milans.ttf' })
import GetEvent from '@/apollo/Event/getEvent.graphql'
import nProgress from 'nprogress'
import Link from "next/link";

function Details({userId}) {
	const [eventData, setEventData] = useState({})
	const router = useRouter()
	const id = router.query.eventId

	const { loading, error, data } = useQuery(GetEvent,{
		variables:{
			where:{
				id
			}
		}
	})
	
	useEffect(() => {
		if(loading){
			nProgress.start()
		}
		if(!loading){
			nProgress.done(false)
			setEventData(data?.events[0])
		}
		if(error){
			nProgress.done(false)
		}
	},[loading])


	return (
		<main className="flex flex-col justify-center items-left text-left relative w-full bg-[#648AAE]">
			<div className="text-[20vw] absolute -top-20 z-20 w-full text-center">
				<h1 className={Milans.className}>
					{eventData.title}
				</h1>
			</div>
			<Image
				className="absolute top-0 left-0 w-[30%] z-10"
				src={"/star.svg"}
				width={50}
				height={50}
			/>
			<Image
				className="absolute top-[35%] right-0 w-[20%] z-0"
				src={"/fullStar.svg"}
				width={50}
				height={50}
			/>

			<div className="flex w-full text-left justify-between p-10">
				<section className='relative w-[70%] h-[70%] flex flex-col justify-center items-start select-none pt-[18%] overflow-x-hidden'>
					<Image
						className="w-full rounded-2xl aspect-video z-0"
						src={"https://tfwlab.wales/wp-content/uploads/2022/08/HACKATHON-1-1080x675.png"}
						width={2000}
						height={2000}
					/>

					<div className="text-[10rem] z-20">
						<h2 className={Milans.className}>
							Event Details
						</h2>
						<p className="text-[1.2rem]">
							{eventData.details}
						</p>
					</div>


					<div className="text-[10rem] z-20">
						<h2 className={Milans.className}>
							Sponsors
						</h2>
						<div className='grid grid-cols-4 gap-4  z-0 bg-[white] text-[black] rounded-2xl p-5'>
							{eventData.sponsors?.map((sponsor,index)=>(
								<Link href={sponsor.URL}>
									<Image
										className="w-full z-0"
										alt="vantage"
										key={index}
										src={sponsor.image}
										width={500}
										height={500}
									/>
								</Link>
								
							))}
						</div>
					</div>

					<div className="text-[10rem] z-20 ">
						<h2 className={Milans.className}>
							Team
						</h2>
						<div className='grid grid-cols-4 gap-4  z-0 bg-[white] text-[black] rounded-2xl p-5'>
							{eventData.organisers?.map((organiser,index)=>(
								<div className="flex flex-col justify-center items-center text-5xl">
									<Image
										className="w-[30%] z-0 -mb-4"
										alt="vantage"
										key={index}
										src={"https://xsgames.co/randomusers/assets/images/favicon.png"}
										width={500}
										height={500}
									/>
									<h2 className={Milans.className}>
										{organiser.username}
									</h2>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="h-[200vh] w-[25%] relative p-10 pt-[18%] ">
					<InfoCard
						fromDate={eventData.fromDate} 
						toDate={eventData.toDate} 
						links={eventData.links} 
						address={eventData.address} 
						attendees={eventData.attendees?.length}
						isUserAttending={false}
						id={eventData.id}
						userID={userId}		
					/>
				</section>
			</div>
		</main>
	)
}

export default Details

export async function getServerSideProps({req,res}){
	const token = req.cookies.token
	return {
		props:{
			userId:decode(token).id
		}
	}
}