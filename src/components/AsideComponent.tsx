
import { starIcon } from "./icons"

interface AsideProps{
    estrelas: string
}

export default function AsideComponent(props: AsideProps ) {
    //console.log(props?.numStar === "1" ? true : false)
    return (
        <aside className='rounded-lg bg-white p-8 h-fit'>
            <div className="flex flex-col gap-4 items-center">
                <span className="text-xl">Faixa de preços</span>
                <span className="flex gap-2 h-8 items-center">
                    <input type="text" inputMode="numeric" className="border border-neutral-400 w-16 rounded-md h-8 text-center" placeholder="Min" />
                    a
                    <input type="text" inputMode="numeric" className="border border-neutral-400 w-16 rounded-md h-8 text-center" placeholder="Max" />
                </span>
                <div className="flex flex-col">
                    <span className="text-xl text-center mb-2">Estrelas</span>
                    <span className="flex gap-1"> <input type="checkbox" className="star" checked={props?.estrelas === "1" ? true : false}></input>{starIcon('h-6 w-6', '#F2C832')} {starIcon('h-6 w-6')} {starIcon('h-6 w-6')} {starIcon('h-6 w-6')} {starIcon('h-6 w-6')}</span>
                    <span className="flex gap-1"> <input type="checkbox" checked={props?.estrelas === "2" ? true : false}></input>{starIcon('h-6 w-6', '#F2C832')} {starIcon('h-6 w-6', '#F2C832')} {starIcon('h-6 w-6')} {starIcon('h-6 w-6')} {starIcon('h-6 w-6')}</span>
                    <span className="flex gap-1"> <input type="checkbox" checked={props?.estrelas === "3" ? true : false}></input>{starIcon('h-6 w-6', '#F2C832')} {starIcon('h-6 w-6', '#F2C832')} {starIcon('h-6 w-6', '#F2C832')} {starIcon('h-6 w-6')} {starIcon('h-6 w-6')}</span>
                    <span className="flex gap-1"> <input type="checkbox" checked={props?.estrelas === "4" ? true : false}></input>{starIcon('h-6 w-6', '#F2C832')} {starIcon('h-6 w-6', '#F2C832')} {starIcon('h-6 w-6', '#F2C832')} {starIcon('h-6 w-6', '#F2C832')} {starIcon('h-6 w-6')}</span>
                    <span className="flex gap-1"> <input type="checkbox" className="star2" value={'on'}></input>{starIcon('h-6 w-6', '#F2C832')} {starIcon('h-6 w-6', '#F2C832')} {starIcon('h-6 w-6', '#F2C832')} {starIcon('h-6 w-6', '#F2C832')} {starIcon('h-6 w-6', '#F2C832')}</span>
                </div>
                
                <button className="border border-neutral-400 w-16 rounded-md"> Filtrar </button>
            </div>
        </aside>
    )
}