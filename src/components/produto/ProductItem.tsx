'use client'
import Image from 'next/image'
import React from 'react'

export default function ProductItem() {
    return (
        <div className="min-w-44 h-52 m-3.5">
            <div className="w-full h-productDiv flex items-center justify-center mb-2.5 bg-white rounded-lg">
                <Image 
                    className='flex '   
                    src={'/galaoDeDetergenteAutomotivo.png'} 
                    alt={'Solupan'}
                    width={150}
                    height={150}
                />
            </div>
            <div className="w-full text-center font-semibold px-2 py-1 flex-col bg-white rounded-lg">
                <p className="text-xs text-black px-1.5 w-full">Detergente Mata Ratos Solupan 5 litros-Fa+COM3467</p>
                <p className="text-[#E5004F] text-lg font-black w-full">R$22,97</p>
            </div>
        </div>
    )
}