import { getType } from "@/util/getType"
import Image from "next/image"
import Link from "next/link"

function LinkTab({link}) {
	const type = getType(link)
	const style = {
		twitter:{
			bgColor:"#F6E3FF",
			color:"#9131BE"
		},
		insta:{
			bgColor:"#FFD4D0",
			color:"#EA4235"
		},
		linkedin:{
			bgColor:"#D7FFEB",
			color:"#109D58"
		},
		telegram:{
			bgColor:"#D4E4FE",
			color:"#4286F5"
		},
	}

	return (
		<>
			<Link 
				className='w-20 h-20 p-4 m-2 rounded-xl flex justify-center items-center hover:shadow-md active:opacity-90 select-none'
				style={{backgroundColor:style[type].bgColor}}
				href={link?link:''}
			>
				<Image
					src={`/${type}_${style[type].color.replace(/#/g, "")}.svg`}
					width={50}
					height={50}
				/>
			</Link>
		</>
	)
}

export default LinkTab