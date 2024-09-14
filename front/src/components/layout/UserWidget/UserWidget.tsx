'use client'
import Link from 'next/link'
import {
	FaShoppingBag,
	FaSignOutAlt,
	FaSignInAlt,
	FaUser,
	FaPencilAlt,
} from 'react-icons/fa'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '@/contexts/authContext'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'

const UserWidget = () => {
	const router = useRouter()
	const { user, logout } = useContext(AuthContext)
	const [cartCount, setCartCount] = useState(0)

	useEffect(() => {
		const updateCartCount = () => {
			const cart = JSON.parse(localStorage.getItem('cart') || '[]')
			setCartCount(cart.length)
		}

		updateCartCount()
		window.addEventListener('storage', updateCartCount)

		return () => {
			window.removeEventListener('storage', updateCartCount)
		}
	}, [])

	const handleLogout = async () => {
		const result = await Swal.fire({
			title: 'Are you sure?',
			text: 'Do you want to end the session?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, log out',
			cancelButtonText: 'Cancel',
		})

		if (result.isConfirmed) {
			await logout()
			router.push('/')
		}
	}

	if (user?.login) {
		return (
			<div className='flex gap-3'>
				<Link
					className='flex items-center border-b-4 border-transparent text-lg transition-all duration-300 ease-in-out hover:border-secondary hover:font-bold hover:text-error'
					href='/cart'
				>
					<div className='relative'>
						<FaShoppingBag className='mr-1' />
						{cartCount > 0 && (
							<span className='absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white'>
								{cartCount}
							</span>
						)}
					</div>
				</Link>
				<Link
					className=' flex items-center border-b-4 border-transparent text-lg transition-all duration-300 ease-in-out hover:border-secondary hover:font-bold hover:text-error'
					href='/dashboard'
				>
					<FaUser className='mr-1' />{' '}
					<span className='hidden md:text-base md:block'>
						{user?.user.name}
					</span>
				</Link>
				<button
					className='flex items-center border-b-4 border-transparent text-lg transition-all duration-300 ease-in-out hover:border-secondary hover:font-bold hover:text-error'
					onClick={handleLogout}
				>
					<FaSignOutAlt className='mr-1' />{' '}
					<span className='hidden md:text-base md:block'>Logout</span>
				</button>
			</div>
		)
	} else {
		return (
			<>
				<Link
					className=' flex items-center border-b-4 border-transparent text-lg transition-all duration-300 ease-in-out hover:border-secondary hover:font-bold hover:text-error'
					href='/login'
				>
					<FaSignInAlt className='mr-1' />
					<span className='hidden md:text-base md:block'>Login</span>
				</Link>
				<Link
					className=' flex items-center border-b-4 border-transparent text-lg transition-all duration-300 ease-in-out hover:border-secondary hover:font-bold hover:text-error'
					href='/register'
				>
					<FaPencilAlt className='mr-1' />{' '}
					<span className='hidden md:text-base md:block'>Sign Up</span>
				</Link>
			</>
		)
	}
}

export default UserWidget
