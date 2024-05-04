'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { heartIcon, solidShareIcon, starIcon } from '../icons'

export default function ProductInfo() {
	const [itemAmount, setItemAmount] = useState(0)
	
	function onHandleClick(plus: boolean) {
		if (plus == true) {
			if (itemAmount < 99) setItemAmount(itemAmount + 1)
			
		} else if (itemAmount > 0) {
			setItemAmount(itemAmount - 1)
		}
	}
	
	return (
		<div className='bg-white rounded-lg p-6 flex'>
			<div className='xl:w-2/6'>
				<div className='flex text-[#B3B3B3] text-xs space-x-2'>
					<span className='flex'>{heartIcon('h-4 w-4')}favoritar</span>
					<span className='flex'>{solidShareIcon('h-4 w-4')}compartilhar</span>
				</div>
				<Image
					src={'/galaoDeDetergenteAutomotivo.png'}
					width={350}
					height={350}
					alt='Solupan'
				/>
				<Image
					className='border border-black'
					src={'/galaoDeDetergenteAutomotivo.png'}
					width={75}
					height={75}
					alt='Solupan'
				/>
			</div>
			<div className='xl:w-3/6 flex-col'>
				<p className='font-bold text-black text-lg xl:text-2xl'>Detergente Mata Ratos Solupan 5 Litros - Fa+COM3467</p>
				<span className='flex text-black text-sm font-semibold'>{starIcon('h-5 w-5')}{starIcon('h-5 w-5')}{starIcon('h-5 w-5')}{starIcon('h-5 w-5')}{starIcon('h-5 w-5')} (0)</span>
				<p className='text-[#B3B3B3] text-sm xl:text-base max-h-44 overflow-hidden max-w-xl text-wrap font-medium mt-8'>Texto de teste para descrição do produto ao lado.Texto de teste para descrição do produto ao lado.Texto de teste para descrição do produto ao lado.Texto de teste para descrição do produto ao lado.Texto de teste para descrição do produto ao lado.Texto de teste para descrição do produto ao lado.Texto de teste para descrição do produto ao lado.</p>
			</div>
			<div className='xl:w-1/6 space-y-2'>
				<div className='font-bold text-black text-xs bg-white rounded-lg shadow-lg p-2'>
					<p>De  <span className='text-[#FF0000] text-sm line-through decoration-[1.5px]'>R$ 153,04</span>  por apenas:</p>
					<p className='text-[#00FF0A] text-lg'>R$ 22,97</p>
					<p>Comprando agora no cartão à vista ou no pix!!</p>
				</div>
				<div className='space-x-auto flex-col items-center justify-center text-center'>
					<span className='text-black font-bold text-xs'>quantidade:</span>
					<div className='w-full flex items-center justify-center'>
						<div className='bg-[#dedede] border-[0.5px] border-[#dedede] shadow-[#dedede] shadow-lg rounded-md'>
							<button className='bg-white font-bold rounded-l-md py-1 px-2'
								onClick={() => onHandleClick(false)}
							>-</button>
							<span className='mx-1'>{itemAmount} unidades</span>
							<button className='bg-white font-bold text-[#E5004F] rounded-r-md py-1 px-2'
								onClick={() => onHandleClick(true)}
							>+</button>
						</div>
					</div>
					{/* <div className=' rounded w-[50%] bg-[#DEDEDE] shadow-[#DEDEDE] '>
						<div className=' flex items-center justify-center rounded-md xl:py-[1.5px] shadow-lg '>
							<button onClick={() => onHandleClick(false)} className='justify-self-start text-black bg-white shadow-md font-bold py-2 px-1 xl:px-4 rounded-md'>-</button>
							<span className={`bg-[#DEDEDE] ${itemAmount > 9? 'xl:px-2' :'xl:px-[15px]'} px-1`}>{itemAmount} unidades</span>
							<button onClick={() => onHandleClick(true)} className='justify-self-end text-[#E5004F] bg-white shadow-md font-bold py-2 px-1 xl:px-4 rounded-md'>+</button>
						</div>
					</div> */}
				</div>
				<div className='space-y-2 flex-col'>
					<button className='w-full text-white bg-[#E5004F] rounded-lg shadow-lg px-4 py-2 font-medium'>Comprar agora!</button>
					<button className='w-full text-white bg-[#E5004F] rounded-lg shadow-lg px-4 py-2 font-medium'>Colocar no carrinho</button>
					<span className='text-xs font-bold text-blakc'>Este produto é vendido e entregue por User Y. A Global Rockets garante a sua compra, do pedido à entrega. saiba mais</span>
				</div>
			</div>
		</div>
	)
}
