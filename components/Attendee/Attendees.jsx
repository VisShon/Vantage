import AteendeeProfile from "./utils/AttendeeProfile"

function Attendees({Attendees}) {
	return (
		<div className="grid grid-cols-5 gap-3 grid-flow-row-dense p-[5%] pt-[20%] z-0">
			{Attendees?.map((profile,index)=>(
				<AteendeeProfile
					key={index}
					name={profile.username}
					// profilePic={Profile.image}
					id={profile.id}
				/>
			))}
		</div>
	)
}

export default Attendees