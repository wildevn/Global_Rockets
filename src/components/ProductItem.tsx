import React from 'react'

export default function ProductItem() {
    return (
        <div className="w-44 h-52 m-3.5">
            <div className="w-full h-productDiv mb-2.5 bg-white rounded-lg">
                <div className="m-auto"> 
                    <img src="@/../public/imgs/solupan_product.png" alt="solupan" />
                </div>
            </div>
            <div className="w-full text-center font-semibold px-2 py-1 flex-col bg-white rounded-lg">
                <p className="text-xs text-black px-1.5 w-full">Detergente Mata Ratos Solupan 5 litros-Fa+COM3467</p>
                <p className="text-[#E5004F] text-lg font-black w-full">R$22,97</p>
            </div>
        </div>
    )
}