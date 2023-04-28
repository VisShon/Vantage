function Announcement({title,date,description}) {
	return (
		<div className="flex py-4 flex-col justify-center items-left text-left relative bg-[white] rounded-xl w-[95%] p-5 shadow-sm my-5 text-[#898989]">

			<h2 className="text-[#31BEB6]">
				{title}
			</h2>
			<p className="text-[#4D4D4D]">
				{date}
			</p>
			<span className="mt-10">
				{description}
			</span>

		</div>
	)
}

export default Announcement