import { IProduct } from '@/interfaces/product.interface'
import ProductCard from '@/components/layout/ProductCard/ProductCard'
import ProductGrid from '@/components/layout/ProductGrid/ProductGrid'
import PageHeader from '@/components/layout/PageHeader/PageHeader'

const Featured = async () => {
	const url = process.env.API_URL + '/products'
	const response = await fetch(url, { next: { revalidate: 0 } })
	const products: IProduct[] = await response.json()

	const randomIndices: number[] = []
	while (randomIndices.length < 4) {
		const randomIndex = Math.floor(Math.random() * products.length)
		if (!randomIndices.includes(randomIndex)) {
			randomIndices.push(randomIndex)
		}
	}

	const randomProducts = randomIndices.map((index) => products[index])

	return (
		<div className='container my-5'>
			<PageHeader title='Featured Products' />
			<ProductGrid>
				{randomProducts.map((product: IProduct) => (
					<ProductCard key={product.id} product={product} />
				))}
			</ProductGrid>
		</div>
	)
}

export default Featured
