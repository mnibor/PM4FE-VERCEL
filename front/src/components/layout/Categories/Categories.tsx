import { ICategory } from '@/interfaces/category.interface'
import { categoriesToPreLoad } from '@/lib/categoriesPreload'

import CategoryBar from '@/components/layout/CategoryBar/CategoryBar'
import CategoryButtons from '@/components/layout/CategoryButtons/CategoryButtons'

const Categories = () => {
	const featured = categoriesToPreLoad.all()
	return (
		<CategoryBar>
			{featured.map((category: ICategory) => (
				<CategoryButtons key={category.id} category={category} />
			))}
		</CategoryBar>
	)
}

export default Categories
