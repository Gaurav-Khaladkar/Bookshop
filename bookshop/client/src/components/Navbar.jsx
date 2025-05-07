import React from "react";
import { Link, useNavigate } from "react-router";

function Navbar() {
	const navigate = useNavigate();

	const onLogout = (e) => {
		console.log("Logout clicked!");
		navigate("/"); // Home component (path = /)
	};

	return (
		<nav className="navbar navbar-expand-md bg-light" data-bs-theme="light">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/user/">
					AaPpa Bookshop
				</Link>

				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" to="/user/categories">
								Categories
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/user/books">
								Books
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/user/cart">
								Cart
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/user/orders">
								Orders
							</Link>
						</li>

						<li className="nav-item">
							<button onClick={onLogout} className="btn link" style={{ marginLeft: "950px" }}>
								Logout
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
