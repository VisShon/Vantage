import { getType } from "@/util/getType"
import Image from "next/image"
import Link from "next/link"

function ProfileEvents({title,links,description,bgColor,color,id}) {
	return (
		<Link href={`/dashboard/${id}/attend`} className="w-full justify-self-center bg-[white] p-5 rounded-xl text-[#898989] text-left min-h-[35vh] flex flex-col items-start gap-2 hover:shadow-md ">
			<h2
				className=""
				style={{color:color}}
			>
				{title}
			</h2>

			<p className="text-[#4D4D4D]">
				attendee
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

			<span className="mt-10">
				{description.slice(0,200)}...
			</span>
		</Link>
	)
}

export default ProfileEvents