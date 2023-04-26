import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {

	const router = useRouter()
	const [route,setRoute] = useState(router.asPath)

	useEffect(() => {
		setRoute(router.asPath)
	  }, [router.asPath]);

	return (
		<div 
			className='w-full justify-center relative'
			style={route=='/'?
                    {display:'none'}:
                    {display:'flex'}}
			>
			<nav 
                className="flex w-[50%] p-2 rounded-2xl items-center justify-between fixed bottom-10  font-[400] text-[#6f1f6b] px-10  z-50 overflow-x-hidden"
                style={route.includes('/profile')?
                    {backgroundColor:'#F57B42'}:
                    {backgroundColor:'white'}}
                >
				<Link 
					href={'/'} 
					className="flex flex-col">
                    <Image
                        src={'/logo.svg'}
                        width={40}
                        height={40}
                        alt={'Vantage'}
                    />
				</Link>


				<div className=" flex gap-10">
					<Link className="hover:text-[#4c1549] hover:font-[400]" href={'/explore'}>Explore</Link>
					<Link className="hover:text-[#4c1549] hover:font-[400]" href={'/Host'}>Host</Link>
					<Link className="hover:text-[#4c1549] hover:font-[400]" href={'/attend'}>Attend</Link>
				</div>


				<Link href={'/profile'} className=" flex flex-col relative">
                    <Image 
                        className='rounded-full'
                        src={'/profile.svg'} 
                        width={30} 
                        height={30} 
                        alt={'Vantage'} 
                    />
				</Link>
			</nav>
		</div>
	)
}

export default Navbar
