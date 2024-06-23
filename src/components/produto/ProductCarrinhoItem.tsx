'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ProductsList } from '../carrinho/CarrinhoComponent'

interface ProductInterface{
    product: ProductsList,
    setState: Function,
    setDelete: Function,
    productsList: Array<ProductsList>,
}

export default function ProductCarrinhoItem({product, productsList, setState, setDelete}: ProductInterface) {
   const [itemAmount, setItemAmount] = useState(product.quantidade)

	function onHandleClick(plus: boolean) {
		if (plus == true && itemAmount < 99) {
            setState(itemAmount + 1, product.key)
            setItemAmount(itemAmount + 1)
		} else if (itemAmount > 1) {
            setState(itemAmount - 1, product.key)
            setItemAmount(itemAmount - 1)
		}
	}
    
    return (
        <div className='flex'>
            <Image 
                    src={product.imgSrc} 
                    alt={product.nomeProduto}
                    width={150}
                    height={150}
                />
            <div className='w-full pt-3'>
                <div className='flex justify-between'>
                    <h1 className='text-2xl'>{product.nomeProduto}</h1>
                    <h1 className='text-xl font-bold'>{`R$ ${(itemAmount * product.preco).toFixed(2)}`}</h1>
                </div>
                <div>
                    <span className='text-xs'>
                        Vendido por 
                        <span className='font-bold'> {product.vendidoPor}</span>
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
                    <button onClick={() => setDelete(product.key)}>excluir</button>
				</div>
            </div>
        </div>
    )
}