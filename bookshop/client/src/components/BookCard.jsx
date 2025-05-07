import { baseUrl } from "../services/apiconfig";
import { useDispatch } from "react-redux";
// import { addItem } from "../redux/cartSlice";
import { addItem } from "../redux/cartSlice";

const BookCard = (props) => {
	const { id, title, author, category, price, image_name } = props.book;
	const dispatch = useDispatch();
	const handleAddCartClick = (e) => {
		const addItemAction = addItem(id); // send item id in payload (from props)
		dispatch(addItemAction);
	};

	return (
		<div className="card d-inline-block m-2 p-2" style={{ width: "220px" }}>
			<img
				src={baseUrl + "/books/image/" + image_name}
				alt={title}
				style={{ height: "320px" }}
				className="card-img-top"
			/>
			<h3 className="card-title">{title}</h3>
			<p className="card-text">
				A {category} book by {author} for Rs. {price}/-.
			</p>
			<button className="btn btn-primary" onClick={handleAddCartClick}>
				Add Cart
			</button>		</div>
	);
};

export default BookCard;
