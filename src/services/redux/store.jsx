import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slice/product.slice';
import checkoutReducer from './slice/checkout.slice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        checkout: checkoutReducer,
    },
})