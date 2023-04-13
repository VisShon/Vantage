import { useContext, useEffect } from "react"
import { AuthContext } from "@/context/AuthContext"
import { useRouter } from "next/router"

function LoginButton({email, password}) {
	const {
		user, 
		isLoggedIn, 
		getSession
	} = useContext(AuthContext)
	const router = useRouter()
	
	const handleClick = async() => {
		await getSession(email,password)
		if(isLoggedIn) 
			router.push(`/Profile/${user.id}`)
	}

	useEffect(()=>{
		if(isLoggedIn) 
			router.push(`/Profile/${user.id}`)
	},[])

	return (
		<button
			className='p-2 bg-[#F57B42] font-light font-lexend text-center rounded-lg w-[30%] hover:bg-[#E5733E] m-4'
			onClick={handleClick}
		>
			Login
		</button>
	)
}

export default LoginButton