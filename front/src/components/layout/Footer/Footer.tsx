import Link from 'next/link'
import Image from 'next/image'

const year = new Date().getFullYear()

const Footer = () => {
	return (
		<footer className='bg-secondary p-8 text-center text-accent'>
			<div className='container'>
				<div className='flex flex-col items-center justify-between md:flex-row'>
					<div className='text-center md:w-1/4 md:text-left'>
						<Link href='/'>
							<Image
								className=''
								src='/logo-footer.svg'
								alt='Logo'
								width={150}
								height={1}
								style={{ width: '100%', height: 'auto', maxWidth: '150px' }}
							/>
						</Link>
					</div>
					<div className='mt-5 flex flex-col gap-4 text-center md:w-3/4 md:flex-row md:justify-end md:text-right'>
						<Link
							className='transform-gpu text-lg text-white transition-transform duration-500 hover:origin-center hover:scale-110 hover:font-bold hover:uppercase hover:text-accent'
							href='/about'
						>
							About Us
						</Link>
						<Link
							className='transform-gpu text-lg text-white transition-transform duration-500 hover:origin-center hover:scale-110 hover:font-bold hover:uppercase hover:text-accent'
							href='/products'
						>
							Products
						</Link>
						<Link
							className='transform-gpu text-lg text-white transition-transform duration-500 hover:origin-center hover:scale-110 hover:font-bold hover:uppercase hover:text-accent'
							href='/dashboard'
						>
							My Profile
						</Link>
						<Link
							className='transform-gpu text-lg text-white transition-transform duration-500 hover:origin-center hover:scale-110 hover:font-bold hover:uppercase hover:text-accent'
							href='/contact'
						>
							Contact Us
						</Link>
					</div>
				</div>
				<hr className='my-3' />
				<div>
					<p className='text-center text-sm text-white'>
						©{year} - Marcelo Robin - All Rights Reserved
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
