import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { userSignIn } from "../services/users";
import { AuthContext } from "../App";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [passwd, setPasswd] = useState("");
	const navigate = useNavigate();
	const { setUser } = useContext(AuthContext);

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswdChange = (e) => setPasswd(e.target.value);

	const handleSignInClick = async (e) => {
		try {
			// validate user login using REST service
			const user = await userSignIn(email, passwd);
			// store user object + jwt token (in sessionStorage)
			sessionStorage.setItem("user", JSON.stringify(user));
			// update the context
			setUser(user);
			// after successful login, go to user dashboard
			navigate("/user");
		} catch (err) {
			toast.error("Invalid credentials.");
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
			{/* <div
				className="position-absolute top-0 end-0 m-3"
			>
				<Link className="btn btn-info" to="/">
					Home
				</Link>
			</div> */}
			<div
				className="col-md-6 border border-2 shadow p-5 m-3"
				style={{
					backdropFilter: "blur(10px)", // Adds a blur effect
					borderRadius: "10px", // Rounded corners
				}}
			>
				<div className="mb-3 text-center">
					<h2>Login Form</h2>
				</div>
				<div className="mb-3">
					<label className="form-label">Email:</label>
					<input
						className="form-control"
						name="email"
						type="text"
						onChange={handleEmailChange}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Password:</label>
					<input
						className="form-control"
						name="passwd"
						type="password"
						onChange={handlePasswdChange}
					/>
				</div>
				<div className="row">
					<button
						className="mx-3 col btn btn-primary"
						onClick={handleSignInClick}
					>
						Sign In
					</button>
					<Link className="mx-3 col btn btn-secondary" to="/register">
						Sign Up
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
