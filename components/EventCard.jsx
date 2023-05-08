
import { getType } from "@/util/getType"
import Image from "next/image"
import Link from "next/link"
function EventCard({title,date,links,description,bgColor,color,id}) {
	return (
		<Link href={`/event/${id}`} className="w-[80%] justify-self-center bg-[white] p-5 rounded-xl text-[#898989] text-left min-h-[40vh] m-5 flex flex-col items-start gap-2 hover:shadow-md mb-28">
			<h2
				style={{color:color}}
				className="w-full overflow-hidden"
			>
				{title}
			</h2>

			<p className="text-[#4D4D4D]">
				{date}
			</p>

			<div className="flex">
				{links?.map((item,index)=>(
					<Link 
						key={index}
						className='p-2 mr-2 rounded-full flex justify-center items-center hover:shadow-md active:opacity-90 select-none'
						style={{backgroundColor:bgColor}}
						href={item}
					>
							
						<Image
							className="w-[1.5rem] p-1"
							src={`/${getType(item)}_${color.replace(/#/g, "")}.svg`}
							width={50}
							height={50}
						/>
					</Link>
				))}
			</div>

			<span className="mt-10 w-full break-words">
				{description.slice(0,200)}...
			</span>
		</Link>
	)
}

export default EventCard