'use client'
import { useEffect, useState } from 'react'
import ProductGrid from '@/components/layout/ProductGrid/ProductGrid'
import ProductCard from '@/components/layout/ProductCard/ProductCard'
import { IProduct } from '@/interfaces/product.interface'

const url = process.env.API_URL + '/products'

export default function ClientProducts() {
	const [data, setData] = useState<IProduct[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [hasError, setHasError] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		fetch(url, { next: { revalidate: 0 } })
			.then((response) => response.json())
			.then((products) => {
				setData(products)
				setIsLoading(false)
				setHasError(false)
			})
			.catch((error) => {
				setHasError(true)
				console.error('Error cargando productos:', error)
			})
	}, [])

	if (isLoading) {
		return <h4 className='text-error'>Loading products...</h4>
	}

	if (hasError) {
		return <h4 className='text-error'>Error loading products...</h4>
	}

	return (
		<div className='my-5'>
			<ProductGrid>
				{data.map((product, i) => (
					<ProductCard key={i} product={product} />
				))}
			</ProductGrid>
		</div>
	)
}
