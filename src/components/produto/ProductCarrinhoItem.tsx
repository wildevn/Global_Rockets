'use client'

import React, { useState } from 'react'
import Image from 'next/image'


interface ProductsStateList {
    key: string,
    qtd: number,
    preco: number,
}

interface ProductsState {
    quantidadeTotal: number,
    precoTotal: number,
    produtos: Array<ProductsStateList>
}

interface ProductInterface{
    src: string,
    nomeProduto: string,
    preco: number,
    vendidoPor: string,
    quantidade: number,
    setState: Function,
    itemsState: ProductsState,
}

export default function ProductCarrinhoItem({ src, nomeProduto, preco, vendidoPor, quantidade, setState, itemsState }: ProductInterface) {
   const [itemAmount, setItemAmount] = useState(quantidade)

	function onHandleClick(plus: boolean) {
        let produtos = itemsState.produtos
		if (plus == true && itemAmount < 99) {
            for(let i = 0; i < itemsState.produtos.length; i++){
                if(itemsState.produtos[i].key === nomeProduto) {
                    produtos[i] = { key: nomeProduto, qtd: itemAmount + 1, preco}
                    setState({ ...itemsState, quantidadeTotal: itemsState.quantidadeTotal + 1, precoTotal: itemsState.precoTotal + preco, produtos})
                }
            }
            setItemAmount(itemAmount + 1)
		} else if (itemAmount> 1) {
            for(let i = 0; i < itemsState.produtos.length; i++){
                if(itemsState.produtos[i].key === nomeProduto) {
                    produtos[i] = { key: nomeProduto, qtd: itemAmount - 1, preco}
                    setState({ ...itemsState, quantidadeTotal: itemsState.quantidadeTotal - 1, precoTotal: itemsState.precoTotal - preco, produtos})
                }
            }
            setItemAmount(itemAmount - 1)
		}
	}

    function onHandleDelete() {
        let produtos = itemsState.produtos
        for(let i = 0; i < itemsState.produtos.length; i++){
            if(itemsState.produtos[i].key === nomeProduto) {
                produtos[i] = { key: nomeProduto, qtd: 0, preco}
                setState({ ...itemsState, quantidadeTotal: itemsState.quantidadeTotal - itemAmount, precoTotal: itemsState.precoTotal - itemAmount * preco, produtos})
            }
        }
        setItemAmount(itemAmount + 1)
    }

    return (
        <div className='flex'>
            <Image 
                    src={src} 
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