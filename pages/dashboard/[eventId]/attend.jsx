import Image from 'next/image';
import localFont from 'next/font/local'
import Navigator from '@/components/Attendee/Navigator';
import Announcements from '@/components/Attendee/Announcements';
import Attendees from '@/components/Attendee/Attendees';
import QrTicket from '@/components/Attendee/QrTicket';
import LiveStream from '@/components/Attendee/LiveStream';
import Messaging from '@/components/Attendee/Messaging';
const Milans = localFont({ src: '../../../styles/fonts/Milans/Milans.ttf' })

const EventData = {
	title:'Odyssey',
	fromDate:new Date('2023-04-15T14:11:33.609Z'),
	toDate:new Date('2023-04-16T14:11:33.609Z'),
	links:{
		twitter:'',
		website:''
	},
	attendes:220,
	address:'mumbai',
	description:'New innovations and ideas in design new innovations and ideas in design.',
}

function attend() {
	
	return (
		<main className="bg-[#86BDA6] min-h-screen flex flex-col p-5 items-center text-center justify-center gap-24  cursor-default select-none font-lexend relative z-10">

			<div className="text-[20vw] absolute -top-28 z-20 w-full text-center">
				<h1 className={Milans.className}>
					{EventData?.title}
				</h1>
				{/* <Navigator/> */}
			</div>

			<Image
				className="fixed w-[60%] top-0 z-0"
				src={"/AttendStar.svg"}
				width={100}
				height={100}
			/>

			<Announcements EventData={EventData} />
			{/* <Attendees/> */}
			{/* <QrTicket/> */}
			{/* <LiveStream/> */}
			{/* <Messaging/> */}

		</main>
	)
}

export default attend