interface CategoryGridProps {
	children: React.ReactNode
}

const CategoryBar: React.FC<CategoryGridProps> = ({ children }) => {
	return (
		<div className='my-1rem hidden md:flex bg-green-400 flex-wrap justify-center gap-2 w-full'>
			{children}
		</div>
	)
}

export default CategoryBar
