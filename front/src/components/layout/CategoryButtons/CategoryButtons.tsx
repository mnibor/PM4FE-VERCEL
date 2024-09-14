import { ICategory } from '@/interfaces/category.interface'

interface CategoryProps {
	category: ICategory
}

const CategoryButtons = ({ category }: CategoryProps) => {
	return (
		<button
			className='rounded-xl text-xs px-2 py-1 mx-1 bg-green-500 hover:bg-green-600 text-white'
			key={category.id}
		>
			{category.name}
		</button>
	)
}

export default CategoryButtons
