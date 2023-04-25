import {useState, useEffect, createContext} from 'react'
export const AuthContext = createContext()

function AuthProvider({children}) {

	const getUserfromCookie = () =>{

	}

	const[isLoggedIn,setIsLoggedIn] = useState(false)
	const[session,setSession] = useState('')

	useEffect(()=>{

	},[])

	return (
		<AuthContext.Provider 
			value={{
				getUserfromCookie,
				isLoggedIn,
				session,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider