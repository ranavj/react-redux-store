export const addItem = (item) => {
    return {
        type: 'cart/addItem',
        payload: item
    }
}

export const changeItemQuantity = (name, newQuantity) =>{
    return {
        type: 'cart/changeItemQuantity',
        payload: {
            name: name,
            quantity: newQuantity
        }
    }
}

const initialCart = {};
export const cartReducer = (cart = initialCart, action) => {
    switch (action.type) {
        case 'cart/addItem':{
            const {name, price} = action.payload;
            const newQuantity = cart[name] ? cart[name].quantity + 1 : 1;
            const newItem = { price, quantity: newQuantity };
            return {
                ...cart,
                [name]: newItem
            };
        }
        case 'cart/changeItemQuantity':{
           const {name, quantity} = action.payload;
           const item = cart[name];
           const updatedItem = {
               ...item,
               quantity
           };

           return {
               ...cart,
               [name]: updatedItem
           }

        }
        default:
          return initialCart;
    }
}