import { Link } from "react-router";

const Home = () => {
	return (
		<>
		<div>
		<header className="bg-success text-white p-3 d-flex justify-content-between align-items-center">
				<h1>AaPpa Book Shop</h1>
				<nav>
					<Link className="text-white text-decoration-none mx-2" to="/about">About</Link>
					<Link className="text-white text-decoration-none mx-2" to="/contact">Contact</Link>
					<Link 
						className="text-primary bg-white rounded-circle text-center text-decoration-none mx-2 me-5 px-3 py-1" 
						to="/login"
					>
						Login
					</Link>
				</nav>
			</header>
		<section className="mb-3 p-3 border rounded">
			<h2>Welcome to the AaPpa Book Shop</h2>
			<p>
				Discover a wide range of books from various genres. Whether you're
				looking for fiction, non-fiction, or educational materials, we have
				it all!
			</p>
		</section>
		</div>
		</>
	);
};

const styles = {
	header: {
		backgroundColor: "00000",
		color: "white",
		padding: "10px 20px",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	navLink: {
		color: "white",
		textDecoration: "none",
		margin: "0 10px",
	},
	main: {
		padding: "20px",
	},
	section: {
		marginBottom: "20px",
		padding: "10px",
		border: "1px solid #ddd",
		borderRadius: "5px",
	},
	button: {
		display: "inline-block",
		marginTop: "10px",
		padding: "10px 15px",
		backgroundColor: "#007BFF",
		color: "white",
		textDecoration: "none",
		borderRadius: "5px",
	},
	footer: {
		marginTop: "20px",
		padding: "10px",
		backgroundColor: "#f1f1f1",
		textAlign: "center",
	},
};

export default Home;
