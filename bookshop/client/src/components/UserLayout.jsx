import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { AuthContext } from "../App";
import { useContext } from "react";

const UserLayout = () => {
	const { user } = useContext(AuthContext);
	return (
		<div>
			<Navbar />
			<p className="bg-warning p-2">Hello, {user?.name}!</p>
			<Outlet />
		</div>
	);
};

export default UserLayout;
