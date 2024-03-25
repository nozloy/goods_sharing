import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Page = ({ children }) => {
	return (
		<div className='bg-blue-gray-800 flex flex-col justify-stretch justify-items-center overflow-x-hidden min-h-svh'>
			<Header />
			{children}
			<Footer />
		</div>
	)
}

export default Page
