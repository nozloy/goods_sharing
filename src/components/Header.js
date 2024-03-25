import React from 'react'
import { IoMdOptions } from 'react-icons/io'
import { IoIosNotifications } from 'react-icons/io'
import { FaRegCopy } from 'react-icons/fa'

const Header = () => {
	return (
		<div className='flex flex-row justify-between w-full fixed top-0 bg-blue-gray-800'>
			<div className='text-white font-body text-md px-2 py-5 flex flex-row gap-1'>
				Индификатор U0001 <FaRegCopy className='text-sm translate-y-1' />
			</div>
			<div className='text-white font-body text-xl px-2 py-5'>
				<div className='flex flex-row gap-5'>
					<IoMdOptions />
					<IoIosNotifications />
				</div>
			</div>
		</div>
	)
}

export default Header
