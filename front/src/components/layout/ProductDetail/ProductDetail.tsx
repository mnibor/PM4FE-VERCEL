import Image from 'next/image'
import LinkPersonalized from '@/components/ui/LinkPersonalized/LinkPersonalized'
import BuyButton from '@/components/ui/BuyButton/BuyButton'
import { getCategoryName } from '@/utils/categories'

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

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
	const categoryName = getCategoryName(product.categoryId)

	return (
		<div className='duration-600 flex justify-center transition-all ease-in-out'>
			<div className='mx-auto flex w-full flex-col gap-2 rounded-lg bg-accent p-6 shadow-md md:flex-row md:p-8'>
				<div className='group md:w-full'>
					<Image
						src={product.image}
						alt={product.name}
						width={400}
						height={400}
						className='mx-auto w-auto transition-transform duration-300 ease-in-out group-hover:scale-110'
					/>
				</div>
				<div className='flex flex-col justify-between'>
					<div>
						<div className='mb-3 bg-gradient-to-r from-transparent to-green-400 p-3 pl-0'>
							<p className='text-xs uppercase'>{categoryName}</p>
						</div>
						<div className='flex justify-between'>
							<div className='py-3'>
								<h4 className='text-secondary font-bold'>{product.name}</h4>
							</div>
							<div className='py-3'>
								<h4 className='text-error font-mono'>$ {product.price}.00</h4>
							</div>
						</div>
						<div className='py-3'>
							<p className='text-sm md:text-base'>{product.description}</p>
						</div>
					</div>
					<div className='flex flex-col md:flex-row md:items-center gap-2 md:justify-between'>
						<div className='bg-green-400 p-3'>
							<p className='font-bold text-secondary'>
								Stock:{' '}
								<span className='font-normal'>{product.stock} units</span>
							</p>
						</div>
						<div className='flex mx-auto md:mx-0 gap-2'>
							<LinkPersonalized
								href='/products'
								className='bg-secondary text-center font-bold text-white transition hover:bg-blue-700 sm:text-xl md:text-base lg:text-lg'
								size='sm'
							>
								Products
							</LinkPersonalized>
							<BuyButton product={product} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductDetail
