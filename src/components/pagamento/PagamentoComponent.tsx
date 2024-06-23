import { parcelasConstList } from "../data/constants/pagamentoConst"

export interface ProdutoInfo{
    preco: number,
}

export default function PagamentoComponent({preco
    
} : ProdutoInfo) {
    const estados = [' ', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES','GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI','RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']

    return (
        <div className="max-[900px]:w-[90%] min-[900px]:w-[900px] flex items-center box-border gap-8">
            <form action="" className="w-[80%] flex flex-col items-center bg-white rounded-xl">
                <div className="w-full text-2xl font-semibold p-5">
                    <h1>Informações para a entrega</h1>
                </div>
                <hr className="border w-[95%]" />
                <div className="w-full flex flex-wrap gap-x-4 p-8">
                    <div>
                        <label htmlFor="nome">Nome: </label>
                        <input type="text" placeholder="Nome e sobrenome" id="nome" className='w-72 rounded-lg border-2 border-slate-200 outline-none p-2.5 pl-4 ml-2 mb-4.5 text-sm' />
                    </div>

                    <div>
                        <label htmlFor="telefone">Telefone: </label>
                        <input type="tel" placeholder="(XX) XXXX-XXXX" id="telefone" className='w-36 rounded-lg border-2 border-slate-200 outline-none p-2.5 pl-4 ml-2 mb-4.5 text-sm' />
                    </div>

                    <div>
                        <label htmlFor="endereco">Endereço: </label>
                        <input type="text" placeholder="Rua, número " id="endereco" className='w-48 rounded-lg border-2 border-slate-200 outline-none p-2.5 pl-4 ml-2 mb-4.5 text-sm' />
                    </div>

                    <div>
                        <label htmlFor="cep">CEP: </label>
                        <input type="text" placeholder="XXXXX-XX " id="cep" className='w-28 rounded-lg border-2 border-slate-200 outline-none p-2.5 pl-4 ml-2 mb-4.5 text-sm' />
                    </div>

                    <div>
                        <label htmlFor="cidade">Cidade: </label>
                        <input type="text" placeholder="Cidade " id="cidade" className='w-42 rounded-lg border-2 border-slate-200 outline-none p-2.5 pl-4 ml-2 mb-4.5 text-sm' />
                    </div>

                    <div >
                        <label htmlFor="estado" className="pr-2">Estado: </label>
                        <select name="estado" id="estado" className="rounded-lg border-2 p-2 border-slate-200 outline-none">
                            {estados.map((estado, index) => (
                                <option key={index} value={estado} disabled={estado === ' '}>{estado}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <hr className="border w-[95%]" />

                <div className="w-full text-2xl font-semibold p-5">
                    <h1>Informações do cartão de crédito</h1>
                </div>
                <hr className="border w-[95%]" />
                <div className="w-full flex flex-wrap gap-x-4 p-8">
                    <div>
                        <label htmlFor="nomeTitularCartao">Nome do titular: </label>
                        <input type="text" placeholder="Nome presente no cartão" id="nomeTitularCartao" className='w-72 rounded-lg border-2 border-slate-200 outline-none p-2.5 pl-4 ml-2 mb-4.5 text-sm' />
                    </div>

                    <div>
                        <label htmlFor="numeroCartao">Número do cartão: </label>
                        <input type="text" placeholder="XXXX XXXX XXXX XXXX" id="numeroCartao" className='w-48 rounded-lg border-2 border-slate-200 outline-none p-2.5 pl-4 ml-2 mb-4.5 text-sm' />
                    </div>

                    <div>
                        <label htmlFor="validade">Validade do cartão: </label>
                        <input type="month" id="validade" className='w-44 rounded-lg border-2 border-slate-200 outline-none p-2.5 pl-4 ml-2 mb-4.5 text-sm' />
                    </div>

                    <div>
                        <label htmlFor="cvv">Código de segurança: </label>
                        <input type="numeric" placeholder="CVV" id="cvv" className='w-24 rounded-lg border-2 border-slate-200 outline-none p-2.5 pl-4 ml-2 mb-4.5 text-sm' />
                    </div>

                    <div className="pb-4">
                        <label htmlFor="parcelas" className="pr-2">Parcelas: </label>
                        <select name="parcelas" id="parcelas" className="rounded-lg border-2 p-2 border-slate-200 outline-none">
                            {parcelasConstList.map((item: any) => (
                                console.log(item.vezes === 1 ? preco : (preco * 1.1) / item.vezes),
                                <option key={item.id} value={item.vezes}>
                                    {`${item.vezes}x de ${item.vezes === 1 ? preco : (preco * 1.1) / item.vezes}`}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </form>

            <div className="p-1 px-2 max-[350px]:w-[300px] min-[300px]:w-[250px] self-start bg-white rounded-xl">
                <div className="p-4 text-sm">
                    <h2 className="text-xl text-center font-semibold">Resumo do pedido</h2>
                    <div className='pt-6 flex justify-between'>
                    </div>
                    <div className='flex justify-between pb-1'>
                        <span>frete</span>
                        <span>grátis</span>
                    </div>
                    <hr className='border' />
                    <div className='pt-1 pb-2 flex justify-between'>
                        <span className='font-semibold'>total</span>
                        <div className='text-end'>
                            <p>em 1x no cartão</p>
                        </div>
                    </div>

                    <button className='w-full rounded-lg p-2.5 text-center text-base text-white bg-defaultRed hover:bg-defaultDarkerRed drop-shadow-[-1px_4px_2px_rgba(0,0,0,0.45)]'>Finalizar compra</button>
                </div>
            </div>
        </div >
    )
}