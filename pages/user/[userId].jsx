import { useState, useEffect} from 'react'
import { useRouter } from "next/router"
import { useQuery } from '@apollo/client'
import Image from 'next/image'
import localFont from 'next/font/local'
import ProfileEvents from '@/components/ProfileEvents'
const Milans = localFont({ src: '../../styles/fonts/Milans/Milans.ttf' })
import GetUser from '@/apollo/User/getUser.graphql'
import nProgress from 'nprogress'
import LinkTab from '@/components/LinkTab'

function User() {
	const [profileData, setProfileData] = useState({})
	const [links,setLinks] = useState([])

	const router = useRouter()
	const id = router.query.userId

	const { loading, error, data } = useQuery(GetUser,{
		variables:{
			where:{
				id
			}
		}
	})
	useEffect(() => {
		if(loading){
			nProgress.start()
		}
		if(!loading){
			nProgress.done(false)
			setProfileData(data?.users[0])
			const userLinks = data?.users[0].links
			setLinks(userLinks)
		}

		if(error){
			nProgress.done(false)
		}
	},[loading])

	return (
		<main className='flex flex-col items-center justify-center bg-[#F6AC63] min-h-screen'>
			<Image
				className="absolute -top-20 left-[28%] w-[19%] z-0"
				src={"/OrbBlue.svg"}
				width={50}
				height={50}
				alt={'Vantage'}
			/>
			<Image
				className="absolute w-[29%] z-0 -top-24"
				src={"/OrbYellow.svg"}
				width={50}
				height={50}
				alt={'Vantage'}
			/>
			<Image
				className="absolute right-[30%] w-[19%] z-0 -top-24"
				src={"/OrbBlue.svg"}
				width={50}
				height={50}
				alt={'Vantage'}
			/>
			
			<Image
				className="absolute top-10 border-2 border-[white] rounded-full w-[10%] z-20 mt-10"
				src={'https://xsgames.co/randomusers/assets/images/favicon.png'}
				width={500}
				height={500}
				alt={'Vantage'}
			/>

			<div className="text-[10vw] cursor-pointer z-0  h-[12rem] mt-10 absolute top-28 ">
				<h1 className={Milans.className}>{profileData?.username}</h1>
			</div>

			<div className="flex pt-[2%] relative z-0 mb-20">
				{links?.map((link,index)=>{
					<LinkTab
						link={link}
						key={index}
					/>
				})}
			</div>

			<div className='grid grid-cols-4 gap-4 grid-flow-row-dense z-0'>
				{profileData?.AttendedEvents?.map((item,index)=>(
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

			<div className='grid grid-cols-4 gap-4 grid-flow-row-dense z-0'>
				{profileData?.OrganisedEvent?.map((item,index)=>(
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

export default User