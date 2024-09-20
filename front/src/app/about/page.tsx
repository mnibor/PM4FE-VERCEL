import { LogoLong } from '@/components/layout/LogoLong/LogoLong'
import PageHeader from '@/components/layout/PageHeader/PageHeader'

const AboutPage = () => {
	return (
		<main className='container'>
			<PageHeader title='About Us' />
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
