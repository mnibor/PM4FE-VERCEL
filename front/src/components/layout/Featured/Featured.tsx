import { IProduct } from '@/interfaces/product.interface'
import ProductCard from '@/components/layout/ProductCard/ProductCard'
import ProductGrid from '@/components/layout/ProductGrid/ProductGrid'

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
			<h3 className='bg-gradient-to-r from-green-400 to-yellow-400 py-5 px-5 text-gray-900 font-bold text-2xl shadow-md rounded-md'>
				Featured Products
			</h3>
			<ProductGrid>
				{randomProducts.map((product: IProduct) => (
					<ProductCard key={product.id} product={product} />
				))}
			</ProductGrid>
		</div>
	)
}

export default Featured
