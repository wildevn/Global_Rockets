'use client'
import React, { useState } from 'react'
import ProductItem from './ProductItem'
import { chevronLeftIcon, chevronRightIcon } from '../icons'

export default function ProductsList() {
    const [scrollbarPos, setScrollbarPos] = useState(150)

    function onHandleScroll(increment: boolean) {
        if(increment && scrollbarPos < 3344) {
            setScrollbarPos(scrollbarPos + 176)
        }
        else if(!increment && scrollbarPos > -3000) {
            setScrollbarPos(scrollbarPos - 176)
        }
    }

    return (
        <div className="w-full h-72 flex items-center overflow-x-hidden pt-4 mb-6">
            <div className='w-[5%]'>
                <span onClick={() => onHandleScroll(true)} className='w-full flex items-center justify-center'>
                    {chevronLeftIcon()}
                </span>
            </div>
            <div className="w-[90%] h-full overflow-x-hidden">
                <div className={`flex flex-nowrap flex-grow-0 flex-shrink-0 h-full translate-x-[${scrollbarPos}px]`}>
                    <ProductItem area='default' />
                    <ProductItem area='default' />
                    <ProductItem area='default' />
                    <ProductItem area='default' />
                    <ProductItem area='default' />
                    <ProductItem area='default' />
                    <ProductItem area='default' />
                    <ProductItem area='default' />
                    <ProductItem area='default' />
                    <ProductItem area='default' />
                    <ProductItem area='default' />
                    <ProductItem area='default' />
                    <ProductItem area='default' />
                    <ProductItem area='default' />
                    <ProductItem area='default' />
                    <ProductItem area='default' />
                    <ProductItem area='default' />
                    <ProductItem area='default' />
                    <ProductItem area='default' />
                    <ProductItem area='default' />
                    
                </div>
            </div>
            <div className='w-[5%]'>
                <span onClick={() => onHandleScroll(false)} className='w-full flex items-center justify-center'>
                    {chevronRightIcon()}
                </span>
            </div>
        </div>
    )
}
