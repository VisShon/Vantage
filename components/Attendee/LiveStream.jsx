import { useState } from 'react'
function LiveStream() {
	const [id,setId] = useState('')

	return (
		<div className='w-screen h-screen flex flex-col gap-10 justify-center items-center'>
			{<input
				className=''
				onChange={(e)=>setId(e.target.value)}
				value={id}
			/>}
			{id&&<iframe
				src={`/${id}`}
				width={'100%'}
				height={'100%'}
				allowFullScreen
				allow="autoplay; encrypted-media; picture-in-picture"
				sandbox="allow-scripts"
			/>}
		</div>
	)
}

export default LiveStream