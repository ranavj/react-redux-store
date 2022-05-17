import React from "react";
import { calculateTotal, getCurrencySymbol } from "../../utilities/currencyUtilities";
import { changeItemQuantity } from "./cartReducer";

export function Cart({ cart, currency, dispatch }) {

    const cartElements = [];

    const onInputChangeHandler = (name, input) => {

        if(input === '') return;
        const newQuantity = Number(input);

        dispatch(changeItemQuantity(name, newQuantity));
    }
    
    for (const item in cart) {
       cartElements.push(createCartItem(item))
    }
    function createCartItem(name){
        const item = cart[name];
        if(item.quantity === 0) return;
        return (            
            <div key={name} className='grid grid-cols-6 col-span-1'>
                <div className='col-start-1 col-end-3'>
                    <p className='text-black font-medium text-lg'>{name}</p>
                </div>
                <div className='col-end-7 w-full'>
                    <select 
                        onChange={(e) => { onInputChangeHandler(name, e.target.value)}}
                        className='block w-20 p-1' 
                        value={item.quantity}>
                    {[...Array(100).keys()].map((_, index) => (
                        <option key={index} value={index}>
                            {index}
                        </option>
                    ))}
                    </select>
                </div>
            </div>  
        )
    } 

    return (

        <div className='col-span-12 grid fixed bottom-0 bg-slate-300 p-8 w-full left-0 gap-y-1'>
            {cartElements.length > 0 && cartElements}
            {/* total */}
            <div className='grid grid-cols-6 col-span-1'>
                <div className='col-start-1'>
                    <p className='text-black font-medium text-xl'>Total</p>
                </div>
                <div className='col-end-7'>
                    <label className='text-xl text-blue-700'>{getCurrencySymbol(currency)} {calculateTotal(cart, currency)} {currency}</label>
                </div>
            </div>
        </div>
    )
}