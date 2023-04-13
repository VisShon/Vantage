
import Image from "next/image"
import Link from "next/link"
import localFont from 'next/font/local'
import { useRouter } from "next/router";
const Milans = localFont({ src: '../styles/fonts/Milans/Milans.ttf' })


function InfoCard() {

	const {fromDate, toDate, links, address, attendees} = {
		title:'Front end and Web Design',
		fromDate:new Date('2023-04-13T14:11:33.609Z'),
		toDate:new Date('2023-04-13T14:11:33.609Z'),
		links:{
			twitter:'',
			website:''
		},
		attendees:220,
		address:'53, Haji Mahal, Mohd.ali Rd, Mandvi',
		description:'New innovations and ideas in design new innovations and ideas in design.',
	}

	const handleRegister = async() =>{

	}

	return (
		<div className="sticky top-10 justify-self-center bg-[white] p-5 rounded-xl text-[#898989] text-left flex flex-col items-center gap-2 hover:shadow-md">

			<div className="text-[2vw] z-20 self-start ">
				<h2 className="text-[#316ABE] font-medium">
					from.
				</h2>
				<p className={Milans.className}>
					{fromDate.toISOString()}
				</p>
			</div>

			<div className="text-[2vw] z-20 self-start font-medium">
				<h2 className="text-[#316ABE]">
					to.
				</h2>
				<p className={Milans.className}>
					{toDate.toISOString()}
				</p>
			</div>

			<div className="flex w-full justify-start">
				{Object.keys(links)
				.map((item,index)=>(
					<Link 
						key={index}
						className='p-2 mr-2 bg-[#EAFBFF] rounded-full flex justify-center items-center hover:shadow-md active:opacity-90 select-none'
						href={links[item]}
					>
							
						<Image
							className="w-[1.5rem] p-1"
							src={`/${item}_316ABE.svg`}
							width={50}
							height={50}
						/>
					</Link>
				))}
				<div className='p-2 mr-2 text-3xl h-10 rounded-full text-[#316ABE] flex justify-center items-center hover:shadow-md active:opacity-90 select-none bg-[#EAFBFF] '>
					<h2 className={Milans.className}>
						{attendees>100?
						(attendees-attendees%100):
						attendees}+
					</h2>
				</div>
			</div>

			<iframe
                  width="450"
                  height="140"
				  className="w-full rounded-xl"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAGvy5rBo-MPjD0vR2BkkRhtKAXmFHCLVY&q=${encodeURIComponent(
                    address
                  )}`}
                  allowFullScreen
			></iframe>

			<button
				className='p-4 bg-[#316ABE] font-light font-lexend text-center rounded-lg w-full hover:bg-[#2a5ba5] m-4 text-[white]'
				onClick={handleRegister}
			>
				register
			</button>
		</div>
	)
}

export default InfoCard