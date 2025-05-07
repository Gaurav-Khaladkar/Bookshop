import { useSelector } from "react-redux";
import store from "../redux/store";
import ItemCard from "./ItemCard";

const ShoppingCart = () => {
	//const state = store.getState();
	//console.log(state);
	const cartItems = useSelector((storeState) => storeState.cart.items);
	console.log("CART ITEMS:", cartItems);
	return (
		<div>
			<h1>ShoppingCart</h1>
			{cartItems.map((item) => (
				<ItemCard
					key={item.itemid}
					itemid={item.itemid}
					quantity={item.quantity}
				/>
			))}
			<br />
			<button className="btn btn-primary">Place Order</button>
		</div>
	);
};


export default ShoppingCart;
