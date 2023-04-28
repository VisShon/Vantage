import { useState } from 'react'
import localFont from 'next/font/local'
const Milans = localFont({ src: '../../styles/fonts/Milans/Milans.ttf' })

function LiveStream() {
	const [id,setId] = useState('')

	return (
		<div className='w-full h-full overflow-hidden flex flex-col justify-center items-center pt-[10%]'>
			{!id&&
			<div className="text-[5vw] z-20 text-center">
				<h1 className={Milans.className}>
					Enter livestream Id
				</h1>
			</div>}

			{id&&
			<iframe
				src={`https://lvpr.tv?v=${id}`}
				className='rounded-2xl h-[48vh]'
				width={'70%'}
				height={'90%'}
				allowFullScreen
				allow="autoplay; encrypted-media; picture-in-picture"
				sandbox="allow-scripts"
				/>}
				
			<input
				className='rounded-lg p-2 bg-[white] text-[black] mt-2'
				onChange={(e)=>setId(e.target.value)}
				placeholder='enter livestream id'
				value={id}
			/>
		</div>
	)
}

export default LiveStream