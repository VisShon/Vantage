import {useState} from 'react'
import Image from 'next/image'
import MessageCard from './utils/MessageCard'

function Messaging() {
	const [message,setMessage] = useState('')
	const messageData = Array(20).fill({
		timeStamp: new Date('2023-04-13T14:11:33.609Z'),
		data: 'New innovations and ideas in design new innovations and ideas in design.'
	})
	return (
		<div className='w-full h-[90vh] pt-[10%] flex justify-center items-center'>
			<section className='relative w-[50%] h-[60%] p-5 bg-[white] rounded-xl text-[#898989] overflow-y-scroll flex flex-col gap-12'>
				{messageData.map((message,index) =>(
					<MessageCard
						date={message.timeStamp}
						message={message.data}
					/>
				))}
			</section>

			<section className='relative w-[20%] h-[60%] p-2 bg-[white] rounded-xl text-[#898989] mx-10'>
				<textarea
					value={message}
					onChange={(e)=>setMessage(e.target.value)}
					placeholder='Message Here'
					className='w-full h-full rounded-xl border-2 border-[#b7b7b7] p-2'
				/>
				<button
					className='absolute bottom-5 right-5 hover:opacity-50 z-10'
					onClick={''}>
					<Image 
						src={'/Ok.svg'} 
						width={30} 
						height={30} 
					/>
				</button>
			</section>
		</div>
	)
}

export default Messaging