export const chooseCurrency = (currency) => {
    return {
        type: 'currency/chooseCurrency',
        payload: currency
    }
}

const initialCurrency = 'USD'
export function chooseCurrencyReducer(currency = initialCurrency, action){
    switch (action.type) {
        case 'currency/chooseCurrency':
            return action.payload;
        default:
            return initialCurrency;
    }
}