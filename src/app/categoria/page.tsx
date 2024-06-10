import ProductItem from '@/components/produto/ProductItem'
import AsideComponent from '@/components/AsideComponent'
import React from 'react'

export default async function page() { // props that will get to create the products
    const categoria = {name : "Categoria x"}
    const prop = { estrelas: "0" }

    return (
        <main>
            <div className='flex gap-4 w-full h-full px-8 pt-8 bg-defaultBackground'>
                <AsideComponent estrelas={prop.estrelas}/>
                <div className='w-full flex flex-col'>
                    <h1 className='text-white text-3xl pl-3 pb-4'>{categoria.name}</h1>
                    <div className='grid xl:grid-cols-4 min-[1050px]:grid-cols-3 min-[800px]:grid-cols-2 align-center'>
                        <ProductItem area='component'/>
                        <ProductItem area='component'/>
                        <ProductItem area='component'/>
                        <ProductItem area='component'/>
                        <ProductItem area='component'/>
                    </div>
                </div>
            </div>
        </main>
    )
}