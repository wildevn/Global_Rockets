'use client'

import React, { useState } from 'react'
import Image from 'next/image'


interface ProductInterface{
    src: string,
    nome: string,
    preco: number,
    vendidoPor: string,
}

export default function ProductCarrinhoItem(produto: ProductInterface) {

    const [itemAmount, setItemAmount] = useState(1)
	
	function onHandleClick(plus: boolean) {
		if (plus == true) {
			if (itemAmount < 99) 
                setItemAmount(itemAmount + 1)
			
		} else if (itemAmount > 1) {
			setItemAmount(itemAmount - 1)
		}
	}

    return (
        <div className='flex'>
            <Image 
                    src={produto.src} 
                    alt={produto.nome}
                    width={150}
                    height={150}
                />
            <div className='w-full pt-3'>
                <div className='flex justify-between'>
                    <h1 className='text-2xl'>{produto.nome}</h1>
                    <h1 className='text-xl font-bold'>{`R$ ${(itemAmount * produto.preco).toFixed(2)}`}</h1>
                </div>
                <div>
                    <span className='text-xs'>
                        Vendido por 
                        <span className='font-bold'> {produto.vendidoPor}</span>
                    </span>
                </div>
                <div className='w-full flex pt-3 items-center gap-5'>
                    <div className='bg-[#dedede] border-[0.5px] border-[#dedede] shadow-[#dedede] shadow-lg rounded-md'>
                        <button className='bg-white font-bold rounded-l-md py-1 px-2'
                            onClick={() => onHandleClick(false)}
                        >-</button>
                        <span className='mx-1'>{itemAmount} unidades</span>
                        <button className='bg-white font-bold text-[#E5004F] rounded-r-md py-1 px-2'
                            onClick={() => onHandleClick(true)}
                        >+</button>
                    </div>
                    <button >excluir</button>
				</div>
            </div>
        </div>
    )
}