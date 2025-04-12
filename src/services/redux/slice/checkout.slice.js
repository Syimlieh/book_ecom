import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    checkoutDetails: {},
}

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        setCheckoutDetails: (state, action) => {
            state.checkoutDetails = action.payload;
        },
    },
})

export default checkoutSlice.reducer;
export const { setCheckoutDetails } = checkoutSlice.actions;