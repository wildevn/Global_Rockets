'use client'
import React, { useEffect, useState } from 'react'
import { clipboardIcon, rocketIcon, sandwichIcon, searchIcon, shopCartIcon, toolsIcon, userIcon } from './icons'
import Link from 'next/link'

export default function HeaderComponent() {
    const [windowWidth, setWindowWidth] = useState(0);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const showText = windowWidth >= 951;
    const showBigIcon = windowWidth <= 950;
    const showSmallIcon = windowWidth > 1040
    
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className='w-full bg-[#e5004f]'>
            <div className='flex py-4 px-12 items-center justify-center space-x-16'>
                <Link href={'/'}>
                    <div className='text-white text-lg font-semibold flex flex-wrap mr-2'>
                        {showText &&<span>Global Rockets</span>}
                        {showBigIcon &&<span>{rocketIcon('h-8 w-8')}</span>}
                        {showSmallIcon &&<span className='pt-1'>{rocketIcon()}</span>}
                    </div>
                </Link>
                <div className='flex'>
                    <input type="text" placeholder="Buscar" className='focus:outline-none min-[1200px]:w-96 bg-white text-sm px-6 py-1 rounded-l-md border border-[#B3B3B3]'/>
                    <div className='border border-[#7E002C] p-1 rounded-r-md bg-[#B4003E]'>
                        <span className='text-white'>{searchIcon()}</span>
                    </div>
                </div>
                <div className='flex text-white font-semibold text-xs space-x-12'>
                    <div className='flex justify-center items-center'>
                        <span className='mr-2'>{userIcon('h-8 w-8')}</span>
                        <Link href={'/login'} className='underline'>Entrar / Cadastrar</Link>
                    </div>
                    <div className='flex space-x-2'>
                        <Link href={`#`}>{clipboardIcon('h-8 w-8')}</Link>
                        <Link href={`/carrinho`}>{shopCartIcon('h-8 w-8')}</Link>
                        <Link href={`#`}>{toolsIcon('h-8 w-8')}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
