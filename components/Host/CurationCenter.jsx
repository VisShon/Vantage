import { useState, useEffect } from "react"
import { useQuery } from "@apollo/client"
import GetEventHost from '@/apollo/Event/getEventHost.graphql'
import CurationNaviator from "./tabs/CurationNaviator"
import EventDetails from "./tabs/EventDetails"
import MailTemplates from "./tabs/MailTemplates"
import nProgress from "nprogress"
import Sponsors from "./tabs/Sponsors"
import Links from "./tabs/Links"

function CurationCenter({id}) {
	const [selected,setSelected] = useState('DETAILS')
	const {data,error,loading} = useQuery(GetEventHost,{
		variables:{
			where:{
				id:id
			}
		}
	})

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
		<div className="w-[80%] bg-[white] h-[65%] rounded-xl relative z-20 mt-20 p-2 flex gap-5 justify-between items-center">
			<CurationNaviator
				selected={selected}
				setSelected={setSelected}
			/>
			<section className="rounded-xl border-2 border-[#35353535] w-[80%] h-full flex flex-col items-center">
				{selected=='DETAILS' && 
				<EventDetails
					eventData={data?.events[0]}
					id={id}
				/>}
				{selected=='MAILS' && 
				<MailTemplates
					mails={data?.events[0]?.mailList}
					id={id}
				/>}
				{selected=='SPONSORS' && 
				<Sponsors
					sponsors={data?.events[0]?.sponsors}
					id={id}
				/>}
				{selected=='LINKS' && 
				<Links
					linksData={data?.events[0]?.links}
					id={id}
				/>}
			</section>
		</div>
	)
}

export default CurationCenter