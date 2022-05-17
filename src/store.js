import { legacy_createStore as  createStore, combineReducers } from "redux";
import { cartReducer } from "./features/cart/cartReducer";
import { chooseCurrencyReducer } from "./features/currency/currencySlice";
import { inventoryReducer } from "./features/inventory/inventorySlice";
import { searchTermReducer } from "./features/searchTerm/searchTermReducer";

export const store = createStore(combineReducers({
    inventory: inventoryReducer,
    searchTerm: searchTermReducer,
    cart: cartReducer,
    currency: chooseCurrencyReducer
}))