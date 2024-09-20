import PageHeader from '@/components/layout/PageHeader/PageHeader'
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
				<PageHeader title='Products' />
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
