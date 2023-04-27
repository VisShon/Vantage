import Image from 'next/image';
import localFont from 'next/font/local'
import Navigator from '@/components/Attendee/Navigator';
import Announcements from '@/components/Attendee/Announcements';
import Attendees from '@/components/Attendee/Attendees';
import QrTicket from '@/components/Attendee/QrTicket';
import LiveStream from '@/components/Attendee/LiveStream';
import Messaging from '@/components/Attendee/Messaging';
import GetEventAttend from '@/apollo/Event/getEventAttend.graphql'
import nProgress from 'nprogress'
import { useRouter } from "next/router"
import { useQuery } from '@apollo/client'
import { useState,useEffect } from 'react';
const Milans = localFont({ src: '../../../styles/fonts/Milans/Milans.ttf' })

function attend({ticketLink}) {

	const [selected,setSelected] = useState('ANNOUNCEMNT') 
	const [eventData, setEventData] = useState({})
	const router = useRouter()
	const id = router.query.eventId
	console.log(id)
	const { loading, error, data } = useQuery(GetEventAttend,{
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

	console.log(eventData)

	return (
		<main className="bg-[#86BDA6] min-h-screen flex flex-col p-5 items-center text-center justify-center gap-24  cursor-default select-none font-lexend relative z-10">

			<div className="text-[20vw] absolute -top-28 z-20 text-center flex flex-col justify-start items-center">
				<h1 className={Milans.className}>
					{eventData.title}
				</h1>
				<Navigator
					selected={selected}
					setSelected={setSelected}
				/>
			</div>

			<Image
				className="fixed w-[60%] top-0 z-0"
				src={"/AttendStar.svg"}
				width={100}
				height={100}
			/>

			{selected=='ANNOUNCEMNT'&&
				<Announcements 
					EventData={eventData} 
				/>
			}
			{selected=='ATTENDEE'&&
				<Attendees 
					Attendees={eventData.attendees}
				/>
			}
			{selected=='TICKET'&&
				<QrTicket
				/>
			}
			{selected=='LIVESTREAM'&&
				<LiveStream
				/>
			}
			{/* {selected=='MESSAGE'&&
				<Messaging
				/>
			} */}

		</main>
	)
}

export default attend
