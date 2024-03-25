import React from 'react'
import { FaHome } from 'react-icons/fa'
import { FaBox } from 'react-icons/fa6'
import { FaUser } from 'react-icons/fa6'
import { IoChatbubbleSharp } from 'react-icons/io5'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Footer = () => {
	return (
		<div className='fixed !bottom-0 w-full shadow-xl rounded-none text-white'>
			<div className='bg-green-400 text-sm w-full font-body p-2 pl-5 flex flex-row justify-between'>
				<span>
					<p className='text-md font-bold'>Премиум подписка</p>
					<p className='text-sm font-normal'>
						первый час аренды - всегда бесплатно
					</p>
				</span>
				<MdKeyboardArrowRight className='text-4xl' />
			</div>
			<div
				className='flex justify-between bg-white py-3 px-5 text-blue-gray-500 font-body font-medium text-sm uppercase
		[&>*]:footerButton'
			>
				<button>
					<FaHome size={30} />
					Главная
				</button>
				<button>
					<FaBox size={30} />
					Каталог
				</button>
				<button>
					<FaUser size={30} />
					Профиль
				</button>
				<button>
					<IoChatbubbleSharp size={30} />
					Помошь
				</button>
			</div>
		</div>
	)
}

export default Footer
