import Announcement from './utils/AnnouncementCard';
import InfoCard from '@/components/Attendee/utils/InfoCard';

function Announcements({EventData}) {
	
	return (
		<div className="flex w-full text-left justify-between p-10">
			<section 
				className='relative w-[70%] h-[70%] flex flex-col justify-center items-start select-none pt-[18%] overflow-x-hidden'>
				{EventData.announcements?.map((announcement,index)=>(
					<Announcement
						key={announcement.index}
						title={announcement.title}
						description={announcement.details}
						date={announcement.timeStamp }
					/>
				))}
			</section>
			<section 
				className="h-[200vh] w-[25%] relative p-10 pt-[18%]">
				<InfoCard
					fromDate={EventData?.fromDate}
					toDate={EventData?.toDate}
					links={EventData?.links}
					id={EventData.id}
					address={EventData?.address}
					attendees={EventData?.attendees?.length}
				/>
			</section>
		</div>
	)
}

export default Announcements