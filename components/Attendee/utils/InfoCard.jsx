
import Image from "next/image"
import Link from "next/link"
import localFont from 'next/font/local'
import { useRouter } from "next/router";
const Milans = localFont({ src: '../../../styles/fonts/Milans/Milans.ttf' })


function InfoCard({fromDate, toDate, links, address, attendees}) {
	
	return (
		<div className="sticky top-10 justify-self-center bg-[white] p-5 rounded-xl text-[#898989] text-left flex flex-col items-center gap-2 hover:shadow-md">

			<div className="text-[2vw] z-20 self-start ">
				<h2 className="text-[#31BEB6] font-medium">
					from.
				</h2>
				<p className={Milans.className}>
					{fromDate.toISOString()}
				</p>
			</div>

			<div className="text-[2vw] z-20 self-start font-medium">
				<h2 className="text-[#31BEB6]">
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
						className='p-2 mr-2 bg-[#EAFFF7] rounded-full flex justify-center items-center hover:shadow-md active:opacity-90 select-none'
						href={links[item]}
					>
							
						<Image
							className="w-[1.5rem] p-1"
							src={`/${item}_31BEB6.svg`}
							width={50}
							height={50}
						/>
					</Link>
				))}
				<div className='p-2 mr-2 text-3xl h-10 rounded-full text-[#31BEB6] flex justify-center items-center hover:shadow-md active:opacity-90 select-none bg-[#EAFBFF] '>
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

			<Link
				className='p-4 bg-[#31BEB6] font-light font-lexend text-center rounded-lg w-full hover:bg-[#299b95] m-4 text-[white]'
				href={''}
			>
				Info
			</Link>
		</div>
	)
}

export default InfoCard