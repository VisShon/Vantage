
import SearchBar from "../SearchBar"
import TeamProfile from "./utils/TeamProfile"
import { useState, useEffect } from "react"
import { useQuery } from "@apollo/client"
import GetEventHost from '@/apollo/Event/getEventHost.graphql'
import nProgress from "nprogress"



function Team({id}) {
	const [TeamData,setTeamData] = useState([])
	const [searchParams,setSearchParams] = useState('')
	const {data,error,loading} = useQuery(GetEventHost,{
		variables:{
			where:{
				id:id
			}
		}
	})

	console.log(data)

	useEffect(() => {
		if(loading){
			nProgress.start()
		}
		if(!loading){
			nProgress.done(false)
			if(error)
				alert(error)
			setTeamData(data?.events[0].organisers)
		}
		if(error){
			nProgress.done(false)
		}
	},[loading])

	return (
		<div className="flex flex-col items-center pt-[15%] h-[90%] overflow-y-scroll">
			<div className='fixed top-10 w-full flex flex-col items-center justify-end h-[31%] z-10'>
				<SearchBar
					searchParam={searchParams}
					setSearchParam={setSearchParams}
				/>
			</div>

			<div className="grid grid-cols-5 gap-3 grid-flow-row-dense p-[5%] z-0">
				{TeamData?.filter(item=>
				(searchParams==''?true:
				item?.name?.toLowerCase().includes(searchParams)))
				.map((profile,index)=>(
					<TeamProfile
						key={index}
						name={profile.username}
						// profilePic={Profile.image}
						id={profile.id}
					/>
				))}
			</div>
		</div>
	)
}

export default Team