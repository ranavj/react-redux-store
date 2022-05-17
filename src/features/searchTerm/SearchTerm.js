import React from "react";
import { setSearchTerm } from "./searchTermReducer";
export function SearchTerm({searchTerm, dispatch}){

    function searchTermHandle(event){
        dispatch(setSearchTerm(event.target.value));
        console.log(event.target.value)
    }
    return(
        <div className='col-span-12 justify-items-stretch'>
            <input type="text" placeholder='search item' onKeyUp={searchTermHandle} className='border-2 border-black-500 p-1 w-full rounded-lg' />
        </div>
    )
}