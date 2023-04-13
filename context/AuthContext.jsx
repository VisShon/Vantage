import {useState, useEffect, createContext} from 'react'

export const AuthContext = createContext()

function AuthProvider({children}) {

	const getSession = async(email, password) =>{

	}

	const addUser = async() =>{

	}

	const checkUser = async(email) =>{

	}

	const[user,setUser] = useState('')
	const[isLoggedIn,setIsLoggedIn] = useState(false)
	const[session,setSession] = useState('')

	useEffect(()=>{

	},[])

	return (
		<AuthContext.Provider 
			value={{
				getSession,
				addUser,
				checkUser,
				user,
				isLoggedIn,
				session,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider