import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        addToCart: (state,action) => {
            const {item,quantity} = action.payload;
            const existingItem = state.cartItems.find(items => items.id === item.id);
            if (existingItem) {
                existingItem.quantity = existingItem.quantity + quantity
            }
            else {
                state.cartItems.push({...item,quantity})
            }
        },
        incrementItemQuantity: (state,action) => {
            const itemId = action.payload;
            const itemToIncrement = state.cartItems.find(items => items.id === itemId);
            if (itemToIncrement) {
                itemToIncrement.quantity = itemToIncrement.quantity + 1
            }
        },
        decrementItemQuantity: (state,action) => {
            const itemId = action.payload;
            const itemToDecrement = state.cartItems.find(items => items.id === itemId);
            if (itemToDecrement && itemToDecrement.quantity > 1) {
                itemToDecrement.quantity = itemToDecrement.quantity - 1
            }
        }
    }
})

export const {addToCart,incrementItemQuantity,decrementItemQuantity} = cartSlice.actions;
export default cartSlice.reducer;