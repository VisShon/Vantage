import Image from "next/image"
import Modal from "react-modal"
import { useEffect, useState } from "react"
import { useMutation } from "@apollo/client"
import AddUseLink from "../apollo/User/addUserLink.graphql"
import nProgress from 'nprogress'

function LinkInput({links=[], setLinks, type, id}) {

	const [isModalOpen, setIsModalOpen] = useState(false)
	const [value,setValue] = useState('')
	
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


	const [addUserLink,{error,loading}] = useMutation(AddUseLink);

	useEffect(()=>{
		setValue(links?.filter(item=>item.includes(type))[0])
	},[links])
	
	useEffect(() => {
		if(loading){
			nProgress.start()
		}
		if(!loading){
			nProgress.done(false)
		}
		
		if(error){
			nProgress.done(false)
		}
	},[loading])
	
	
	const updateUser = () => {
		setLinks([...links, value])
		addUserLink({
			variables:{
				where: {
				  id
				},
				update: {
				  links:[...links, value]
				}
			}
		})
		if(!loading)
			setIsModalOpen(false)
		if(error)
			alert(error)
	}

	return (
		<>
            <button 
                className=' p-4 m-2 rounded-xl flex justify-center items-center hover:shadow-md active:opacity-90 select-none'
                style={value?
					{backgroundColor:style[type].bgColor}:
					{backgroundColor:'#FFFFFF'}}
                onClick={()=>setIsModalOpen(true)}
            >
                <Image
                    src={value?
						`/${type}_${style[type].color.replace(/#/g, "")}.svg`:
						`/${type}_CDCDCD.svg`}
                    width={50}
                    height={50}
					alt={'Vantage'}
                />
            </button>


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
						onChange={(e) => setValue(e.target.value)}>
					</input>
				</div>
				<button 
					className="bg-accent rounded-xl p-3" 
					onClick={updateUser}>
						Continue
				</button>
			</Modal>
		
		</>
	)
}

export default LinkInput

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