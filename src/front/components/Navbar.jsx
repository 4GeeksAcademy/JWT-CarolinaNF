import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();
	const navigate = useNavigate();

	const handleLogout = () => {
		sessionStorage.removeItem("token");
		dispatch({ type: "logout" });
		navigate("/login");
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">JWT Auth App</span>
				</Link>

				<div className="d-flex gap-2">
					<Link to="/signup">
						<button className="btn btn-primary">Signup</button>
					</Link>

					<Link to="/login">
						<button className="btn btn-success">Login</button>
					</Link>

					<Link to="/private">
						<button className="btn btn-dark">Private</button>
					</Link>

					{store.token && (
						<button className="btn btn-danger" onClick={handleLogout}>
							Logout
						</button>
					)}
				</div>
			</div>
		</nav>
	);
};