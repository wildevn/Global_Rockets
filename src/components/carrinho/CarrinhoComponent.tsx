'use client'
import React, { useState, useEffect, use } from 'react'
import ProductCarrinhoItem from "../produto/ProductCarrinhoItem"
import Link from 'next/link'

export interface ProductsList {
    imgSrc: string,
    key: string,
    nomeProduto: string,
    preco: number,
    quantidade: number,
    vendidoPor: string,
}

export default function CarrinhoComponent() {
    let itemsData: Array<ProductsList> = [
        {   
            key: '1',
            nomeProduto: 'Solupan',
            quantidade: 2,
            imgSrc: '/galaoDeDetergenteAutomotivo.png',
            preco: 22.47,
            vendidoPor: 'João Pedro',  
        },
        {   
            key: '2',
            nomeProduto: 'Solupan',
            quantidade: 5,
            imgSrc: '/galaoDeDetergenteAutomotivo.png',
            preco: 22.47,   
            vendidoPor: 'João', 
        },
        {   
            key: '3',
            nomeProduto: 'Solupan',
            quantidade: 1,
            imgSrc: '/galaoDeDetergenteAutomotivo.png',
            preco: 22.47,   
            vendidoPor: 'Pedro', 
        }
    ]
    const [items, setItems] = useState<ProductsList[]>(itemsData)

//     const [productsComponentList, setProductsComponentList] = useState([<></>]) INICIO COMENTADO
//     const [checkoutInfo, setCheckoutInfo] = useState({
//         quantidadeList: [0],
//         quantidadeTotal: 0,
//         precoTotal: 0,
//     })
//     const [productsList, setProductsList] = useState(cartProducts())

//     function cartProducts(): Array<ProductsList>{
//         var list: Array<ProductsList> = []

//         for(let i = 1; i < 4; i++) {
//             list.push({
//                 imgSrc: '/galaoDeDetergenteAutomotivo.png',
//                 key: `Solupan ${i}`,
//                 nomeProduto: `Solupan`,
//                 preco: 22.47,
//                 quantidade: i,
//                 vendidoPor: `Ze ninguem ${i}`
//             })
//         }
//         return list
//     }

//     useEffect(() => {
//         // checkout
//         let quantidadeList = checkoutInfo.quantidadeList
//         let quantidadeTotal = 0
//         let precoTotal = 0
//         let deletar_produto = -1

//         // inicialização
//         productsList.forEach((produto) => {
//             if(produto.quantidade !== 0) {
//                 if(quantidadeList.length === 0) {
//                     quantidadeList[0] = produto.quantidade
//                     quantidadeTotal += produto.quantidade
//                     precoTotal += produto.quantidade * produto.preco
//                 }
//                 else {
//                     quantidadeList.push(produto.quantidade)
//                     quantidadeTotal += produto.quantidade
//                     precoTotal += produto.quantidade * produto.preco
//                 }             
//             }
//             else{
//                 deletar_produto = productsList.indexOf(produto)
//             }
//         })
//         // if(deletar_produto){
//         //     let produtos = productsList
//         //     produtos.splice(deletar_produto, 1)
//         //     setProductsList([...produtos])
//         // }

//         // productsComponents
// //if(!deletar_produto) {
//             const productsComponents: Array<React.JSX.Element> = []
    
//             productsList.map((produto) => {
//                 productsComponents.push((
//                     <>
//                         <ProductCarrinhoItem
//                             imgSrc={produto.imgSrc}
//                             key={produto.key}
//                             nomeProduto={produto.nomeProduto}
//                             preco={produto.preco}
//                             quantidade={produto.quantidade}
//                             vendidoPor={produto.vendidoPor}
//                             productsList={productsList}
//                             setState={setProductsList}/>
//                         <hr className="border w-[95%]" />
//                     </>
//                 ))
//             })
//             setProductsComponentList([...productsComponents])
//        // }
//         setCheckoutInfo({ quantidadeList, quantidadeTotal, precoTotal })        
//     }, [productsList]) FINAL COMENTADO

    // useEffect(() => {
    //     // productComponentList
    //     const productsComponents: Array<React.JSX.Element> = []

    //     productsList.map((produto) => {
    //         productsComponents.push((
    //             <>
    //                 <ProductCarrinhoItem
    //                     imgSrc={produto.imgSrc}
    //                     key={produto.key}
    //                     nomeProduto={produto.nomeProduto}
    //                     preco={produto.preco}
    //                     quantidade={produto.quantidade}
    //                     vendidoPor={produto.vendidoPor}
    //                     productsList={productsList}
    //                     setState={setProductsList}/>
    //                 <hr className="border w-[95%]" />
    //             </>
    //         ))
    //     })
    //     setProductsComponentList([...productsComponents])
    // }, [checkoutInfo, productsList])

//     <ProductCarrinhoItem
//     src={'/galaoDeDetergenteAutomotivo.png'}
//     nomeProduto={'solupan 1'}
//     preco={22.47}
//     vendidoPor={"ninguemAtéEntao"}
//     quantidade={1}
//     setState={setProductsList}
//     itemsState={productsList} />

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

    return (
        <div className="max-[900px]:w-[90%] min-[900px]:w-[900px] flex items-center box-border gap-8">
            <div className="w-[80%] flex flex-col items-center bg-white rounded-xl">
                <div className="w-full text-3xl font-semibold p-5">
                    <h1>Carrinho de compras</h1>
                </div>
                <hr className="border w-[95%]" />
                <div className="w-full p-8">
                    {items.map((item:any) => (
                        item.quantidade !== 0 && 
                            <ProductCarrinhoItem 
                            product={item}
                            setState={(quantidade: number, key: string) => {
                                const item_alterado = (): Array<ProductsList> => {
                                    var aux: Array<ProductsList> = items
                                    for (let i = 0; i < items.length; i++) {
                                        if (items[i].key === key) {
                                            aux[i].quantidade = quantidade
                                        }
                                    }
                                    return aux
                                }
                                setItems([...item_alterado()])
                            } } setDelete={(key: string) => {
                                const aux: Array<ProductsList> = items
                                for (let i = 0; i < items.length; i++) {
                                    if (items[i].key === key) {
                                        aux.splice(i, 1)
                                    }
                                }
                                setItems(aux)
                            } }/>
                    ))}
                    {/* <ProductCarrinhoItem
                        imgSrc={'/galaoDeDetergenteAutomotivo.png'}
                        key={'solupan 1'}
                        nomeProduto={'solupan 1'}
                        preco={22.47}
                        vendidoPor={"ninguemAtéEntao"}
                        quantidade={1}
                        setState={setProductsList}
                        productsList={productsList} />
                    <hr className="border w-[95%]" />

                    <ProductCarrinhoItem
                        imgSrc={'/galaoDeDetergenteAutomotivo.png'}
                        key={'solupan 2'}
                        nomeProduto={'solupan 2'}
                        preco={22.47}
                        vendidoPor={"ninguemAtéEntao"}
                        quantidade={1}
                        setState={setProductsList}
                        productsList={productsList} />
                    <hr className="border w-[95%]" /> */}
                    {/* {
                        productsComponentList
                    } */}
                </div>
            </div>

            <div className="p-1 px-2 max-[350px]:w-[300px] min-[300px]:w-[250px] self-start bg-white rounded-xl">
                <div className="p-4 text-sm">
                    <h2 className="text-xl text-center font-semibold">Resumo do pedido</h2>
                    <div className='pt-6 flex justify-between'>
                        <span></span>
                        {/* <span>{`R$ ${}`}</span> */}
                    </div>
                    <div className='flex justify-between pb-1'>
                        <span>frete</span>
                        <span>grátis</span>
                    </div>
                    <hr className='border' />
                    <div className='pt-1 pb-2 flex justify-between'>
                        <span className='font-semibold'>total</span>
                        <div className='text-end'>
                            {/* <p className='font-semibold text-base'>{`R$ ${checkoutInfo.precoTotal.toFixed(2)}`}</p> */}
                            <p>em 1x no cartão</p>
                            {/* <p>ou {`R$ ${(checkoutInfo.precoTotal * 1.1).toFixed(2)}`} em até 12x</p> */}
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
