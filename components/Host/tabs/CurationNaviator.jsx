function CurationNaviator({selected,setSelected}) {
  return (
	<section className="rounded-r-lg h-full w-[20%] flex flex-col  gap-5 justify-center">
		<button
			className="rounded-xl p-5" 
			onClick={()=>setSelected('DETAILS')}
			style={selected=='DETAILS'?{backgroundColor:'#B773D7', color:'#FFFFFF'}:{backgroundColor:'#F5E0FF',color:'#B179CC'}}
		>
			Event Deatils
		</button>
		<button
			className="rounded-xl p-5" 
			onClick={()=>setSelected('SPONSORS')}
			style={selected=='SPONSORS'?{backgroundColor:'#B773D7', color:'#FFFFFF'}:{backgroundColor:'#F5E0FF',color:'#B179CC'}}
		>
			Sponsors
		</button>
		<button
			className="rounded-xl p-5" 
			onClick={()=>setSelected('MAILS')}
			style={selected=='MAILS'?{backgroundColor:'#B773D7', color:'#FFFFFF'}:{backgroundColor:'#F5E0FF',color:'#B179CC'}}
		>
			Mail Templates
		</button>
		<button
			className="rounded-xl p-5" 
			onClick={()=>setSelected('LINKS')}
			style={selected=='LINKS'?{backgroundColor:'#B773D7', color:'#FFFFFF'}:{backgroundColor:'#F5E0FF',color:'#B179CC'}}
		>
			Important Links
		</button>
	</section>
  )
}

export default CurationNaviator