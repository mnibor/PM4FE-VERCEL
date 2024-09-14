'use client'
import Image from 'next/image'
import LinkPersonalized from '@/components/ui/LinkPersonalized/LinkPersonalized'

const Hero = () => {
	return (
		<header className='relative flex h-[50vh] w-full items-center justify-center'>
			<div className='absolute left-0 top-0 h-[100%] w-[100%] opacity-50'>
				<Image
					src='/fondo-hero.jpg'
					layout='fill'
					objectFit='cover'
					alt='Hero Image'
				/>
			</div>
			<div className='relative flex flex-col items-center text-accent'>
				<h4 className='text-center text-3xl font-thin italic'>
					The best technology is always within your reach...
				</h4>
				<LinkPersonalized
					href='/products'
					className='mt-8 font-bold hover:border-4 hover:border-accent hover:bg-tertiary hover:text-accent'
					variant='secondary'
					size='xl'
				>
					Products
				</LinkPersonalized>
			</div>
		</header>
	)
}

export default Hero
