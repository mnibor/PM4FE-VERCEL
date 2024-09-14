import { IProduct } from '@/interfaces/product.interface'
import Image from 'next/image'
import Link from 'next/link'

interface ProductProps {
	product: IProduct
}

const ProductCard = ({ product }: ProductProps) => {
	return (
		<div className='group transform  transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg'>
			<Link
				href={`/products/${product.id}`}
				className='block rounded-lg bg-accent p-6 group-hover:bg-secondary min-h-[300px]'
			>
				<div className='relative w-full h-48'>
					<Image
						className='object-contain w-full h-full'
						src={product.image}
						alt={product.name}
						layout='fill'
					/>
				</div>
				<h4 className='mt-4 text-center text-gray-800 group-hover:text-accent'>
					{product.name}
				</h4>
				<h4 className='mt-2 text-center font-mono text-red-500 group-hover:text-accent'>
					$ {product.price},00
				</h4>
			</Link>
		</div>
	)
}

export default ProductCard
