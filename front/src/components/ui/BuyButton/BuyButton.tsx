'use client'
import { AuthContext } from '@/contexts/authContext'
import Button from '@/components/ui/Button/Button'
import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { IProduct } from '@/interfaces/product.interface'
import Swal from 'sweetalert2'

interface BuyButtonProps {
	product: IProduct
}

const BuyButton = ({ product }: BuyButtonProps) => {
	const { user } = useContext(AuthContext)
	const router = useRouter()

	const handleBuy = () => {
		if (!user?.login) {
			router.push('/login')
		} else {
			const cart = JSON.parse(localStorage.getItem('cart') || '[]')
			if (!cart.some((item: IProduct) => item.id === product?.id)) {
				cart.push(product)
				localStorage.setItem('cart', JSON.stringify(cart))
				window.dispatchEvent(new Event('storage'))
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
		<Button
			className='rounded bg-green-500 text-center font-bold text-white transition hover:bg-green-700 sm:text-sm md:text-base lg:text-lg'
			onClick={handleBuy}
			size='sm'
		>
			Buy
		</Button>
	)
}

export default BuyButton
