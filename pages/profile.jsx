import { useState, useEffect} from 'react'
import { useRouter } from "next/router"
import { useQuery } from '@apollo/client'
import Image from 'next/image'
import localFont from 'next/font/local'
import ProfileEvents from '@/components/ProfileEvents'
import ProfileEventsHosted from '@/components/ProfileEventsHosted'
const Milans = localFont({ src: '../styles/fonts/Milans/Milans.ttf' })
import GetUser from '@/apollo/User/getUser.graphql'
import nProgress from 'nprogress'
import LinkInput from '@/components/LinkInput'

function Profile() {
	const [profileData, setProfileData] = useState({})
	const [links,setLinks] = useState([])

	const router = useRouter()
	const id = router.query.id

	const { loading, error, data } = useQuery(GetUser,{
		variables:{
			where:{
				id
			}
		},
		fetchPolicy: 'no-cache'
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
		<main className='flex flex-col items-center justify-start bg-[#F6AC63] min-h-screen pt-[18%] p-5'>
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
				className="absolute top-0 border-2 border-[white] rounded-full w-[10%] z-20 mt-10"
				src={'https://xsgames.co/randomusers/assets/images/favicon.png'}
				width={500}
				height={500}
				alt={'Vantage'}
			/>

			<div className="text-[10vw] cursor-pointer z-0  h-[12rem] mt-2 absolute top-24 ">
				<h1 className={Milans.className}>{profileData?.username}</h1>
			</div>

			<div className="flex relative z-0">
					<LinkInput
						type={'twitter'}
						links={links}
						id={id}
						setLinks={setLinks}
					/>
					<LinkInput
						type={'insta'}
						links={links}
						id={id}
						setLinks={setLinks}
					/>
					<LinkInput
						type={'linkedin'}
						links={links}
						id={id}
						setLinks={setLinks}
					/>
					<LinkInput
						type={'telegram'}
						links={links}
						id={id}
						setLinks={setLinks}
					/>
			</div>

			<div className='grid grid-cols-4 gap-4 grid-flow-row-dense z-0  w-full'>
				{profileData?.AttendedEvents?.map((item,index)=>(
					<ProfileEvents
						key={index}
						title={item.title}
						id={item.id}
						description={item.details}
						links={item.links}
						bgColor={'#FDFFEA'}
						color={'#BE9F31'}
					/>
				))}
			</div>

			<div className='grid grid-cols-4 gap-4 grid-flow-row-dense z-0 mt-5 w-full'>
				{profileData?.OrganisedEvent?.map((item,index)=>(
					<ProfileEventsHosted
						key={index}
						title={item.title}
						id={item.id}
						description={item.details}
						links={item.links}
						bgColor={'#FDFFEA'}
						color={'#BE9F31'}
					/>
				))}
			</div>
		</main>
	)
}

export default Profile