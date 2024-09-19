'use client'

import { AuthContext } from '@/contexts/authContext'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FaList, FaEnvelope, FaHome, FaPhone } from 'react-icons/fa'
import LinkPersonalized from '@/components/ui/LinkPersonalized/LinkPersonalized'

const DashboardPage = () => {
	const router = useRouter()
	const { user, setUser } = useContext(AuthContext)

	useEffect(() => {
		try {
			const storedUser = JSON.parse(localStorage.getItem('user') || '{}')
			setUser(storedUser)
		} catch (error) {
			console.error(error)
		}
	}, [setUser])

	useEffect(() => {
		if (!user || !user.login) {
			router.push('/login')
		}
	}, [user, router])

	const formatDate = (dateString: string) => {
		const date = new Date(dateString)
		return new Intl.DateTimeFormat('es', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
		}).format(date)
	}

	if (!user || !user.login) {
		return null
	}

	return (
		<div className='container mx-auto'>
			<div className='flex justify-between items-center bg-gradient-to-r from-green-400 to-yellow-400 py-5 px-5  shadow-md rounded-md mb-6'>
				<h3 className='text-gray-900 font-bold text-2xl'>My Dashboard</h3>
				<LinkPersonalized
					href='/products'
					className='bg-secondary text-center font-bold text-white transition hover:bg-blue-700 sm:text-xl md:text-base lg:text-lg'
					size='sm'
				>
					Products
				</LinkPersonalized>
			</div>
			<div className='flex flex-col md:flex-row gap-6'>
				<div className='w-full md:w-1/4  bg-yellow-400 shadow-md rounded-lg overflow-hidden'>
					<div className='bg-secondary px-4 py-2'>
						<h4 className='font-semibold text-gray-200 text-lg'>
							Client Information
						</h4>
					</div>
					<div className='p-4'>
						<p className='font-bold text-xl'>{user.user.name}</p>
						<p className='flex items-center'>
							<span className='mr-2'>
								<FaEnvelope />
							</span>{' '}
							{user.user.email}
						</p>
						<p className='flex items-center'>
							<span className='mr-2'>
								<FaHome />
							</span>{' '}
							{user.user.address}
						</p>
						<p className='flex items-center'>
							<span className='mr-2'>
								<FaPhone />
							</span>{' '}
							{user.user.phone}
						</p>
					</div>
				</div>
				<div className='w-full md:w-3/4 bg-yellow-400 shadow-md rounded-lg overflow-hidden'>
					<div className='bg-secondary px-4 py-2'>
						<h4 className='font-semibold text-gray-200 text-lg'>My Orders</h4>
					</div>
					<div className='p-4'>
						<ul className='space-y-2'>
							{user.user.orders?.map((order) => (
								<li
									key={order.id}
									className='flex justify-between items-center border-b pb-2'
								>
									<span className='flex items-center'>
										<span>
											<FaList className='mr-2' />
										</span>
										Order N° {order.id}
									</span>
									<span>{formatDate(order.date)}</span>
								</li>
							)) ?? <li>No orders found</li>}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DashboardPage
