'use client'
import React from 'react'
import ProductItem from './ProductItem'
import { chevronLeftIcon, chevronRightIcon } from './icons'

export default function ProductsList() {
    return (
        <div className="w-screen m-2 flex items-center overflow-x-hidden">
            {chevronLeftIcon()}
            <div className="flex overflow-x-hidden no-scrollbar">
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
            {chevronRightIcon()}
        </div>
    )
}