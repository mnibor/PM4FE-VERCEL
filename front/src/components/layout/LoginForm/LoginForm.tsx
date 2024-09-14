'use client'
import { useState, useEffect, useContext } from 'react'
import InputPersonalized from '@/components/ui/InputPersonalized/InputPersonalized'
import Button from '@/components/ui/Button/Button'
import { validateEmail, validatePassword } from '@/helpers/validation'
import Link from 'next/link'
import { loginService } from '@/services/authServices'
import { useRouter } from 'next/navigation'
import { AuthContext } from '@/contexts/authContext'
import Swal from 'sweetalert2'

type FormData = {
	email: string
	password: string
}

type FormState = {
	[K in keyof FormData]: boolean
}

const LoginForm = () => {
	const { setUser } = useContext(AuthContext)
	const router = useRouter()
	const initialData: FormData = { email: '', password: '' }
	const initialState: FormState = {
		email: false,
		password: false,
	}

	const [data, setData] = useState<FormData>(initialData)
	const [dirty, setDirty] = useState<FormState>(initialState)
	const [errors, setErrors] = useState<FormData>(initialData)
	const [isValid, setIsValid] = useState<FormState>(initialState)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
		setDirty((prev) => ({ ...prev, [e.target.name]: true }))
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
				const response = await loginService(apiURL + '/users/login', data)
				if (response.login) {
					Swal.fire({
						title: 'Login successful',
						text: 'Welcome!!!',
						icon: 'success',
						confirmButtonText: 'Confirm',
					})
					setUser(response)
					setTimeout(() => router.back(), 3000)
				} else {
					Swal.fire({
						title: 'Login failed',
						text: 'Please check your credentials.',
						icon: 'error',
						confirmButtonText: 'Confirm',
					})
				}
			} catch (error) {
				console.error('Login error:', error)
				Swal.fire({
					title: 'Error',
					text: 'An error occurred during login. Please try again.',
					icon: 'error',
					confirmButtonText: 'Confirm',
				})
			}
		} else {
			Swal.fire({
				title: 'Error',
				text: 'Please fill in all fields correctly.',
				icon: 'error',
				confirmButtonText: 'Confirm',
			})
		}
	}

	useEffect(() => {
		const newErrors = {
			email: validateEmail(data.email),
			password: validatePassword(data.password),
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
			<h3 className='text-error'>Login</h3>
			<div className='flex items-center justify-center'>
				<form
					onSubmit={handleSubmit}
					className='mx-auto flex flex-col gap-4 pt-8'
					autoComplete='off'
				>
					<InputPersonalized
						type='email'
						name='email'
						label='E-mail:'
						value={data.email}
						placeholder='email@email.com'
						onChange={handleChange}
						onBlur={handleBlur}
						error={errors.email}
						dirty={dirty.email}
						isValid={isValid.email}
					/>

					<InputPersonalized
						type='password'
						name='password'
						label='Password:'
						value={data.password}
						placeholder='At least five characters'
						onChange={handleChange}
						onBlur={handleBlur}
						error={errors.password}
						dirty={dirty.password}
						isValid={isValid.password}
					/>

					<div className='flex w-full items-center justify-between'>
						<Link href='/register' className='text-sm'>
							Sign Up
						</Link>
						<Button
							variant='secondary'
							size='base'
							type='submit'
							className='text-gray-200 hover:bg-error'
						>
							Login
						</Button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default LoginForm
