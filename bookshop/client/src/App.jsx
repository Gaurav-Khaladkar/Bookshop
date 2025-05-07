import { Routes, Route } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import CategoryList from "./components/CategoryList";
import BookList from "./components/BookList";
import ShoppingCart from "./components/ShoppingCart";
import OrderList from "./components/OrderList";
import BookForm from "./components/BookForm";
import UserDashboard from "./components/UserDashboard";
import SplashScreen from "./components/SplashScreen";
//import "./App.css";
import UserLayout from "./components/UserLayout";
import { createContext, useState } from "react";
import Footer from "./components/Footer"; // Import the Footer component
export const AuthContext = createContext();

function getUserFromSessionStorage() {
	const userJson = sessionStorage.getItem("user");
	const user = JSON.parse(userJson);
	if (user) {
		return user;
	} else {
		return null;
	}
}

function App() {
	const [user, setUser] = useState(getUserFromSessionStorage());

	return (
		<div className="d-flex flex-column min-vh-100%">
			<AuthContext.Provider value={{ user, setUser }}>
				<div className="flex-grow-1">
					<Routes>
						{/* /url */}
						<Route path="/" element={<SplashScreen />} />
						<Route index="true" element={<Home />} />
						<Route path="/login" element={<LoginForm />} />
						<Route path="/register" element={<RegistrationForm />} />
						{/* /user/url */}
						<Route path="/user" element={<UserLayout />}>
							<Route index="true" element={<UserDashboard />} />
							<Route path="categories" element={<CategoryList />} />
							<Route path="books" element={<BookList />} />
							<Route path="cart" element={<ShoppingCart />} />
							<Route path="orders" element={<OrderList />} />
							<Route path="new-book" element={<BookForm />} />
						</Route>
					</Routes>
				</div>
			</AuthContext.Provider>
			<Footer /> {/* Add the Footer component */}
		</div>
	);
}

export default App;
