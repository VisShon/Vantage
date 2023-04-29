import { QrReader } from 'react-qr-reader'
import { useState, useEffect } from "react"
import { useQuery } from "@apollo/client"
import GetEventHost from '@/apollo/Event/getEventHost.graphql'
import Image from 'next/image';

function QrScanner({id}) {
	const [scannedId, setScanned] = useState('No result');
	const [verification,setVerification] = useState(false)
	const ViewFinder = () => (
		<Image
			className='absolute z-30 top-[30%] left-[25%] opacity-70'
			src={'/viewfinder.svg'}
			width={300}
			height={300}
		/>
	)
	const [attendees,setAttendees] = useState([])
	const {data,error,loading} = useQuery(GetEventHost,{
		variables:{
			where:{
				id:id
			}
		}
	})
	useEffect(() => {
		if(!loading){
			if(error)
				alert(error)
			setAttendees(data?.events[0].attendees)
		}
	},[loading])


	useEffect(() => {
		const attendeeisUser = attendees?.filter(item=>item.id==scannedId) || []
		console.log(attendeeisUser)
		setVerification(attendeeisUser.length!=0)
		setTimeout(()=>{setVerification(false);setScanned('')},1000)
	},[attendees,scannedId])

	return (
		<div className='flex flex-col justify-center items-center w-full h-full'>
			<div className='w-[40%] mt-20'>
				<QrReader
					onResult={(result, error) => {
						if (!!result){
							console.log(result?.text);
							setScanned(result?.text)
						}
						if (!!error)
							console.info(error);
					}}
					ViewFinder={ViewFinder}
				/>
			
			</div>
			{verification&&<h2 className='z-20 absolute'>Attendee Verified 😊</h2>}
		</div>
	)
}

export default QrScanner