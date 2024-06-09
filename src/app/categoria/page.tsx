import ProductItem from '@/components/produto/ProductItem'
import AsideComponent from '@/components/AsideComponent'
import React from 'react'

export default async function page() { // props that will get to create the products
    const categoria = {name : "Categoria x"}
    const props = { estrelas: "0" }
    return (
        <main>
            <div className='flex gap-4 w-full h-full px-8 pt-8 bg-defaultBackground'>
                <AsideComponent estrelas={props.estrelas}/>
                <div className='w-full flex flex-col gap-5'>
                    <h1 className='text-white text-3xl pl-3'>{categoria.name}</h1>
                    <div className='grid grid-cols-6 align-center'>
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                    </div>
                </div>
            </div>
        </main>
    )
}