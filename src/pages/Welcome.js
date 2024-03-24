import React, { useState } from 'react'

const Welcome = () => {
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
		<div className='select-none flex flex-col justify-end mx-auto p-5 gap-6 w-full h-screen'>
			<div className=' bg-blue-gray-300 rounded-lg w-full h-full shadow-lg'></div>
			<h2 className='text-xl font-body font-semibold text-blue-gray-700'>
				Добро пожаловать
			</h2>
			<div className='flex mx-auto'>
				<span className='flex items-center px-3 text-md text-blue-gray-700 bg-gray-200 border border-r-0 border-blue-gray-200 rounded-l-md'>
					+7
				</span>
				<div class='relative h-10 w-full min-w-[200px]'>
					<input
						pattern='[0-9]*'
						type='text'
						name='phoneNumber'
						id='phoneNumber'
						required
						value={formData.phoneNumber}
						onChange={handleChange}
						placeholder='012 345 67 89'
						class='peer h-full w-full rounded-r-[7px] rounded-l-none border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-md font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100'
					/>
					<label class="large before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-6 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 !teal">
						Телефон
					</label>
				</div>
			</div>
			<button
				type='button'
				className=' bg-blue-gray-700 rounded-xl shadow-xl py-2 px-5 mx-auto
				motion-reduce:transition-none transition duration-150 ease-in-out
			text-white font-body font-medium text-md uppercase 
			hover:bg-blue-gray-600 hover:cursor-pointer 
			active:bg-blue-gray-400 active:shadow-blue-gray-900 active:border-spacing-2 border-blue-gray-900'
			>
				Войти
			</button>
		</div>
	)
}

export default Welcome
