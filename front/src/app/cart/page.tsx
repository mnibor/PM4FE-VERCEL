'use client'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '@/contexts/authContext'
import { IProduct } from '@/interfaces/product.interface'
import { FaTrashAlt, FaTimes, FaCheckCircle, FaArrowLeft } from 'react-icons/fa'
import Swal from 'sweetalert2'
import PageHeader from '@/components/layout/PageHeader/PageHeader'

const CartPage = () => {
	const { user } = useContext(AuthContext)
	const [cart, setCart] = useState<IProduct[]>([])

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const storedCart = localStorage.getItem('cart')
			setCart(storedCart ? JSON.parse(storedCart) : [])
		}
	}, [])

	const calculateTotal = () => {
		return cart.reduce(
			(total: number, product: IProduct) => total + product.price,
			0
		)
	}

	const clearCart = async () => {
		const result = await Swal.fire({
			title: 'Confirm Clear Cart',
			text: 'Are you sure you want to clear this cart?',
			icon: 'question',
			showCancelButton: true,
			confirmButtonText: 'Yes',
			cancelButtonText: 'No',
		})

		if (result.isConfirmed) {
			localStorage.setItem('cart', JSON.stringify([]))
			setCart([])
			window.dispatchEvent(new Event('storage'))
		}
	}

	const removeProductFromCart = async (productId: string) => {
		const result = await Swal.fire({
			title: 'Remove Product',
			text: `Are you sure you want to remove from your cart?`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes, remove it',
			cancelButtonText: 'No, keep it',
		})

		if (result.isConfirmed) {
			const productIdNumber = Number(productId)
			const updatedCart = cart.filter(
				(product: IProduct) => product.id !== productIdNumber
			)
			localStorage.setItem('cart', JSON.stringify(updatedCart))
			setCart(updatedCart)
			window.dispatchEvent(new Event('storage'))

			Swal.fire(
				'Removed!',
				`The product has been removed from your cart.`,
				'success'
			)
		}
	}

	const handleOrder = async () => {
		const result = await Swal.fire({
			title: 'Confirm Order',
			text: 'Are you sure you want to place this order?',
			icon: 'question',
			showCancelButton: true,
			confirmButtonText: 'Yes',
			cancelButtonText: 'No',
		})

		if (result.isConfirmed) {
			const url =
				process.env.NEXT_PUBLIC_API_URL + '/orders' ||
				'http://localhost:3000/orders'
			const req = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: user?.token as string,
				},
				body: JSON.stringify({
					userId: user?.user.userId,
					products: cart.map((product: IProduct) => product.id),
				}),
			}
			fetch(url, req)
				.then((res) => {
					if (!res.ok) {
						throw new Error('HTTP error!')
					}
					return res.json()
				})
				.then((newOrder) => {
					localStorage.setItem('cart', JSON.stringify([]))
					setCart([])

					const newOrderWithId = {
						id: newOrder.id,
						status: newOrder.status,
						date: newOrder.date,
					}

					const currentUser = JSON.parse(localStorage.getItem('user') || '{}')

					if (currentUser.user && currentUser.user.orders) {
						currentUser.user.orders.push(newOrderWithId)
						localStorage.setItem('user', JSON.stringify(currentUser))
					}

					Swal.fire({
						title: 'Success!',
						text: 'Your order has been placed',
						icon: 'success',
						confirmButtonText: 'OK',
					})
					window.dispatchEvent(new Event('storage'))
				})
				.catch((error) => console.error(error))
		}
	}

	return (
		<main className='container'>
			<PageHeader
				title='My Cart'
				buttonText='Products'
				buttonLink='/products'
				buttonIcon={FaArrowLeft}
			/>

			<div className='mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
				<h2 className='text-xl font-semibold'>Total Products: {cart.length}</h2>
				<h2 className='text-xl font-semibold'>
					Total: ${calculateTotal().toFixed(2)}
				</h2>
				{cart.length > 0 && (
					<div className='flex flex-col gap-2 sm:flex-row'>
						<button
							onClick={handleOrder}
							className='flex items-center justify-center gap-2 rounded-md bg-green-500 px-4 py-2 text-lg font-bold text-white transition hover:bg-green-600 hover:scale-105 active:scale-95'
						>
							<FaCheckCircle className='h-5 w-5' />
							Finish Order
						</button>
						<button
							onClick={clearCart}
							className='flex items-center justify-center gap-2 rounded-md bg-gray-500 px-4 py-2 text-lg font-bold text-white transition hover:bg-gray-600 hover:scale-105 active:scale-95'
						>
							<FaTimes className='h-5 w-5' />
							Clear Cart
						</button>
					</div>
				)}
			</div>

			<div className='space-y-4'>
				{cart.map((product: IProduct, i: number) => (
					<div
						key={product.id}
						className='flex flex-col items-start justify-between gap-2 rounded-lg bg-white p-4 shadow-md sm:flex-row sm:items-center'
					>
						<p className='text-lg'>{`${i + 1} - ${product.name} - (US $${
							product.price
						})`}</p>
						<button
							onClick={() => removeProductFromCart(String(product.id))}
							className='flex items-center justify-center gap-2 rounded-md bg-red-500 px-4 py-2 text-base font-bold text-white transition hover:bg-red-600 hover:scale-105 active:scale-95'
						>
							<FaTrashAlt className='h-4 w-4' />
							Remove
						</button>
					</div>
				))}
			</div>
		</main>
	)
}

export default CartPage
