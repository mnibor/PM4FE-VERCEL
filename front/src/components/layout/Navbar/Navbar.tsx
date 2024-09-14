import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import ToggleMobile from '@/components/layout/ToggleMobile/ToggleMobile'
import Categories from '@/components/layout/Categories/Categories'

const UserWidget = dynamic(
	() => import('@/components/layout/UserWidget/UserWidget'),
	{
		ssr: false,
	}
)

export default function Navbar() {
	return (
		<header className='bg-accent text-secondary'>
			<div className='container mx-auto px-4'>
				<nav className='flex items-center justify-between py-3'>
					<Link href='/' className='flex-shrink-0'>
						<Image
							src='/logo.svg'
							alt='Logo'
							width={200}
							height={100}
							priority
							className='w-auto h-auto filter drop-shadow-md'
						/>
					</Link>

					<div className='hidden md:flex space-x-5'>
						{['Home', 'About', 'Products'].map((item) => (
							<Link
								key={item}
								href={
									item === 'Home'
										? '/'
										: `/${item.toLowerCase().replace(' ', '-')}`
								}
								className='border-b-4 border-transparent text-lg transition-all duration-300 ease-in-out hover:border-secondary hover:font-bold hover:text-error'
							>
								{item}
							</Link>
						))}
					</div>

					<div className='flex items-center space-x-4'>
						<UserWidget />
						<ToggleMobile />
					</div>
				</nav>
			</div>

			<div className='bg-green-400 w-full h-0 md:h-16 lg:h-8 flex items-center'>
				<div className='container mx-auto px-4'>
					<Categories />
				</div>
			</div>
		</header>
	)
}
