import ProductNotFound from '@/components/ProductNotFound/ProductNotFound'
import PageHeader from '@/components/layout/PageHeader/PageHeader'
import ProductDetail from '@/components/layout/ProductDetail/ProductDetail'
import { IProduct } from '@/interfaces/product.interface'

const ProductDetailPage = async ({ params }: { params: { id: string } }) => {
	const url = process.env.API_URL + '/products'
	const response = await fetch(url, { next: { revalidate: 0 } })
	const products: IProduct[] = await response.json()
	const product = products.filter(
		(product: IProduct) => product.id.toString() === params.id
	)[0]

	if (!product) {
		return <ProductNotFound />
	}

	return (
		<div className='container'>
			<PageHeader title='Product Detail' />
			<div className='my-5'>
				<ProductDetail product={product} />
			</div>
		</div>
	)
}

export default ProductDetailPage
