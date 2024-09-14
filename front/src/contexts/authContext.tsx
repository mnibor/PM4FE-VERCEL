'use client'
import { createContext, useEffect, useState } from 'react'
import { UserSession } from '@/interfaces/forms'

interface AuthProviderProps {
	children: React.ReactNode
}

interface AuthContextProps {
	user: UserSession | null
	setUser: (user: UserSession | null) => void
	logout: () => void
}

export const AuthContext = createContext<AuthContextProps>({
	user: null,
	setUser: () => {},
	logout: () => {},
})

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState<UserSession | null>(() => {
		if (typeof window !== 'undefined' && window.localStorage) {
			const storedUser = localStorage.getItem('user')
			return storedUser ? (JSON.parse(storedUser) as UserSession) : null
		}
		return null
	})

	useEffect(() => {
		if (typeof window !== 'undefined' && window.localStorage) {
			if (user) {
				localStorage.setItem('user', JSON.stringify(user))
			} else {
				localStorage.removeItem('user')
			}
		}
	}, [user])

	const logout = () => {
		setUser(null)
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				setUser,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
