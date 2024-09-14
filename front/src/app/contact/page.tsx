'use client'
import Button from '@/components/ui/Button/Button'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

const ContactPage = () => {
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		console.log('Email:', email)
		console.log('Message:', message)

		Swal.fire({
			title: 'Success!',
			text: 'Your message has been sent successfully.',
			icon: 'success',
			confirmButtonText: 'Confirm',
		}).then((result) => {
			if (result.isConfirmed) {
				console.log('Formulario enviado con éxito.')
				setEmail('')
				setMessage('')
			}
		})
	}

	return (
		<div className='container'>
			<h3 className='bg-gradient-to-r from-green-400 to-yellow-400 py-5 px-5 text-gray-900 font-bold text-2xl shadow-md rounded-md'>
				Contact Us
			</h3>

			<div className='py-4'>
				<div className='w-full md:w-3/4 bg-yellow-400 mx-auto shadow-md rounded-lg overflow-hidden'>
					<div className='bg-secondary px-4 py-2'>
						<h4 className='font-semibold text-gray-200 text-lg'>
							Send Message
						</h4>
					</div>
					<div className='p-4'>
						<form onSubmit={handleSubmit} className='mt-5'>
							<div className='mb-3'>
								<label className='text-sm' htmlFor='email'>
									Email Address:
								</label>
								<input
									type='email'
									id='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
								/>
							</div>
							<div className='mb-3'>
								<label className='text-sm' htmlFor='message'>
									Message:
								</label>
								<textarea
									id='message'
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									required
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
								/>
							</div>

							<Button type='submit' variant='success'>
								Send Message
							</Button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactPage
