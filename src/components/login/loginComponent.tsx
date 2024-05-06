'use client'
import React from 'react'

export default function LoginComponent() {
    return (
        <div className='flex flex-wrap items-center justify-items-center w-screen h-screen'>
            <div className='flex-none bg-white p-8 m-10 rounded-xl drop-shadow-md'>
                <p className='text-center font-bold text-3xl mb-6'>Entrar</p>
                <input type="text" placeholder='Email' className='w-80 rounded-lg border p-2.5 mb-5'/> 
                <br/>
                <input type="text" placeholder='Senha' className='w-80 rounded-lg border p-2.5 mb-5'/>
                <br/>
                <button className='w-80 rounded-lg p-2.5 text-center text-white bg-defaultRed drop-shadow-md'>Entrar</button>
            </div>
            <div className='flex-none bg-white p-8 m-10 rounded-xl drop-shadow-md'>
                <p className='text-center font-bold text-3xl mb-6'>Cadastrar-se</p>
                <input type="text" placeholder='Email' className='w-80 rounded-lg border p-2.5 mb-5'/> 
                <br/>
                <input type="text" placeholder='Senha' className='w-80 rounded-lg border p-2.5 mb-5'/>
                <br/>
                <input type="text" placeholder='Confirmar Senha' className='w-80 rounded-lg border p-2.5 mb-5'/>
                <br/>
                <button className='w-80 rounded-lg p-2.5 text-center text-white bg-defaultRed drop-shadow-md'>Cadastrar</button>
            </div>
        </div>
    )
}