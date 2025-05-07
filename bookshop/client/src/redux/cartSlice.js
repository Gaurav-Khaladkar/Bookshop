import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: { items: [] },
	reducers: {
		addItem: (state, action) => {
			// payload = new item id
			const itemsInCart = state.items.filter(
				(item) => item.itemid === action.payload
			);
			if (itemsInCart.length === 0) {
				const item = { itemid: action.payload, quantity: 1 };
				state.items.push(item);
			} else {
				const item = itemsInCart[0];
				item.quantity += 1;
			}
		},
		removeItem: (state, action) => {
			// payload = item id to be deleted
			state.items = state.items.filter(
				(item) => item.itemid !== action.payload
			);
		},
		incrItemQuantity: (state, action) => {
			// payload = item id to be modified (quantity)
			const itemsInCart = state.items.filter(
				(item) => item.itemid === action.payload
			);
			if (itemsInCart.length > 0) {
				const item = itemsInCart[0];
				item.quantity += 1;
			}
		},
		decrItemQuantity: (state, action) => {
			// payload = item id to be modified (quantity)
			const itemsInCart = state.items.filter(
				(item) => item.itemid === action.payload
			);
			if (itemsInCart.length > 0) {
				const item = itemsInCart[0];
				item.quantity -= 1;
				if (item.quantity == 0) {
					state.items = state.items.filter(
						(item) => item.itemid !== action.payload
					);
				}
			}
		},
	},
});

export const { addItem, removeItem, incrItemQuantity, decrItemQuantity } =
	cartSlice.actions;
export default cartSlice.reducer;
