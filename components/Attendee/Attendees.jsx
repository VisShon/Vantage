import AteendeeProfile from "./utils/AttendeeProfile"

const ProfileData = Array(20).fill({
	name:"Vishnu",
	image:" ",
	id:"/jane_doe",
})

function Attendees() {
	return (
		<div className="grid grid-cols-5 gap-3 grid-flow-row-dense p-[5%] pt-[20%] z-0">
			{ProfileData.map((profile,index)=>(
				<AteendeeProfile
					key={index}
					name={profile.name}
					// profilePic={Profile.image}
					id={profile.id}
				/>
			))}
		</div>
	)
}

export default Attendees