import CarrinhoComponent from '@/components/carrinho/CarrinhoComponent'
import React from 'react'

export default async function page() {
    return (
        <main className='w-full flex justify-center pt-8'>
            <CarrinhoComponent/>
        </main>
    )
}