import { useMutation } from "@apollo/client"
import nProgress from 'nprogress'
import { useState, useEffect } from 'react'
import AddSponsor from '@/apollo/Event/addSponsor.graphql'
import Image from 'next/image';
import Link from 'next/link';

function Sponsors({sponsors,id}) {
    const [imageURL,setImageURL] = useState('')
    const [email,setEmail] = useState('')
    const [link,setLink] = useState('')
    const [amount,setAmount] = useState('')

    const [isModalOpen,setIsModalOpen] = useState(false)
    const [addSponsor,{error,loading,data}] = useMutation(AddSponsor);

	const handleCreateSponsor = () =>{
        addSponsor({
            variables:{
                input: [
                  {
                    URL: link,
                    amount: parseFloat(amount),
                    email: email,
                    image: imageURL,
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
        <div className='relative w-full h-full'>
            {isModalOpen&&<div className='flex flex-col items-center gap-2 text-[white] bg-[purple] py-2'>
                <h2 className="text-xl font-[500]">Add Sponsor</h2>
                <div className="w-[55%] flex flex-col items-center justify-center relative">
                    <input
                        className=" relative z-10 bg-[#F5E0FF] p-3 rounded-lg my-2  glassNoBorder  text-[grey] placeholder:text-[grey] "
                        value={email}
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}>
                    </input>
                    <input
                        className=" relative z-10 bg-[#F5E0FF] p-3 rounded-lg my-2  glassNoBorder  text-[grey] placeholder:text-[grey] "
                        value={imageURL}
                        placeholder="image URL"
                        onChange={(e) => setImageURL(e.target.value)}>
                    </input>
                    <input
                        className=" relative z-10 bg-[#F5E0FF] p-3 rounded-lg my-2  glassNoBorder  text-[grey] placeholder:text-[grey] "
                        value={amount}
                        placeholder="$"
                        onChange={(e) => setAmount(e.target.value)}>
                    </input>
                    <input
                        className=" relative z-10 bg-[#F5E0FF] p-3 rounded-lg my-2  glassNoBorder  text-[grey] placeholder:text-[grey] "
                        value={link}
                        placeholder="link"
                        onChange={(e) => setLink(e.target.value)}>
                    </input>
                </div>
                <button 
                    className="bg-[orange] rounded-xl p-3" 
                    onClick={handleCreateSponsor}>
                        Continue
                </button>
            </div>}

            <div className="w-full h-full overflow-y-scroll">
                <div className='grid grid-cols-4 gap-4  z-0 bg-[white] text-[black] rounded-2xl p-5'>
                    {sponsors?.map((sponsor,index)=>(
                        <Link 
                            href={sponsor?.URL} 
                            className='flex flex-col items-center'>
                            <Image
                                className="w-fuill z-0"
                                alt="vantage"
                                key={index}
                                src={sponsor.image?sponsor.image:''}
                                width={500}
                                height={500}
                            />
                            <Link href={`mailto:${sponsor.email}`}>{sponsor.email}</Link>
                            <p>${sponsor.amount}</p>
                        </Link>
                        
                    ))}
                </div>
                <button 
                    className='bg-[purple] rounded-xl p-3'
                    onClick={()=>setIsModalOpen(p=>!p)}
                >
                    Add Sponsor
                </button>
            </div>
        </div>
    )
}

export default Sponsors