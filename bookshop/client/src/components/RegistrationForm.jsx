import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { userSignUp } from "../services/users";

const RegistrationForm = () => {
	const [info, setInfo] = useState({
		name: "",
		email: "",
		passwd: "",
		mobile: "",
		address: "",
	});

	const navigate = useNavigate();
	const handleInputFieldChange = (e) =>
		setInfo({ ...info, [e.target.name]: e.target.value });

	const handleSignUpClick = async (e) => {
		try {
			// register user using REST api
			const user = await userSignUp(
				info.email,
				info.passwd,
				info.name,
				info.mobile,
				info.address
			);
			toast.success("User registered with id: " + user.id);
			// then go to login page
			navigate("/login");
		} catch (err) {
			toast.error(err.message);
		}
	};

	return (
		<div
			className="d-flex justify-content-center align-items-center vh-100 vw-100"
			style={{
				background: "rgba(0, 0, 0, 0.5)", // Optional background for the entire page
				margin: 0,
				padding: 0,
			}}
		>
			<div
				className="col-md-6 border border-2 shadow p-5 m-3"
				style={{
					backdropFilter: "blur(10px)", // Adds a blur effect
					borderRadius: "10px", // Rounded corners
				}}
			>
				<div className="mb-3 text-center">
					<h2>Registration Form</h2>
				</div>
				<div className="mb-3">
					<label className="form-label">Email:</label>
					<input
						className="form-control"
						name="email"
						type="text"
						onChange={handleInputFieldChange}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Password:</label>
					<input
						className="form-control"
						name="passwd"
						type="password"
						onChange={handleInputFieldChange}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Name:</label>
					<input
						className="form-control"
						name="name"
						type="text"
						onChange={handleInputFieldChange}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Mobile:</label>
					<input
						className="form-control"
						name="mobile"
						type="text"
						onChange={handleInputFieldChange}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Address:</label>
					<input
						className="form-control"
						name="address"
						type="text"
						onChange={handleInputFieldChange}
					/>
				</div>
				<div className="row">
					<button
						className="mx-3 col btn btn-primary"
						onClick={handleSignUpClick}
					>
						Sign Up
					</button>
					<Link className="mx-3 col btn btn-secondary" to="/login">
						Sign In
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RegistrationForm;
