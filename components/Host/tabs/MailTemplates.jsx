import { useMutation } from "@apollo/client"
import nProgress from 'nprogress'
import { useState, useEffect } from 'react'
import AddMail from '@/apollo/Event/addMail.graphql'
import Image from 'next/image';
import Link from 'next/link';
import MailCard from "../utils/MailCard";

function MailTemplates({mails,id}) {

    const [message,setMessage] = useState('')
    const [subject,setSubject] = useState('')

    const [isModalOpen,setIsModalOpen] = useState(false)
    const [addMail,{error,loading,data}] = useMutation(AddMail);

    const handleCreateSponsor = () =>{
        addMail({
            variables:{
                input: [
                  {
                    message,
                    subject,
                    event: {
                      connect: {
                        where: {
                          node: {
                            id
                          }
                        }
                      }
                    }
                  }
                ]
              }
        })

        if(data)
            setIsModalOpen(false)
	}

    console.log(error,data)

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
    <div className="w-full h-full">
        {isModalOpen&&
        <div className='flex flex-col items-center gap-2 text-[white] bg-[purple] py-2'>
                <h2 className="text-xl font-[500]">Add Sponsor</h2>
                <div className="w-[55%] flex flex-col items-center justify-center relative">
                    <input
                        className=" relative z-10 bg-[#F5E0FF] p-3 rounded-lg my-2  glassNoBorder  text-[grey] placeholder:text-[grey] "
                        value={subject}
                        placeholder="subject"
                        onChange={(e) => setSubject(e.target.value)}>
                    </input>
                    <textarea
                        className=" relative z-10 bg-[#F5E0FF] p-3 rounded-lg my-2  glassNoBorder  text-[grey] placeholder:text-[grey] "
                        value={message}
                        placeholder="message"
                        onChange={(e) => setMessage(e.target.value)}>
                    </textarea>
                </div>
                <button 
                    className="bg-[orange] rounded-xl p-3" 
                    onClick={handleCreateSponsor}>
                        Continue
                </button>
        </div>}
        <div className="w-full h-full overflow-y-scroll">
            <div className='grid grid-cols-4 gap-4  z-0 bg-[white] text-[black] rounded-2xl p-5'>
                {mails?.map((mail,index)=>(
                    <MailCard
                        message={mail.message}
                        subject={mail.subject}
                    />        
                ))}
            </div>
            <button 
                className='bg-[purple] rounded-xl p-3'
                onClick={()=>setIsModalOpen(p=>!p)}
            >
                Add Mail
            </button>
        </div>
    </div>
  )
}

export default MailTemplates