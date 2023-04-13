
import Image from "next/image"
import Link from "next/link"
function EventCard({title,date,links,description,bgColor,color}) {
	return (
		<div className="w-[60%] justify-self-center bg-[white] p-5 rounded-xl text-[#898989] text-left h-[30vh] m-5 flex flex-col items-start gap-2 hover:shadow-md">
			<h2
				className=""
				style={{color:color}}
			>
				{title}
			</h2>

			<p className="text-[#4D4D4D]">
				{date.toISOString()}
			</p>

			<div className="flex">
				{Object.keys(links)
				.map((item,index)=>(
					<Link 
						key={index}
						className='p-2 mr-2 rounded-full flex justify-center items-center hover:shadow-md active:opacity-90 select-none'
						style={{backgroundColor:bgColor}}
						href={links[item]}
					>
							
						<Image
							className="w-[1.5rem] p-1"
							src={`/${item}_${color.replace(/#/g, "")}.svg`}
							width={50}
							height={50}
						/>
					</Link>
				))}
			</div>

			<span className="mt-10">
				{description}
			</span>
		</div>
	)
}

export default EventCard