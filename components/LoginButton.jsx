import { useEffect } from "react"
import { useRouter } from "next/router"

function LoginButton({email, password}) {
	const router = useRouter()
	
	const handleClick = async() => {
		const res = await fetch("/api/auth/login", {
			method: "post",
			mode:'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				password
			})
		})
		if(false) 
			router.push(`/Profile/${user.id}`)
	}

	// useEffect(()=>{
	// 	if(true) 
	// 		router.push(`/Profile/${user.id}`)
	// },[])

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