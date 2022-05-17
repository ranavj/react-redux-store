import { inventoryData } from "../../data";

export function loadData(data){
    return {
        type: 'inventory/loadData',
        payload: inventoryData
    }
};

export function inventoryReducer(inventory = [], action){
    switch(action.type){
        case 'inventory/loadData':
            return action.payload;
        default:
            return inventory
    }
}