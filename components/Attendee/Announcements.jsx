import Announcement from './utils/AnnouncementCard';
import InfoCard from '@/components/Attendee/utils/InfoCard';

const AnnouncementData = Array(20).fill({
	title:'Front end and Web Design',
	timestamp:new Date('2023-04-19T14:11:33.609Z'),
	description:'New innovations and ideas in design new innovations and ideas in design.',
})

function Announcements({EventData}) {
	
	return (
		<div className="flex w-full text-left justify-between p-10">
			<section 
				className='relative w-[70%] h-[70%] flex flex-col justify-center items-start select-none pt-[18%] overflow-x-hidden'>
				{AnnouncementData?.map((announcement,index)=>(
					<Announcement
						key={announcement.index}
						title={announcement.title}
						description={announcement.description}
						date={announcement.timestamp }
					/>
				))}
			</section>
			<section 
				className="h-[200vh] w-[25%] relative p-10 pt-[18%]">
				<InfoCard
					fromDate={EventData?.fromDate}
					toDate={EventData?.toDate}
					links={EventData?.links}
					address={EventData?.address}
					attendees={EventData?.attendes}
				/>
			</section>
		</div>
	)
}

export default Announcements