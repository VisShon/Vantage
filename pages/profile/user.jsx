import { useState, useContext, useEffect} from 'react';
import { useRouter } from "next/router";
import Image from 'next/image';
import localFont from 'next/font/local'
import LinkTab from '@/components/LinkTab';
import ProfileEvents from '@/components/ProfileEvents';
import { AuthContext } from '@/context/AuthContext';
const Milans = localFont({ src: '../../styles/fonts/Milans/Milans.ttf' })

const data = {
	name:'Vishnu',
	image:'https://xsgames.co/randomusers/assets/images/favicon.png',
	events:Array(10).fill({
		event:{
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
		},
		position:'organiser'
	}),
	links:{
		twitter:'twitter',
		insta:'insta',
		linkedin:'linkedin',
		telegram:'telegram',
	},
}

function Profile(props) {
	const {image,name,events,links} = data
	return (
		<main className='flex flex-col items-center justify-center bg-[#F6AC63]'>
			<Image
				className="absolute -top-20 left-[28%] w-[19%] z-0"
				src={"/OrbBlue.svg"}
				width={50}
				height={50}
			/>
			<Image
				className="absolute w-[29%] z-0 -top-24"
				src={"/OrbYellow.svg"}
				width={50}
				height={50}
			/>
			<Image
				className="absolute right-[30%] w-[19%] z-0 -top-24"
				src={"/OrbBlue.svg"}
				width={50}
				height={50}
			/>
			
			<Image
				className="relative border-2 border-[white] rounded-full w-[10%] h-[10%] z-20 mt-10"
				src={image}
				width={500}
				height={500}
			/>

			<div className="text-[10vw] cursor-pointer z-10  h-[12rem] -mt-10">
				<h1 className={Milans.className}>{name}</h1>
			</div>

			<div className="flex pt-[2%] relative z-20 mb-20">
				<LinkTab
					type='twitter'
					color="c"
					bgColor="#F6E3FF"
					link={links['twitter']}
				/>
				<LinkTab
					type='insta'
					color="#EA4235"
					bgColor="#FFD4D0"
					link={links['insta']}
				/>
				<LinkTab
					type='linkedin'
					color="#109D58"
					bgColor="#D7FFEB"
					link={links['linkedin']}
				/>
				<LinkTab
					type='telegram'
					color="#4286F5"
					bgColor="#D4E4FE"
					link={links['telegram']}
				/>
			</div>

			<div className='grid grid-cols-4 gap-4 grid-flow-row-dense z-0'>
				{events.map((item,index)=>(
					<ProfileEvents
						key={index}
						title={item.event.title}
						description={item.event.description}
						links={item.event.links}
						position={item.position}
						bgColor={'#FDFFEA'}
						color={'#BE9F31'}
					/>
				))}
			</div>
		</main>
	)
}

export default Profile

export async function getServerSideProps(context) {

	//get user profile data
	return {
		props: {},
	}
}