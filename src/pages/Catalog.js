import React from 'react'
import Page from '../layout/Page'

const Catalog = () => {
	return (
		<div className='select-none'>
			<Page>
				<div className='bg-white rounded-2xl shadow-xl shadow-white flex flex-col gap-5 justify-between items-center mt-20'>
					<div className='itemsCard'>
						<img
							className='w-[80%] mx-auto mb-10'
							src='/img/Makita_CL114FDWI.webp'
							alt='Строительный пылесос аккумуляторный Makita CL114FDWI CXT 12V'
						></img>
						Строительный пылесос аккумуляторный Makita CL114FDWI CXT 12V
						<p className=' text-green-300'>Доступно</p>
					</div>
					<div className='itemsCard'>
						<img
							className='w-[80%] mx-auto mb-10'
							src='/img/TefalPureglissFV8066E0.webp'
							alt='Утюг Tefal Puregliss FV8066E0'
						></img>
						Утюг Tefal Puregliss FV8066E0
						<p className=' text-green-300'>Доступно</p>
					</div>
					<div className='itemsCard'>
						<img
							className='w-[80%] mx-auto mb-10'
							src='/img/XiaomiSmartHumidifier2.webp'
							alt='Увлажнитель воздуха Xiaomi Smart Humidifier 2'
						></img>
						Увлажнитель воздуха Xiaomi Smart Humidifier 2
						<p className=' text-green-300'>Доступно</p>
					</div>
					<div className='itemsCard'>
						<img
							className='w-[80%] mx-auto mb-10'
							src='/img/Makita_CL114FDWI.webp'
							alt='Строительный пылесос аккумуляторный Makita CL114FDWI CXT 12V'
						></img>
						Строительный пылесос аккумуляторный Makita CL114FDWI CXT 12V
						<p className=' text-green-300'>Доступно</p>
					</div>
				</div>
			</Page>
		</div>
	)
}

export default Catalog
