
import React from 'react'
import Card from './Card';


/**
 * This function takes in an array of user objects and renders them as cards.
 * It returns a JSX element which is a div containing all the cards.
 * The div has a class of "Cards" which is defined in the CSS file.
 */
function Cards({users}){

    return (
        
        <div className="Cards h-[90%] w-full bg-linear-to-t from-sky-400 to-indigo-500 flex items-center justify-center gap-[10px] flex-wrap overflow-y-scroll pr-[10px] pl-[10px] pt-[0px] ">

           
            <Card users={users}></Card>

        </div>
    )
}

// The Cards component is exported as the default export of this file.
export default Cards;
