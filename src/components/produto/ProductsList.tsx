'use client'
import React from 'react'
import ProductItem from './ProductItem'
import { chevronLeftIcon, chevronRightIcon } from '../icons'

export default function ProductsList() {
    return (
        <div className="w-full h-72 flex items-center overflow-x-hidden">
            <div className='w-[5%]'>
                {chevronLeftIcon()}
            </div>
            <div className="w-[90%] flex flex-nowrap overflow-x-hidden h-full no-scrollbar">
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
            <div className='w-[5%]'>
                {chevronRightIcon()}
            </div>
        </div>
    )
}