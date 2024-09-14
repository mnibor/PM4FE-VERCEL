'use client'
import { useState, useEffect } from 'react'
import InputPersonalized from '@/components/ui/InputPersonalized/InputPersonalized'
import Button from '@/components/ui/Button/Button'
import Link from 'next/link'
import Swal from 'sweetalert2'

import {
	validateName,
	validateEmail,
	validateAddress,
	validatePhone,
	validatePassword,
	validatePassword2,
} from '@/helpers/validation'
import { registerService } from '@/services/authServices'
import { useRouter } from 'next/navigation'

type FormData = {
	name: string
	address: string
	email: string
	phone: string
	password: string
	password2: string
}

type FormState = {
	[K in keyof FormData]: boolean
}

const RegisterForm = () => {
	const router = useRouter()
	const initialData: FormData = {
		name: '',
		address: '',
		email: '',
		phone: '',
		password: '',
		password2: '',
	}
	const initialState: FormState = {
		name: false,
		address: false,
		email: false,
		phone: false,
		password: false,
		password2: false,
	}

	const [data, setData] = useState<FormData>(initialData)
	const [dirty, setDirty] = useState<FormState>(initialState)
	const [errors, setErrors] = useState<FormData>(initialData)
	const [isValid, setIsValid] = useState<FormState>(initialState)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setData((prev) => ({ ...prev, [name]: value }))
		setDirty((prev) => ({ ...prev, [name]: true }))
	}

	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		setDirty((prev) => ({ ...prev, [e.target.name]: true }))
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setDirty(
			Object.keys(dirty).reduce(
				(acc, key) => ({ ...acc, [key]: true }),
				{} as FormState
			)
		)

		const apiURL = process.env.NEXT_PUBLIC_API_URL
		if (Object.values(isValid).every(Boolean)) {
			try {
				const response = await registerService(apiURL + '/users/register', data)
				if (!response.message) {
					Swal.fire({
						title: 'Registration successful',
						text: 'Welcome!!!',
						icon: 'success',
						confirmButtonText: 'Confirm',
					})
					setTimeout(() => router.back(), 3000)
				} else {
					Swal.fire({
						title: 'Registration failed',
						text: response.message,
						icon: 'error',
						confirmButtonText: 'Confirm',
					})
				}
			} catch (error) {
				console.error('Registration error:', error)
				Swal.fire({
					title: 'Registration failed',
					text: 'An error occurred during registration. Please try again.',
					icon: 'error',
					confirmButtonText: 'Confirm',
				})
			}
		} else {
			Swal.fire({
				title: 'Registration failed',
				text: 'Please fill in all fields correctly.',
				icon: 'error',
				confirmButtonText: 'Confirm',
			})
		}
	}

	useEffect(() => {
		const newErrors = {
			name: validateName(data.name),
			address: validateAddress(data.address),
			email: validateEmail(data.email),
			phone: validatePhone(data.phone),
			password: validatePassword(data.password),
			password2: validatePassword2(data.password, data.password2),
		}
		setErrors(newErrors)

		const newIsValid = Object.keys(newErrors).reduce(
			(acc, key) => ({
				...acc,
				[key]: newErrors[key as keyof typeof newErrors] === '',
			}),
			{} as FormState
		)
		setIsValid(newIsValid)
	}, [data])

	return (
		<div className='mx-auto my-4 flex flex-col items-center justify-center rounded-lg bg-accent p-8 shadow-md lg:w-1/2'>
			<h3 className='text-error'>Register</h3>
			<div className='flex items-center justify-center'>
				<form
					onSubmit={handleSubmit}
					className='mx-auto flex flex-col gap-4 pt-8'
					autoComplete='off'
				>
					<div className='flex flex-col px-2 md:flex-row md:space-x-4'>
						<InputPersonalized
							type='text'
							name='name'
							label='Name:'
							value={data.name}
							placeholder='Enter your name'
							onChange={handleChange}
							onBlur={handleBlur}
							error={errors.name}
							dirty={dirty.name}
							isValid={isValid.name}
						/>
						<InputPersonalized
							type='text'
							name='address'
							label='Address:'
							value={data.address}
							placeholder='Enter your address'
							onChange={handleChange}
							onBlur={handleBlur}
							error={errors.address}
							dirty={dirty.address}
							isValid={isValid.address}
						/>
					</div>
					<div className='flex flex-col px-2 md:flex-row md:space-x-4'>
						<InputPersonalized
							type='email'
							name='email'
							label='Email:'
							value={data.email}
							placeholder='Enter your email'
							onChange={handleChange}
							onBlur={handleBlur}
							error={errors.email}
							dirty={dirty.email}
							isValid={isValid.email}
						/>
						<InputPersonalized
							type='tel'
							name='phone'
							label='Phone:'
							value={data.phone}
							placeholder='Enter your phone number'
							onChange={handleChange}
							onBlur={handleBlur}
							error={errors.phone}
							dirty={dirty.phone}
							isValid={isValid.phone}
						/>
					</div>
					<div className='flex flex-col px-2 md:flex-row md:space-x-4'>
						<InputPersonalized
							type='password'
							name='password'
							label='Password:'
							value={data.password}
							placeholder='Enter your password'
							onChange={handleChange}
							onBlur={handleBlur}
							error={errors.password}
							dirty={dirty.password}
							isValid={isValid.password}
						/>
						<InputPersonalized
							type='password'
							name='password2'
							label='Confirm Password:'
							value={data.password2}
							placeholder='Confirm your password'
							onChange={handleChange}
							onBlur={handleBlur}
							error={errors.password2}
							dirty={dirty.password2}
							isValid={isValid.password2}
						/>
					</div>
					<div className='flex w-full items-center justify-between'>
						<Link href='/login' className='text-sm'>
							Go to Login
						</Link>
						<Button
							variant='secondary'
							size='base'
							type='submit'
							className='text-gray-200 hover:bg-error'
						>
							Register
						</Button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default RegisterForm
