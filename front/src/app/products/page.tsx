import ProductCard from '@/components/layout/ProductCard/ProductCard'
import ProductGrid from '@/components/layout/ProductGrid/ProductGrid'
import { IProduct } from '@/interfaces/product.interface'

const ProductsPage = async () => {
	const url = process.env.API_URL + '/products'
	const response = await fetch(url, { next: { revalidate: 0 } })
	const products: IProduct[] = await response.json()

	return (
		<div>
			<div className='container'>
				<h3 className='bg-gradient-to-r from-green-400 to-yellow-400 py-5 px-5 text-gray-900 font-bold text-2xl shadow-md rounded-md'>
					Products
				</h3>

				<div className='my-5'>
					<ProductGrid>
						{products.map((product: IProduct, i: number) => (
							<ProductCard key={i} product={product} />
						))}
					</ProductGrid>
				</div>
			</div>
		</div>
	)
}

export default ProductsPage
