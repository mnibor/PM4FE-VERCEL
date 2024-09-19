'use client'
import Button from '@/components/ui/Button/Button'
import LinkPersonalized from '@/components/ui/LinkPersonalized/LinkPersonalized'
import { AuthContext } from '@/contexts/authContext'
import { IProduct } from '@/interfaces/product.interface'
import { useContext, useState, useEffect } from 'react'
import { FaTrashAlt, FaTimes, FaCheckCircle } from 'react-icons/fa'
import Swal from 'sweetalert2'

const CartPage = () => {
	const { user } = useContext(AuthContext)
	const [cart, setCart] = useState<IProduct[]>([])

	useEffect(() => {
		// Chequeo si el window esta definido
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
		// Diálogo de confirmación
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
					// Limpiamos el carrito
					localStorage.setItem('cart', JSON.stringify([]))
					setCart([])

					const newOrderWithId = {
						id: newOrder.id,
						status: newOrder.status,
						date: newOrder.date,
					}

					// Actualiza el objeto user en el localStorage
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
			<div className='flex justify-between items-center bg-gradient-to-r from-green-400 to-yellow-400 py-5 px-5  shadow-md rounded-md mb-6'>
				<h3 className='text-gray-900 font-bold text-2xl'>Cart</h3>
				<LinkPersonalized
					href='/products'
					className='bg-secondary text-center font-bold text-white transition hover:bg-blue-700 sm:text-xl md:text-base lg:text-lg'
					size='sm'
				>
					Products
				</LinkPersonalized>
			</div>
			<div className='flex justify-between items-center mt-5'>
				<h4>Total Products: {cart.length}</h4>
				<h4> Total US: ${calculateTotal().toFixed(2)}</h4>
				{cart.length > 0 && (
					<div className='flex gap-3 mt-4 md:mt-0'>
						<Button
							icon={<FaCheckCircle />}
							variant='success'
							onClick={handleOrder}
						>
							Finish Order
						</Button>
						<Button icon={<FaTimes />} variant='secondary' onClick={clearCart}>
							Clear Cart
						</Button>
					</div>
				)}
			</div>

			<div className='mt-8 flex flex-col gap-3 text-xl'>
				{cart.map((product: IProduct, i: number) => (
					<div key={product.id} className='flex justify-between items-center'>
						<p>{`${i + 1} - ${product.name} - (US ${product.price})`}</p>
						<Button
							icon={<FaTrashAlt />}
							size='sm'
							variant='error'
							onClick={() => removeProductFromCart(String(product.id))}
						>
							Remove
						</Button>
					</div>
				))}
			</div>
		</main>
	)
}

export default CartPage
