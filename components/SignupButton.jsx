import { useEffect } from "react"
import { useRouter } from "next/router"

function SignupButton({username, email, password}) {
	const router = useRouter()

	const handleClick = async() => {
		const res = await fetch("/api/auth/signup", {
			method: "post",
			mode:'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username,
				email,
				password
			})
		})
		console.log(res)
		
		if(false) 
			router.push(`/Profile/${user.id}`)
	}
	
	// useEffect(()=>{
	// 	if(isLoggedIn) 
	// 		router.push(`/Profile/${user.id}`)
	// },[])

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