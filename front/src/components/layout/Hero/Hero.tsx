'use client'
import Image from 'next/image'
import LinkPersonalized from '@/components/ui/LinkPersonalized/LinkPersonalized'
import { FaShoppingCart } from 'react-icons/fa'

const Hero = () => {
	return (
		<header className='relative flex h-[60vh] w-full items-center justify-center'>
			<div className='absolute left-0 top-0 h-[100%] w-[100%] opacity-50'>
				<Image
					src='/fondo-hero.jpg'
					layout='fill'
					objectFit='cover'
					alt='Hero Image'
				/>
			</div>
			<div className='relative flex flex-col items-center text-center px-4 sm:px-6 md:px-8 max-w-4xl'>
				<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-4 shadow-text'>
					Unleash the Power of Technology
				</h1>
				<p className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-accent mb-8 shadow-text'>
					Discover cutting-edge devices that transform your digital life
				</p>
				<LinkPersonalized
					href='/products'
					className='mt-4 font-bold bg-yellow-400 text-secondary hover:bg-yellow-500 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 px-6 py-3 text-lg sm:text-xl'
					variant='secondary'
					size='xl'
				>
					<FaShoppingCart className='h-5 w-5' />
					Explore Our Products
				</LinkPersonalized>
			</div>
		</header>
	)
}

export default Hero
