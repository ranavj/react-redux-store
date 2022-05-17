import React from "react";
import { currenciesData } from "../../data";
import { chooseCurrency } from "./currencySlice";

export function Currency({currency, dispatch}) {

    const onClickCurrencyHandler = (currency) => {
        dispatch(chooseCurrency(currency))
    }
    return (
        <div className='col-span-12'>
            <p className='text-lg font-bold'>Choose a currency</p>
            {currenciesData.map(createCurrencyButton)}
            {/* <button className='bg-black text-white non-italic p-2 border-white	border-gray-400	outline'>CAD</button>
            <button className='bg-black text-white non-italic p-2 rounded-r-lg border-white border-gray-400	outline	'>EUR</button> */}
        </div>
    )

    function createCurrencyButton(currencyFilter){
        return (
            <button 
                className={`non-italic p-2  border-gray-400	outline
                    ${currencyFilter === currency ? 'bg-black-600 text-white-600' : 'bg-black text-white '}
                `}	
                onClick={() => onClickCurrencyHandler(currencyFilter)}>{currencyFilter}</button>
        )
    }
}