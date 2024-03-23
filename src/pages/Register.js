import React, { useState } from 'react'
import { motion } from 'framer-motion'

const RegisterScreen = () => {
	const [formData, setFormData] = useState({
		phoneNumber: '',
	})

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		// Обработка данных формы
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			className='flex flex-col items-center justify-center min-h-screen bg-gray-100'
		>
			<form onSubmit={handleSubmit} className='p-6 bg-white rounded shadow-md'>
				<div className='mb-4'>
					<label
						htmlFor='phoneNumber'
						className='block text-sm font-medium text-gray-700'
					>
						Номер телефона
					</label>
					<div className='flex'>
						<span className='flex items-center px-3 text-sm text-gray-600 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md'>
							+7
						</span>
						<input
							type='text'
							name='phoneNumber'
							id='phoneNumber'
							required
							value={formData.phoneNumber}
							onChange={handleChange}
							className='w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
							placeholder='123 456-78-90'
						/>
					</div>
				</div>
				{/* Добавьте другие поля ввода, если необходимо */}
				<button
					type='submit'
					className='w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
				>
					Зарегистрироваться
				</button>
			</form>
		</motion.div>
	)
}

export default RegisterScreen
