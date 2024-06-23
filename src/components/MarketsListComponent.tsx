'use client'
import Link from 'next/link';
import React, { useState } from 'react'

export default function MarketsListComponent() {
    const mercados = ["Mercado 1", "Mercado 2", "Mercado 3", "Mercado 4", "Mercado 5", "Mercado 6", "Mercado 7", "Mercado 8", "Mercado 9"];
	const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedMarket, setSelectedMarket] = useState('Todos');

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleSelectMarket = (market: any) => {
        setSelectedMarket(market);
        setDropdownOpen(false);
    };

    return (
        <div className='w-full py-2 px-2 space-x-4 flex bg-white text-black text-xs font-semibold justify-start items-center'>
            <div className="relative inline-block text-left">
                <div>
                    <button
                        type="button"
                        className="flex text-nowrap justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700"
                        id="options-menu"
                        aria-haspopup="true"
                        aria-expanded="true"
                        onClick={toggleDropdown}
                    >
                        {selectedMarket}
                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                {dropdownOpen && (
                    <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <button
                                onClick={() => handleSelectMarket("Todos")}
                                className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                                role="menuitem"
                            >
                                Todos
                            </button>
                            {mercados.map((market, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSelectMarket(market)}
                                    className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                                    role="menuitem"
                                >
                                    {market}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className='w-full items-center justify-center flex space-x-14'>
                {mercados.map((mercado, index) => (
                    <Link key={index} href={`#${mercado.replace(/\s+/g, '').toLowerCase()}`}>{mercado}</Link>
                ))}
            </div>
        </div>
    )
}
