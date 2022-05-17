import './App.css';
import { Currency } from './features/currency/Currency'; 
import { SearchTerm } from './features/searchTerm/SearchTerm';
import { Inventory } from './features/inventory/Inventory';
import { Cart } from './features/cart/Cart';
function App({state, dispatch}) {
  return (
   <div className='container max-auto p-12'>
     <div className='grid grid-cols-1 gap-4'>
       {/* currency component */}
        <Currency 
          currency={state.currency}
          dispatch={dispatch}
        />
     {/* search component */}
       <SearchTerm 
          searchTerm={state.searchTerm}
          dispatch={dispatch}
       />
     {/* item component */}
        <Inventory 
          inventory={getFilterItems(state.inventory, state.searchTerm)}
          dispatch={dispatch}
          currency={state.currency}
        />
      {/* Cart */}
      <Cart 
        cart={state.cart}
        dispatch={dispatch}
        currency={state.currency}
      />
   </div>
   </div>
  );
}

function getFilterItems(inventory, searchTerm){
  return inventory.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())) 
}

export default App;
