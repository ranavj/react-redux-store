import React , { useEffect } from "react"
import { getCurrencySymbol } from "../../utilities/currencyUtilities";
import { addItem } from "../cart/cartReducer";
import { loadData } from "./inventorySlice";
export function Inventory({inventory, dispatch, currency}){

  const onMount = () => {
    dispatch(loadData());
  };

  useEffect(onMount, [dispatch]);

  const addItemHandle = (item) => {
    dispatch(addItem(item));
  };

  function inventoryItems(items){
    return items.map((item, index) => {
      return (
        <div key={index} className='grid grid-rows-1 gap-2'>
            <div className='border-black-900 border-2'>
              <img  src={item.img} alt=""/>
            </div>     
            <div>
              <p className='font-bold'>{item.name}</p>
              <p className='text-blue-600	 font-bold'>{getCurrencySymbol(currency)}{item.price} {currency}</p>
              <button 
                onClick={() => addItemHandle(item)}
                className='border-solid border-2 p-2 text-black-600 hover:text-white hover:bg-black'>
                  Add to Cart
              </button>
            </div>   
          </div>
      )
    })
  }
  
  return(
        <div className='col-span-12 grid grid-cols-4 gap-4'>
          {inventory.length > 0 && inventoryItems(inventory)}
       </div>
  );

}

