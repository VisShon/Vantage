import Image from 'next/image'

function Navigator({selected,setSelected}) {
	return (
		<div className='absolute bottom-[15%] w-[20vw] flex gap-3 p-3 justify-evenly items-center bg-[white] rounded-2xl '>
			<button
				className='rounded-full flex justify-center items-center h-[3rem] w-[3rem] p-3'
				style={selected!='ANNOUNCEMNT'?{backgroundColor:'#EAFFF7'}:{backgroundColor:'#31BEB6'}}
				onClick={()=>setSelected('ANNOUNCEMNT')}
				>
				<Image
					src={selected=='ANNOUNCEMNT'?'/speaker_EAFFF7.svg':'/speaker_31BEB6.svg'}
					width={40}
					height={40}
				/>
			</button>

			<button
				className='rounded-full flex justify-center items-center h-[3rem] w-[3rem] p-3'
				style={selected!='TICKET'?{backgroundColor:'#EAFFF7'}:{backgroundColor:'#31BEB6'}}
				onClick={()=>setSelected('TICKET')}
				>
				<Image
					src={selected=='TICKET'?'/ticket_EAFFF7.svg':'/ticket_31BEB6.svg'}
					width={40}
					height={40}
				/>
			</button>

			<button
				className='rounded-full flex justify-center items-center h-[3rem] w-[3rem] p-3'
				style={selected!='ATTENDEE'?{backgroundColor:'#EAFFF7'}:{backgroundColor:'#31BEB6'}}
				onClick={()=>setSelected('ATTENDEE')}
				>
				<Image
					src={selected=='ATTENDEE'?'/attendee_EAFFF7.svg':'/attendee_31BEB6.svg'}
					width={40}
					height={40}
				/>
			</button>

			<button
				className='rounded-full flex justify-center items-center h-[3rem] w-[3rem] p-3'
				style={selected!='LIVESTREAM'?{backgroundColor:'#EAFFF7'}:{backgroundColor:'#31BEB6'}}
				onClick={()=>setSelected('LIVESTREAM')}
				>
				<Image
					src={selected=='LIVESTREAM'?'/camera_EAFFF7.svg':'/camera_31BEB6.svg'}
					width={40}
					height={40}
				/>
			</button>

			{/* <button
				className='rounded-full flex justify-center items-center h-[3rem] w-[3rem] p-3'
				style={selected!='MESSAGE'?{backgroundColor:'#EAFFF7'}:{backgroundColor:'#31BEB6'}}
				onClick={()=>setSelected('MESSAGE')}
				>
				<Image
					src={selected=='MESSAGE'?'/send_EAFFF7.svg':'/send_31BEB6.svg'}
					width={40}
					height={40}
				/>
			</button> */}
		</div>
	)
}

export default Navigator