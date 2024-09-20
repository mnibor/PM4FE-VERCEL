'use client'
import { AuthContext } from '@/contexts/authContext'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {
	FaList,
	FaEnvelope,
	FaHome,
	FaPhone,
	FaArrowLeft,
	FaUser,
	FaCalendarAlt,
} from 'react-icons/fa'
import PageHeader from '@/components/layout/PageHeader/PageHeader'

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
		<div className='container'>
			<PageHeader
				title='My Dashboard'
				buttonText='Products'
				buttonLink='/products'
				buttonIcon={FaArrowLeft}
			/>

			<div className='grid gap-8 md:grid-cols-3'>
				<div className='col-span-full md:col-span-1 rounded-lg bg-white shadow-lg overflow-hidden'>
					<div className='bg-secondary px-4 py-3'>
						<h2 className='text-xl font-semibold text-white'>
							Client Information
						</h2>
					</div>
					<div className='p-6 space-y-4'>
						<div className='flex items-center gap-3'>
							<FaUser className='text-2xl text-secondary' />
							<p className='text-xl font-bold'>{user.user.name}</p>
						</div>
						<div className='flex items-center gap-3'>
							<FaEnvelope className='text-xl text-secondary' />
							<p>{user.user.email}</p>
						</div>
						<div className='flex items-center gap-3'>
							<FaHome className='text-xl text-secondary' />
							<p>{user.user.address}</p>
						</div>
						<div className='flex items-center gap-3'>
							<FaPhone className='text-xl text-secondary' />
							<p>{user.user.phone}</p>
						</div>
					</div>
				</div>

				<div className='col-span-full md:col-span-2 rounded-lg bg-white shadow-lg overflow-hidden'>
					<div className='bg-secondary px-4 py-3'>
						<h2 className='text-xl font-semibold text-white'>My Orders</h2>
					</div>
					<div className='p-6'>
						{user.user.orders && user.user.orders.length > 0 ? (
							<ul className='divide-y divide-gray-200'>
								{user.user.orders.map((order) => (
									<li
										key={order.id}
										className='py-4 flex items-center justify-between'
									>
										<div className='flex items-center gap-3'>
											<FaList className='text-xl text-secondary' />
											<span className='font-medium'>Order N° {order.id}</span>
										</div>
										<div className='flex items-center gap-2'>
											<FaCalendarAlt className='text-secondary' />
											<span>{formatDate(order.date)}</span>
										</div>
									</li>
								))}
							</ul>
						) : (
							<p className='text-center text-gray-500'>No orders found</p>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default DashboardPage
