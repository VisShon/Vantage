import Box from '@mui/material/Box'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { useMutation } from "@apollo/client"
import nProgress from 'nprogress'
import { useState, useEffect } from 'react'
import UpdateEvent from '@/apollo/Event/updateEvent.graphql'


function EventDetails({eventData,id}) {
    const [title,setTitle] = useState('')
	const [details,setDetails] = useState('')
	const [address,setAddress] = useState('')
	const [fromDate, setFromDate] = useState(new Date())
    const tommorow = new Date().setDate(fromDate.getDate()+1)
	const [toDate, setToDate] = useState(new Date(tommorow))

    const [updateEvent,{error,loading}] = useMutation(UpdateEvent);
    console.log(error)
	const handleEventUpdate = () =>{
        updateEvent({
            variables:{
                where: {
                  id
                },
                update: {
                  details,
                  title,
                  toDate,
                  fromDate,
                  address
                }
            }
        })
	}

    useEffect(()=>{
        setTitle(eventData?.title)
        setDetails(eventData?.details)
        setAddress(eventData?.address)
        setFromDate(new Date(eventData?.fromDate))
        setToDate(new Date(eventData?.toDate))
    },[eventData])

    useEffect(() => {
		if(loading){
			nProgress.start()
		}
		if(!loading){
			nProgress.done(false)
			if(error)
				alert(error)
		}
		if(error){
			nProgress.done(false)
		}

	},[loading])

    return (
        <div className='w-[70%] text-[#353535] h-full flex flex-col gap-5 justify-center items-center overflow-hidden select-none bg-[white] rounded-xl z-20 p-5'>
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
            <input
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                className="border-2 border-[#353535] rounded-xl relative z-10 text-xl p-2  w-[95%] "
                placeholder='Address'
            />

            <div className="flex w-full items-center justify-around">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Sart Date"
                        value={fromDate}
                        inputFormat="dd/MM/yyyy"
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
                onClick={handleEventUpdate}
            >
                Update Event
            </button>}

        </div>
    )
}

export default EventDetails