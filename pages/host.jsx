import Image from 'next/image';
import localFont from 'next/font/local'
const Milans = localFont({ src: '../styles/fonts/Milans/Milans.ttf' })
import { useMutation } from "@apollo/client"
import AddEvent from "../apollo/Event/addEvent.graphql"
import nProgress from 'nprogress'
import { useState, useEffect } from 'react'
import { decode } from 'jsonwebtoken';
import Box from '@mui/material/Box'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { useRouter } from 'next/router';


function host({id}) {
	const [title,setTitle] = useState('')
	const [details,setDetails] = useState('')
	const [fromDate, setFromDate] = useState(new Date())
	const tommorow = new Date().setDate(fromDate.getDate()+1)
	const [toDate, setToDate] = useState(new Date(tommorow))
	const router = useRouter()
	console.log(id)
	const [addEvent,{error,loading,data}] = useMutation(AddEvent);
	console.log(error,data)
	
	const handleEventCreation = () =>{
		addEvent({
			variables:{
				input: [
				  {
					toDate,
					fromDate,
					details,
					title,
					timestamp: new Date(),
					organisers: {
						connect: [
							{
								where: {
									node: {
										id
									}
								}
							}
						]
					}
				  }
				]
			  }
		})
	}

	useEffect(() => {
		if(loading){
			nProgress.start()
		}
		if(!loading){
			nProgress.done(false)
			if(data)
				router.push(`/event/${data.createEvents.events[0].id}`)
			if(error)
				alert(error)
		}
		
		if(error){
			nProgress.done(false)
		}
	},[loading])


	return (
		<main className="bg-[#9F36AE] h-screen flex flex-col p-5 items-center text-center justify-center gap-24  cursor-default select-none font-lexend relative z-10">

			<div className="text-[15vw] absolute -top-10 z-20 w-full text-center">
				<h1 className={Milans.className}>
					Host Event
				</h1>
			</div>

			<Image
				className="fixed w-[60%] top-0 z-0"
				src={"/HostOrb.svg"}
				width={100}
				height={100}
			/>

			<div className='w-[70%] text-[#353535] h-[65%] flex flex-col gap-5 justify-center items-center overflow-hidden select-none bg-[white] rounded-xl z-20 mt-20 p-5'>
				<input
					value={title}
					onChange={(e)=>setTitle(e.target.value)}
					className="border-2 border-[#353535] rounded-xl relative z-10 text-xl p-2  w-[95%] "
					placeholder='Title'
				/>
				<textarea
					value={details}
					onChange={(e)=>setDetails(e.target.value)}
					className="border-2 border-[#353535] rounded-xl relative z-10 text-md p-2  w-[95%] h-[75%] "
					placeholder='Details'
				/>

				<div className="flex w-full items-center justify-around">
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DatePicker
							label="Sart Date"
							value={fromDate}
							inputFormat="dd/MM/yyyy"
							minDate={new Date()}
							onChange={(newValue) => setFromDate(newValue)}
							renderInput={({ inputRef, inputProps, InputProps }) => (
								<Box
									sx={{
									alignItems: "center",
									display: "flex",
									width: "8rem",
									flexDirection: "column",
									}}
								>
									<input
									ref={inputRef}
									{...inputProps}
									placeholder="Start Date"
									/>
									{InputProps?.endAdornment}
								</Box>
							)}
						/>
					</LocalizationProvider>
				
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DatePicker
							views={["day", "month"]}
							label="End Date"
							value={toDate}
							inputFormat="dd/MM/yyyy"
							minDate={new Date().setDate(fromDate.getDate()+1)}
							onChange={(newValue) => setToDate(newValue)}
							renderInput={({ inputRef, inputProps, InputProps }) => (
								<Box
									sx={{
									alignItems: "center",
									display: "flex",
									width: "8rem",
									flexDirection: "column",
									}}
								>
									<input
									ref={inputRef}
									{...inputProps}
									placeholder="End Date"
									/>
									{InputProps?.endAdornment}
								</Box>
							)}
						/>
					</LocalizationProvider>
				</div>

				{!loading&&<button
					className='p-2 bg-[#91339E] text-[white] font-light font-lexend text-center rounded-lg w-[20%] hover:bg-[#6b2774] m-4'
					onClick={handleEventCreation}
				>
					Create Event
				</button>}

			</div>
		</main>
	)
}

export default host

export async function getServerSideProps({req,res}){
	const token = req.cookies.token
	return {
		props:{
			id:decode(token).id
		}
	}
}