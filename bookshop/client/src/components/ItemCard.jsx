import { useDispatch } from "react-redux";
import {
	decrItemQuantity,
	incrItemQuantity,
	removeItem,
} from "../redux/cartSlice";

const ItemCard = ({ itemid, quantity }) => {
	const dispatch = useDispatch();
	const handleIncrClick = (e) => {
		dispatch(incrItemQuantity(itemid));
	};
	const handleDecrClick = (e) => {
		dispatch(decrItemQuantity(itemid));
	};
	const handleDeleteClick = (e) => {
		dispatch(removeItem(itemid));
	};
	return (
		<div className="card d-inline-block m-2 p-2" style={{ width: "220px" }}>
			<h3 className="card-title">Book: {itemid}</h3>
			<p className="card-text">Quantity: {quantity}</p>
			<button
				className="btn btn-warning font-monospace mx-1"
				onClick={handleIncrClick}
				style={{ width: "30px" }}
			>
				+
			</button>
			<button
				className="btn btn-warning font-monospace mx-1"
				onClick={handleDecrClick}
				style={{ width: "30px" }}
			>
				-
			</button>
			<button
				className="btn btn-danger font-monospace mx-1"
				onClick={handleDeleteClick}
				style={{ width: "30px" }}
			>
				X
			</button>
		</div>
	);
};

export default ItemCard;
