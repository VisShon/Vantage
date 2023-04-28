import Image from 'next/image'

function Navigator({selected,setSelected}) {
	return (
		<div className='absolute bottom-[15%] w-[20vw] flex gap-3 p-3 justify-evenly items-center bg-[white] rounded-2xl '>
			<button
				className='rounded-full flex justify-center items-center h-[3rem] w-[3rem] p-3'
				style={selected!='ANNOUNCEMNT'?{backgroundColor:'#F5E0FF'}:{backgroundColor:'#9131BE'}}
				onClick={()=>setSelected('ANNOUNCEMNT')}
				>
				<Image
					src={selected=='ANNOUNCEMNT'?'/speaker_F5E0FF.svg':'/speaker_9131BE.svg'}
					width={40}
					height={40}
				/>
			</button>

			<button
				className='rounded-full flex justify-center items-center h-[3rem] w-[3rem] p-3'
				style={selected!='CURATION'?{backgroundColor:'#F5E0FF'}:{backgroundColor:'#9131BE'}}
				onClick={()=>setSelected('CURATION')}
				>
				<Image
					src={selected=='CURATION'?'/curation_F5E0FF.svg':'/curation_9131BE.svg'}
					width={40}
					height={40}
				/>
			</button>

			<button
				className='rounded-full flex justify-center items-center h-[3rem] w-[3rem] p-3'
				style={selected!='TEAM'?{backgroundColor:'#F5E0FF'}:{backgroundColor:'#9131BE'}}
				onClick={()=>setSelected('TEAM')}
				>
				<Image
					src={selected=='TEAM'?'/team_F5E0FF.svg':'/team_9131BE.svg'}
					width={40}
					height={40}
				/>
			</button>

			<button
				className='rounded-full flex justify-center items-center h-[3rem] w-[3rem] p-3'
				style={selected!='LIVESTREAM'?{backgroundColor:'#F5E0FF'}:{backgroundColor:'#9131BE'}}
				onClick={()=>setSelected('LIVESTREAM')}
				>
				<Image
					src={selected=='LIVESTREAM'?'/camera_F5E0FF.svg':'/camera_9131BE.svg'}
					width={40}
					height={40}
				/>
			</button>

			<button
				className='rounded-full flex justify-center items-center h-[3rem] w-[3rem] p-3'
				style={selected!='QRSCANNER'?{backgroundColor:'#F5E0FF'}:{backgroundColor:'#9131BE'}}
				onClick={()=>setSelected('QRSCANNER')}
				>
				<Image
					src={selected=='QRSCANNER'?'/scan_F5E0FF.svg':'/scan_9131BE.svg'}
					width={40}
					height={40}
				/>
			</button>
		</div>
	)
}

export default Navigator