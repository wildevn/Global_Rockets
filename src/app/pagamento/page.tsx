import PagamentoComponent, {ProdutoInfo} from '@/components/pagamento/PagamentoComponent'
import React from 'react'

export default async function page(props: ProdutoInfo) {
    console.log('teste',props)
    return (
        <main className='w-full flex justify-center pt-8'>
            <PagamentoComponent preco={props.preco}/>
        </main>
    )
}
