'use client'
import React, { useEffect, useState } from 'react'
import { rocketIcon } from './icons'
import Link from 'next/link'

export default function HeaderComponent() {
    const [windowWidth, setWindowWidth] = useState(0);

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

    return (
        <div className='w-full bg-[#e5004f]'>
            <div className='flex py-4 px-12 items-center justify-start space-x-16'>
                <Link href={'/'}>
                    <div className='text-white text-lg font-semibold flex flex-wrap mr-2'>
                        {<span>Global Rockets</span>}
                        {<span>{rocketIcon('h-8 w-8')}</span>}
                    </div>
                </Link>
            </div>

        </div>
    )
}
