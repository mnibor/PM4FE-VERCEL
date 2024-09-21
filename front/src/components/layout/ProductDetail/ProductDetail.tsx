'use client'
import Image from 'next/image'
import { useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import { AuthContext } from '@/contexts/authContext'
import { getCategoryName } from '@/utils/categories'
import { FaShoppingBag, FaCartArrowDown, FaArrowLeft } from 'react-icons/fa'
import Swal from 'sweetalert2'

interface Product {
	id: number
	name: string
	image: string
	description: string
	price: number
	stock: number
	categoryId: number
}

interface ProductDetailProps {
	product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
	const { user } = useContext(AuthContext)
	const router = useRouter()
	const categoryName = getCategoryName(product.categoryId)
	const cart = JSON.parse(localStorage.getItem('cart') || '[]')
	const [cartItems, setCartItems] = useState(cart.length)

	const handleBuy = () => {
		if (!user?.login) {
			router.push('/login')
		} else {
			if (!cart.some((item: Product) => item.id === product?.id)) {
				cart.push(product)
				localStorage.setItem('cart', JSON.stringify(cart))
				window.dispatchEvent(new Event('storage'))
				setCartItems(cart.length)
				Swal.fire({
					title: 'Success!',
					text: `The product ${product?.name} has been added to your cart`,
					icon: 'success',
					confirmButtonText: 'Confirm',
				})
			} else {
				Swal.fire({
					title: 'Error!',
					text: `The product ${product?.name} is already in your cart`,
					icon: 'error',
					confirmButtonText: 'Confirm',
				})
			}
		}
	}

	return (
		<div className='duration-600 flex justify-center transition-all ease-in-out'>
			<div className='mx-auto flex w-full max-w-4xl flex-col gap-2 rounded-lg bg-accent p-4 shadow-md md:flex-row md:p-8'>
				<div className='group md:w-1/2'>
					<Image
						src={product.image}
						alt={product.name}
						width={400}
						height={400}
						className='mx-auto w-auto transition-transform duration-300 ease-in-out group-hover:scale-110'
					/>
				</div>
				<div className='flex flex-col justify-between md:w-1/2'>
					<div>
						<div className='mb-3 bg-gradient-to-r from-transparent to-green-400 p-3 pl-0'>
							<p className='text-xs uppercase'>{categoryName}</p>
						</div>
						<div className='flex justify-between'>
							<div className='py-3'>
								<h4 className='text-secondary text-xl font-bold'>
									{product.name}
								</h4>
							</div>
							<div className='py-3'>
								<h4 className='text-error font-mono text-xl'>
									$ {product.price}.00
								</h4>
							</div>
						</div>
						<div className='py-3'>
							<p className='text-sm md:text-base'>{product.description}</p>
						</div>
					</div>
					<div className='mt-4 flex flex-col gap-4'>
						<div className='bg-green-400 p-3 text-center'>
							<p className='font-bold text-secondary'>
								Stock:{' '}
								<span className='font-normal'>{product.stock} units</span>
							</p>
						</div>
						<div className='flex flex-col gap-2 sm:flex-row'>
							<button
								onClick={() => router.push('/products')}
								className='flex w-full items-center justify-center gap-2 rounded-md bg-secondary px-6 py-3 text-lg font-bold text-white transition hover:bg-blue-700 hover:scale-105 active:scale-95 sm:text-base'
								aria-label='Go back to products'
							>
								<FaArrowLeft className='h-5 w-5 sm:h-4 sm:w-4' />
								<span>Products</span>
							</button>
							{cartItems > 0 && (
								<button
									onClick={() => router.push('/cart')}
									className='flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-lg font-bold text-white transition hover:bg-blue-700 hover:scale-105 active:scale-95 sm:text-base'
									aria-label='Go to cart'
								>
									<FaShoppingBag className='h-5 w-5 sm:h-4 sm:w-4' />
									<span>Cart</span>
								</button>
							)}
							<button
								onClick={handleBuy}
								className='flex w-full items-center justify-center gap-2 rounded-md bg-green-500 px-6 py-3 text-lg font-bold text-white transition hover:bg-green-700 hover:scale-105 active:scale-95 sm:text-base'
								aria-label='Add to cart'
							>
								<FaCartArrowDown className='h-5 w-5 sm:h-4 sm:w-4' />
								<span>Buy</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
