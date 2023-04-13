import { useContext, useEffect } from "react"
import { AuthContext } from "@/context/AuthContext"
import { useRouter } from "next/router"

function SignupButton({email, password, links}) {
	const {
		user, 
		isLoggedIn, 
		addUser
	} = useContext(AuthContext)
	const router = useRouter()

	const handleClick = async() => {
		await addUser(email,password,links)
		if(isLoggedIn) 
			router.push(`/Profile/${user.id}`)
	}
	
	useEffect(()=>{
		if(isLoggedIn) 
			router.push(`/Profile/${user.id}`)
	},[])

	return (
		<button
			className='p-2 bg-[#F57B42] font-light font-lexend text-center rounded-lg w-[50%] hover:bg-[#E5733E] m-4'
			onClick={handleClick}
		>
			Sign Up
		</button>
	)
}

export default SignupButton