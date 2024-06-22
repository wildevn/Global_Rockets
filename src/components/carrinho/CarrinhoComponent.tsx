'use client'
import React, { useState, useEffect } from 'react'
import ProductCarrinhoItem from "../produto/ProductCarrinhoItem"
import Link from 'next/link'

export default function CarrinhoComponent() {
    const [productsList, setProductsList] = useState({
        quantidadeTotal: 2,
        precoTotal: 44.94,
        produtos: [
            {
                key: "solupan 1",
                qtd: 1,
                preco: 22.47,
            },
            {
                key: "solupan 2",
                qtd: 1,
                preco: 22.47
            }
        ]
    })

    // useEffect(() => {
    //     if(productsList.refresh === 1) {
    //         var quantidadeTotal = 0
    //         var precoTotal = 0
    //         for(let i = 0; i < productsList.produtos.length; i++) {
    //             quantidadeTotal += productsList.produtos[i].qtd
    //             precoTotal += productsList.produtos[i].preco * productsList.produtos[i].qtd
    //         }
    //         setProductsList({...productsList, refresh: 0, quantidadeTotal, precoTotal})
    //     }
    // }, [productsList.refresh])

    useEffect(() => {
        
    })


    return (
        <div className="max-[900px]:w-[90%] min-[900px]:w-[900px] flex items-center box-border gap-8">
            <div className="w-[80%] flex flex-col items-center bg-white rounded-xl">
                <div className="w-full text-3xl font-semibold p-5">
                    <h1>Carrinho de compras</h1>
                </div>
                <hr className="border w-[95%]" />
                <div className="w-full p-8">
                    <ProductCarrinhoItem
                        src={'/galaoDeDetergenteAutomotivo.png'}
                        nomeProduto={'solupan 1'} 
                        preco={22.47}
                        vendidoPor={"ninguemAtéEntao"}
                        quantidade={1}
                        setState={setProductsList} 
                        itemsState={productsList}/>
                    <hr className="border w-[95%]" />

                    <ProductCarrinhoItem
                        src={'/galaoDeDetergenteAutomotivo.png'}
                        nomeProduto={'solupan 2'}
                        preco={22.47} 
                        vendidoPor={"ninguemAtéEntao"} 
                        quantidade={1} 
                        setState={setProductsList}
                        itemsState={productsList}/>
                    <hr className="border w-[95%]" />
                </div>
            </div>

            <div className="p-1 px-2 max-[350px]:w-[300px] min-[300px]:w-[250px] self-start bg-white rounded-xl">
                <div className="p-4 text-sm">
                    <h2 className="text-xl text-center font-semibold">Resumo do pedido</h2>
                    <div className='pt-6 flex justify-between'>
                        <span>{productsList.quantidadeTotal === 1 ? <>{productsList.quantidadeTotal} produto</> : <>{productsList.quantidadeTotal} produtos</>}</span>
                        <span>{`R$ ${productsList.precoTotal.toFixed(2)}`}</span>
                    </div>
                    <div className='flex justify-between pb-1'>
                        <span>frete</span>
                        <span>grátis</span>
                    </div>
                    <hr className='border' />
                    <div className='pt-1 pb-2 flex justify-between'>
                        <span className='font-semibold'>total</span>
                        <div className='text-end'>
                            <p className='font-semibold text-base'>{`R$ ${productsList.precoTotal.toFixed(2)}`}</p>
                            <p>em 1x no cartão</p>
                            <p>ou {`R$ ${(productsList.precoTotal * 1.1).toFixed(2)}`} em até 12x</p>
                        </div>
                    </div>

                    <button className='w-full rounded-lg p-2.5 text-center text-base text-white bg-defaultRed hover:bg-defaultDarkerRed drop-shadow-[-1px_4px_2px_rgba(0,0,0,0.45)]'>
                        <Link href={`pagamento`}>
                            Ir para o pagamento
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}