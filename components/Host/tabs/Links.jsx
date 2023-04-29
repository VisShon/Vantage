import { useMutation } from "@apollo/client"
import nProgress from 'nprogress'
import { useState, useEffect } from 'react'
import AddLink from '@/apollo/Event/addLink.graphql'
import Link from 'next/link';

function Links({linksData,id}) {
    const [newLink,setNewLink] = useState('')
    const [isModalOpen,setIsModalOpen] = useState(false)
    const [addLink,{error,data,loading}] = useMutation(AddLink)
	
	const handleCreateSponsor = () =>{
		if(linksData==null){
			addLink({
				variables:{
					input: {
						where:{
							id
						},
						update: {
							links:[newLink]
						}
					}
				 }
			})
		}
		else{
			addLink({
				variables:{
					input: {
						where:{
							id
						},
						update: {
							links:[...linksData, newLink]
						}
					}
				 }
			})
		}  
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
				<h2 className="text-xl font-[500]">Add Link</h2>
				<div className="w-[55%] flex flex-col items-center justify-center relative">
					<input
						className=" relative z-10 bg-[#F5E0FF] p-3 rounded-lg my-2  glassNoBorder  text-[grey] placeholder:text-[grey] "
						value={newLink}
						placeholder="link"
						onChange={(e) => setNewLink(e.target.value)}>
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
					{linksData?.map((link,index)=>(
						<Link href={link}>
							{link}
						</Link>
					))}
				</div>
				<button 
					className='bg-[purple] rounded-xl p-3'
					onClick={()=>setIsModalOpen(p=>!p)}
				>
					Add Link
				</button>
			</div>
		</div>
  	)
}

export default Links