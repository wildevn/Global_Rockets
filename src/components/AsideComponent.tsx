'use client'
import React, { useState } from 'react'
import { starIcon } from "./icons"

interface AsideProps{
    estrelas: string
}

export default function AsideComponent(props: AsideProps) {
    const [state, setState] = useState(props.estrelas)

    function onHandleClick(id: string) {
        state === id ? setState("0") : setState(id)
    }

    return (
        <aside className='rounded-lg bg-white p-8 h-fit'>
            <div className="flex flex-col gap-4 items-center">
                <span className="text-xl">Faixa de preços</span>
                <span className="flex gap-2 h-8 items-center">
                    <input type="text" inputMode="numeric" className="border border-neutral-400 w-16 rounded-md h-8 text-center" placeholder="Min" />
                    a
                    <input type="text" inputMode="numeric" className="border border-neutral-400 w-16 rounded-md h-8 text-center" placeholder="Max" />
                </span>
                <div id={state} className="flex flex-col div-estrelas">
                    <span className="text-xl text-center mb-2">Estrelas</span>
                    <span className="flex gap-1"> <input type="checkbox" checked={state === "1" ? true : false} onClick={() => onHandleClick("1")}></input>{starIcon('h-6 w-6', '#F2C832')} {starIcon('h-6 w-6')} {starIcon('h-6 w-6')} {starIcon('h-6 w-6')} {starIcon('h-6 w-6')}</span>
                    <span className="flex gap-1"> <input type="checkbox" checked={state === "2" ? true : false} onClick={() => onHandleClick("2")}></input>{starIcon('h-6 w-6', '#F2C832')} {starIcon('h-6 w-6', '#F2C832')} {starIcon('h-6 w-6')} {starIcon('h-6 w-6')} {starIcon('h-6 w-6')}</span>
                    <span className="flex gap-1"> <input type="checkbox" checked={state === "3" ? true : false} onClick={() => onHandleClick("3")}></input>{starIcon('h-6 w-6', '#F2C832')} {starIcon('h-6 w-6', '#F2C832')} {starIcon('h-6 w-6', '#F2C832')} {starIcon('h-6 w-6')} {starIcon('h-6 w-6')}</span>
                    <span className="flex gap-1"> <input type="checkbox" checked={state === "4" ? true : false} onClick={() => onHandleClick("4")}></input>{starIcon('h-6 w-6', '#F2C832')} {starIcon('h-6 w-6', '#F2C832')} {starIcon('h-6 w-6', '#F2C832')} {starIcon('h-6 w-6', '#F2C832')} {starIcon('h-6 w-6')}</span>
                    <span className="flex gap-1"> <input type="checkbox" checked={state === "5" ? true : false} onClick={() => onHandleClick("5")}></input>{starIcon('h-6 w-6', '#F2C832')} {starIcon('h-6 w-6', '#F2C832')} {starIcon('h-6 w-6', '#F2C832')} {starIcon('h-6 w-6', '#F2C832')} {starIcon('h-6 w-6', '#F2C832')}</span>
                </div>
                
                <button className="border border-neutral-400 w-16 rounded-md"> Filtrar </button>
            </div>
        </aside>
    )
}