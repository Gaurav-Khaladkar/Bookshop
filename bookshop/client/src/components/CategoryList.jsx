import { useEffect, useState } from "react";
import { getCategories } from "../services/books";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const CategoryList = () => {
	const [categories, setCategories] = useState([]);
	const navigate = useNavigate();
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [books, setBooks] = useState([]);
	
	

	// Helper function to fetch categories
	const loadCategories = async () => {
		try {
			const cats = await getCategories();
			
			setCategories(cats);
		} catch (err) {
			toast.error(err.message);
	// Removed duplicate useNavigate and unused selectCategory function
		console.log("selected category:", c);
		}
	};


	const handleShowBooksClick = (e) => {
		const selectedCategory = e.target.value;
		navigate("/user/books", {
			state: {
				category: selectedCategory,
			},
		});
	};

	// Executed when component is mounted
	useEffect(() => {
		loadCategories();
	}, []);

	// Helper function to fetch books by category
	const loadBooksByCategory = async (category) => {
		try {
			console.log("loadBooksByCategory:", category)
			const booksData = await getBooksBy(category);
			setBooks(booksData);
		} catch (err) {
			console.log(err)
 			toast.error(err.message);
		}
	};

	// Executed when component is updated
	useEffect(() => {
		console.log("loading books of", selectedCategory)
		loadBooksByCategory(selectedCategory);
	}, [selectedCategory]);

	// Render the component
	return (
		<div>
			<h1>Category List</h1>
			<div>
				{categories.map((c) => (
					<div
						key={c}
						className="card d-inline-block m-3 p-2 shadow"
						style={{ width: "250px" }}
					>
						<h3 className="card-title">{c}</h3>
						<button
						value={c}
						className="btn btn-primary mt-3"
						onClick={handleShowBooksClick}
					>
						Show Books
					</button>
					</div>
				))}
			</div>

			{selectedCategory && (
				<div>
					<h2>Books in {selectedCategory}</h2>
					{books && <div className="d-flex flex-wrap">
						{books.map((book) => (
							<div
								key={book.id}
								className="card m-3 p-2 shadow"
								style={{ width: "200px" }}
							>
								<img
									src={book.image}
									alt={book.title}
									className="card-img-top"
									style={{ height: "150px", objectFit: "cover" }}
								/>
								<div className="card-body">
									<h5 className="card-title">{book.title}</h5>
									<p className="card-text">{book.author}</p>
								</div>
							</div>
						))}
					</div>}
				</div>
			)}
		</div>
	);
};

export default CategoryList;