'use client'
import React from 'react'
import { eyeLashIcon } from '../icons'

export default function LoginComponent() {

    /*function changeVisibility(span: HTMLElement) {
        var eye_element:SVGElement = span.firstChild
        if(eye_element.id === 'eyeLashIcon') {
            console.log('é sim')
        }
    }
    /*function changeVisibility(span) {
        var eye_element = span.firstChild
        if(eye_element.id === 'eyeLashIcon')
            console.log('É sim')
    }*/

    return (
        <div className='flex flex-wrap items-center justify-center w-screen h-screen bg-loginBackground bg-cover'>
            <div className='flex-none bg-white p-9 m-10 rounded-xl drop-shadow-md'>
                <p className='text-center font-bold text-3xl mb-7'>Entrar</p>
                <input type="text" placeholder='Email' className='w-80 rounded-lg border-2 border-slate-200 outline-none p-2.5 pl-4 mb-4.5 text-sm'/> 
                <div className='flex w-80 rounded-lg border-2 mb-8'>
                    <input type="password" placeholder='Senha' className='w-full outline-none rounded-lg p-2.5 pl-4 text-sm'/>
                    <span className='static self-center float-right pr-4 opacity-30'>{eyeLashIcon()}</span>
                </div>
                <button className='w-80 rounded-lg p-2.5 mb-3 text-center text-white bg-defaultRed hover:bg-defaultDarkerRed drop-shadow-[-1px_4px_2px_rgba(0,0,0,0.45)]'>Entrar</button>
            </div>
           
            <div className='flex-none bg-white p-9 m-10 rounded-xl drop-shadow-md'>
                <p className='text-center font-bold text-3xl mb-7'>Cadastrar-se</p>
                <input type="text" placeholder='Email' className='w-80 rounded-lg border-2 border-slate-200 outline-none p-2.5 pl-4 mb-4.5 text-sm'/> 
                <div className='flex w-80 rounded-lg border-2 mb-4'>
                    <input type="password" placeholder='Senha' className='w-full outline-none rounded-lg p-2.5 pl-4 text-sm'/>
                    <span className='static self-center float-right pr-4 opacity-30'>{eyeLashIcon()}</span>
                </div>
                <div className='flex w-80 rounded-lg border-2 mb-8'>
                    <input type="password" placeholder='Confirmar Senha' className='w-full outline-none rounded-lg p-2.5 pl-4 text-sm'/>
                    <span className='static self-center float-right pr-4 opacity-30'>{eyeLashIcon()}</span>
                </div>
                <button className='w-80 rounded-lg p-2.5 mb-3 text-center text-white bg-defaultRed hover:bg-defaultDarkerRed drop-shadow-[-1px_4px_2px_rgba(0,0,0,0.45)]'>Cadastrar</button>
            </div>
        </div>
    )
}