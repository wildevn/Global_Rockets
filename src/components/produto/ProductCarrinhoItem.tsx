'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ProductsList } from '../carrinho/CarrinhoComponent'

interface ProductInterface extends ProductsList{
    setState: Function,
    productsList: Array<ProductsList>,
}

export default function ProductCarrinhoItem({ imgSrc, key, nomeProduto, preco, quantidade, vendidoPor, productsList, setState}: ProductInterface) {
   const [itemAmount, setItemAmount] = useState(quantidade)

	function onHandleClick(plus: boolean) {
        let produtos = productsList
		if (plus == true && itemAmount < 99) {
            for(let i = 0; i < productsList.length; i++){
                if(productsList[i].key === key) {
                    produtos[i] = { ...produtos[i], quantidade: itemAmount + 1}
                    setState([...produtos])
                }
            }
            setItemAmount(itemAmount + 1)
		} else if (itemAmount > 1) {
            for(let i = 0; i < productsList.length; i++){
                if(productsList[i].key === key) {
                    produtos[i] = { ...produtos[i], quantidade: itemAmount - 1}
                    setState([...produtos])
                }
            }
            setItemAmount(itemAmount - 1)
		}
	}

    function onHandleDelete() {
        let produtos = productsList
        for(let i = 0; i < productsList.length; i++){
            if(productsList[i].key === key) {
                produtos[i] = { ...produtos[i], quantidade: 0}
                setState([...produtos])
            }
        }
        setItemAmount(0)
    }

    return (
        <div className='flex'>
            <Image 
                    src={imgSrc} 
                    alt={nomeProduto}
                    width={150}
                    height={150}
                />
            <div className='w-full pt-3'>
                <div className='flex justify-between'>
                    <h1 className='text-2xl'>{nomeProduto}</h1>
                    <h1 className='text-xl font-bold'>{`R$ ${(itemAmount * preco).toFixed(2)}`}</h1>
                </div>
                <div>
                    <span className='text-xs'>
                        Vendido por 
                        <span className='font-bold'> {vendidoPor}</span>
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
                    <button onClick={onHandleDelete}>excluir</button>
				</div>
            </div>
        </div>
    )
}