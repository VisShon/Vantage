import Image from "next/image"
import Link from "next/link"
import Modal from "react-modal"
import { useEffect, useState } from "react"

function LinkTab({type='twitter', color="#BE9F31", bgColor ,link , links, setLinks}) {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [value,setValue] = useState('')

	const customStyles = {
		overlay: {
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: '#5757573b',
			backdropFilter: 'blur(8.4px)',
		},
		content: {
		  top: '55%',
		  left: '50%',
		  right: 'auto',
		  bottom: 'auto',
		  width:'30%',
		  display:'flex',
		  flexDirection:'column',
		  gap:'10px',
		  alignItems: 'center',
		  marginRight: '-50%',
		  transform: 'translate(-50%, -50%)',
		  backgroundColor:'#565656bc',
		  borderRadius:'1.5rem',
		  textAlign: 'center',
		  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
		},
	}

	useEffect(()=>{
		setIsModalOpen(false)
		console.log(links)
	},[links])

	return (
		<>
			{link||links.map(item=>item.name).includes(type)?
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
					onClick={()=>setIsModalOpen(true)}
				>
					<Image
						src={`/${type}_CDCDCD.svg`}
						width={50}
						height={50}
					/>
				</button>
			}


			<Modal
				isOpen={isModalOpen}
				style={customStyles}
				onRequestClose={()=>setIsModalOpen(false)}
				ariaHideApp={false}
				contentLabel="Stream"
			>
				<h2 className="text-xl font-[500]">Add link your {type} link</h2>
				<div className="w-[55%] flex flex-col items-center justify-center relative">
					<input
						className=" relative z-10  italic  bg-[#cccccc57] p-3 rounded-full  glassNoBorder  text-[#e8e8e8c3] placeholder:text-[#dededeb3] "
						value={value}
						placeholder="link"
						onChange={(e) =>setValue(e.target.value)}>
					</input>
				</div>
				<button 
					className="bg-accent rounded-xl p-3" 
					onClick={()=>setLinks([...links,{name:type,URL:value}])}>
						Continue
				</button>
			</Modal>
		
		</>
	)
}

export default LinkTab