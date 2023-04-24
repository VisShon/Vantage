import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useState } from 'react'

function Announecement() {
	const [title,setTitle] = useState('')
	const [body,setBody] = useState('')

	return(
		<div className='w-[70%] text-[#353535] h-[65%] flex flex-col gap-5 justify-center items-center overflow-hidden select-none bg-[white] rounded-xl z-20 mt-20'>
			<input
				value={title}
				onChange={(e)=>setTitle(e.target.value)}
				className="border-2 border-[#353535] rounded-xl relative z-10 text-3xl p-5  w-[95%] "
				placeholder='Title'
			/>
			<textarea
				value={body}
				onChange={(e)=>setBody(e.target.value)}
				className="border-2 border-[#353535] rounded-xl relative z-10 text-md p-5  w-[95%] h-[75%] "
				placeholder='Body'
			/>
			<button
				className='absolute bottom-[15%] right-[20%] hover:opacity-50 z-10'
				onClick={''}>
				<Image 
					src={'/OkAnnouncement.svg'} 
					width={70} 
					height={70} 
					alt={'Feather'} 
				/>
			</button>
		</div>
	)
}

export default Announecement
