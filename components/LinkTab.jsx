import Image from "next/image"
import Link from "next/link"

function LinkTab({type='twitter',color,bgColor,link,setOpenLinkInput}) {


	return (
		link?
		<Link 
			className='w-20 h-20 p-4 m-2 rounded-xl flex justify-center items-center hover:shadow-md active:opacity-90 select-none'
			style={{backgroundColor:bgColor}}
			href={link?link:''}
		>
			<Image
				src={`/${type}_${color.replace(/#/g, "")}.svg`}
				width={50}
				height={50}
			/>
		</Link>:
		<button 
			className=' p-4 m-2 rounded-xl flex justify-center items-center hover:shadow-md active:opacity-90 select-none'
			style={{backgroundColor:'#FFFFFF'}}
			onClick={()=>setOpenLinkInput(prev=>!prev)}
		>
			<Image
				src={`/${type}_CDCDCD.svg`}
				width={50}
				height={50}
			/>
		</button>
	)
}

export default LinkTab