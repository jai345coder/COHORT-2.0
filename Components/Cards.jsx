import React from 'react'
import Card from './Card';


function Cards({users}){

    return (
        <>
        <div className="Cards h-[90%] w-full bg-linear-to-t from-sky-400 to-indigo-500 flex items-center justify-center gap-[10px] flex-wrap overflow-y-scroll pr-[10px] pl-[10px] pt-[0px]">
            <Card users={users}></Card>
        </div>
       
        </>
    )
}

export default Cards;