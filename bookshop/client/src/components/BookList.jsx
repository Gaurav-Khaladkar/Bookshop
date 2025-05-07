import { useEffect, useState } from "react";
//import { getAllBooks } from "../services/books";
import { getAllBooks, getBooksByCategory } from "../services/books";
import { toast } from "react-toastify";
import BookCard from "./BookCard";
import { useLocation } from "react-router";

const BookList = () => {
	const location = useLocation();
	const [books, setBooks] = useState([true]);

	// helper function to update state or show error if any
	async function loadBooks() {
		try {
			// check if category is available (when come to this component from category list)
			if (location.state?.category) {
				// get data from rest api and store in component state
				const booklist = await getBooksByCategory(location.state.category);
				setBooks(booklist);
			} else {
				// get data from rest api and store in component state
				const booklist = await getAllBooks();
				setBooks(booklist);
			}
		} catch (err) {
			console.log(err);
			toast.error(err.message);
		}
	}

	// call the helper fn when component is mounted
	useEffect(() => {
		loadBooks();
	}, []);

	return (
		<div>
			<h1>Book List</h1>
			{books.map((b) => (
				<BookCard key={"book" + b.id} book={b} />
			))}
		</div>
	);
};

export default BookList;
