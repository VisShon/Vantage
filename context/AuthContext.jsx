import {useState, useEffect, createContext} from 'react'

export const AuthContext = createContext()

function AuthProvider({children}) {

	const getSession = async(email, password) =>{

	}

	const signUp = async(email,username,password) =>{

	}

	const logIn = async(email,password) =>{

	}

	const[isLoggedIn,setIsLoggedIn] = useState(false)
	const[session,setSession] = useState('')

	useEffect(()=>{

	},[])

	return (
		<AuthContext.Provider 
			value={{
				signUp,
				logIn,
				isLoggedIn,
				session,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider