import React from 'react'

interface IButton {
	children: React.ReactNode
	className?: string
	variant?:
		| 'primary'
		| 'secondary'
		| 'tertiary'
		| 'accent'
		| 'error'
		| 'success'
		| 'warning'
		| 'danger'
		| 'info'
		| 'light'
		| 'dark'
		| 'link'
		| 'outline'
		| null
	size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
	type?: 'button' | 'submit' | 'reset'
	onClick?: () => void
	icon?: React.ReactElement
	iconPosition?: 'left' | 'right'
}

const Button: React.FC<IButton> = ({
	children,
	className = '',
	variant = 'secondary',
	size = 'base',
	onClick,
	type = 'button',
	icon,
	iconPosition = 'left',
}) => {
	const sizeClasses = {
		xs: 'text-xs px-2 py-1',
		sm: 'text-sm px-3 py-1.5',
		base: 'text-base px-4 py-2',
		lg: 'text-lg px-5 py-2.5',
		xl: 'text-xl px-6 py-3',
	}

	const variantClasses = {
		primary: 'bg-blue-500 text-white hover:bg-blue-600',
		secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
		tertiary: 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100',
		accent: 'bg-purple-500 text-white hover:bg-purple-600',
		success: 'bg-green-500 text-white hover:bg-green-600',
		warning: 'bg-yellow-500 text-white hover:bg-yellow-600',
		danger: 'bg-red-500 text-white hover:bg-red-600',
		info: 'bg-blue-500 text-white hover:bg-blue-600',
		light: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
		dark: 'bg-gray-800 text-white hover:bg-gray-900',
		link: 'text-blue-500 hover:text-blue-600',
		outline: 'border border-gray-300 text-gray-800 hover:bg-gray-100',
		error: 'bg-red-500 text-white hover:bg-red-600',
	}

	const iconSizeClasses = {
		xs: 'w-3 h-3',
		sm: 'w-4 h-4',
		base: 'w-5 h-5',
		lg: 'w-6 h-6',
		xl: 'w-7 h-7',
	}

	const iconClass = icon ? `inline-flex items-center justify-center gap-2` : ''

	return (
		<button
			className={`
        rounded-md font-medium shadow-md transition-all ease-in-out
        hover:scale-105 active:scale-95
        ${sizeClasses[size]}
        ${variant ? variantClasses[variant] : ''}
        ${iconClass}
        ${className}
      `}
			onClick={onClick}
			type={type}
		>
			{icon &&
				iconPosition === 'left' &&
				React.cloneElement(icon, {
					className: `${iconSizeClasses[size]} ${icon.props.className || ''}`,
				})}
			{children}
			{icon &&
				iconPosition === 'right' &&
				React.cloneElement(icon, {
					className: `${iconSizeClasses[size]} ${icon.props.className || ''}`,
				})}
		</button>
	)
}

export default Button
