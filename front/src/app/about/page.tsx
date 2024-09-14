import { LogoLong } from '@/components/layout/LogoLong/LogoLong'

const AboutPage = () => {
	return (
		<main className='container'>
			<h3 className='bg-gradient-to-r from-green-400 to-yellow-400 py-5 px-5 text-gray-900 font-bold text-2xl shadow-md rounded-md'>
				About Us
			</h3>
			<div className='my-6'>
				<LogoLong />

				<p className='mt-5 md:text-xl font-extralight'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
					magnam distinctio quia necessitatibus nostrum accusantium voluptatum
					doloremque quaerat voluptas corporis! Voluptas sapiente modi eum
					numquam qui vitae explicabo libero odit?
				</p>
			</div>
		</main>
	)
}

export default AboutPage
