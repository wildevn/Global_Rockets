'use client'
import React, { useState } from 'react'
import ProductCarrinhoItem from "../produto/ProductCarrinhoItem"
import Link from 'next/link'
import test from 'node:test'


export default function CarrinhoComponent() {
    const [itemAmount, setItemAmount] = useState(0)
    const [price, setPrice] = useState(10)

    function teste() {
        console.log(price)
    }

    return (
        <div className="max-[900px]:w-[90%] min-[900px]:w-[900px] flex items-center box-border gap-8">
            <div className="w-[80%] flex flex-col items-center bg-white rounded-xl">
                <div className="w-full text-3xl font-semibold p-5">
                    <h1>Carrinho de compras</h1>
                </div>
                <hr className="border w-[95%]" />
                <div className="w-full p-8">
                    <ProductCarrinhoItem src={'/galaoDeDetergenteAutomotivo.png'} nome={'Solupan'} preco={22.47} vendidoPor={"ninguemAtéEntao"} />
                    <hr className="border w-[95%]" />
                    <ProductCarrinhoItem src={'/galaoDeDetergenteAutomotivo.png'} nome={'Solupan'} preco={22.47} vendidoPor={"ninguemAtéEntao"} />
                    <hr className="border w-[95%]" />
                </div>
            </div>

            <div className="p-1 px-2 max-[350px]:w-[300px] min-[300px]:w-[250px] self-start bg-white rounded-xl">
                <div className="p-4 text-sm">
                    <h2 className="text-xl text-center font-semibold">Resumo do pedido</h2>
                    <div className='pt-6 flex justify-between'>
                        <span>{itemAmount > 1 ? <>{itemAmount} produto</> : <>{itemAmount} produtos</>}</span>
                        <span>{`R$ ${price.toFixed(2)}`}</span>
                    </div>
                    <div className='flex justify-between pb-1'>
                        <span>frete</span>
                        <span>grátis</span>
                    </div>
                    <hr className='border' />
                    <div className='pt-1 pb-2 flex justify-between'>
                        <span className='font-semibold'>total</span>
                        <div className='text-end'>
                            <p className='font-semibold text-base'>{`R$ ${price.toFixed(2)}`}</p>
                            <p>em 1x no cartão</p>
                            <p>ou {`R$ ${(price * 1.1).toFixed(2)}`} em até 12x</p>
                        </div>
                    </div>

                    <Link href={`pagamento`} className='w-full rounded-lg p-2.5 text-center text-base text-white bg-defaultRed hover:bg-defaultDarkerRed drop-shadow-[-1px_4px_2px_rgba(0,0,0,0.45)]'>
                        Ir para o pagamento
                    </Link>
                </div>
            </div>
        </div>
    )
}