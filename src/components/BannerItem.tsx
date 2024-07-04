'use-client'
import React from 'react'
import Image from 'next/image'
import { chevronLeftIcon, chevronRightIcon } from './icons'

//<div className='float-left start-0.5 top-36'>{chevronLeftIcon()}</div>
//<div className='absolute end-0.5'>{chevronRightIcon()}</div>

export default function BannerItem() {
    return (
        <div className='rounded-lg max-full-hd:w-full w-defaultBannerXl h-72 overflow-x-hidden my-5 bg-white'>
            <Image 
                src={'/acerNotebook.png'}
                width={1080}
                height={288}
                alt={'Banner 1'}/>
        </div>
    )
}