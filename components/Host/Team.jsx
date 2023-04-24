import { useState } from "react"
import SearchBar from "../SearchBar"
import TeamProfile from "./utils/TeamProfile"

const TeamData = Array(20).fill({
	name:"Vishnu",
	image:" ",
	id:"/jane_doe",
})

function Team() {
	const [searchParams,setSearchParams] = useState('')

	return (
		<div className="flex flex-col items-center pt-[15%]">
			<div className='fixed top-10 w-full flex flex-col items-center justify-end h-[31%] z-10'>
				<SearchBar
					searchParam={searchParams}
					setSearchParam={setSearchParams}
				/>
			</div>

			<div className="grid grid-cols-5 gap-3 grid-flow-row-dense p-[5%] z-0">
				{TeamData.filter(item=>
				(searchParams==''?true:
				item?.name?.toLowerCase().includes(searchParams)))
				.map((profile,index)=>(
					<TeamProfile
						key={index}
						name={profile.name}
						// profilePic={Profile.image}
						id={profile.id}
					/>
				))}
			</div>
		</div>
	)
}

export default Team