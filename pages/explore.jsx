import { useState } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image';
import localFont from 'next/font/local'
import SearchBar from '@/components/SearchBar';
import EventCard from '@/components/EventCard';
const Milans = localFont({ src: '../styles/fonts/Milans/Milans.ttf' })


const data = Array(20).fill({
	title:'Front end and Web Design',
	fromDate:new Date('2023-04-13T14:11:33.609Z'),
	toDate:new Date('2023-04-13T14:11:33.609Z'),
	links:{
		twitter:'',
		website:''
	},
	attendes:220,
	address:'',
	description:'New innovations and ideas in design new innovations and ideas in design.',
})

function Explore({}) {

	const [events,setEvents] = useState(data)
	const [searchParam, setSearchParam] = useState('')

	return (
		<main className="bg-[#E95053] flex flex-col p-5 items-center text-center justify-center gap-24  cursor-default select-none font-lexend relative z-10 overflow-y-hidden">
			<Image
				className="fixed w-[60%] top-0 z-0"
				src={"/Roses.svg"}
				width={100}
				height={100}
			/>
			<div className="text-[15vw] absolute h-[10%] -top-10">
					<h1 className={Milans.className}>Explore</h1>
			</div>
			<div className='fixed top-0 w-full flex flex-col items-center justify-end h-[31%] z-10'>
				<SearchBar
					searchParam={searchParam}
					setSearchParam={setSearchParam}
				/>
			</div>

			<div className='grid grid-cols-4 gap-4 grid-flow-row-dense pt-[20%] z-0'>
				{events.map((item,index)=>(
					<EventCard
						key={index}
						title={item.title}
						description={item.description}
						links={item.links}
						date={item.fromDate}
						bgColor={'#FFEAEA'}
						color={'#BE3131'}
					/>
				))}
			</div>
		</main>
  	)
}

export default Explore

export async function getServerSideProps(context) {

	return {
		props: {}, // will be passed to the page component as props
	}
}