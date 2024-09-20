import React from 'react'
import Link from 'next/link'
import { IconType } from 'react-icons'

interface PageHeaderProps {
	title: string
	buttonText?: string
	buttonLink?: string
	buttonIcon?: IconType
}

const PageHeader: React.FC<PageHeaderProps> = ({
	title,
	buttonText,
	buttonLink,
	buttonIcon: ButtonIcon,
}) => {
	return (
		<div className='mb-6 rounded-lg bg-gradient-to-r from-green-400 to-yellow-400 p-5 shadow-md'>
			<div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
				<h3 className='text-2xl font-bold text-gray-900'>{title}</h3>
				{buttonText && buttonLink && (
					<Link
						href={buttonLink}
						className='flex items-center justify-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 hover:scale-105 active:scale-95'
					>
						{ButtonIcon && <ButtonIcon className='h-5 w-5' />}
						{buttonText}
					</Link>
				)}
			</div>
		</div>
	)
}

export default PageHeader
