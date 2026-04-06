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
		<nav className="navbar navbar-light bg-light border-bottom">
			<div className="container">
				<Link to="/" className="navbar-brand mb-0 h1 text-decoration-none d-flex align-items-center gap-2">
	               <span>JWT</span>
	               <i className="bi bi-stars text-primary"></i>
	               <span className="fw-bold"> by Carolina</span>
                </Link> 

				<div className="d-flex gap-2">
					<Link to="/signup">
						<button className="btn btn-outline-primary">Signup</button>
					</Link>

					<Link to="/login">
						<button className="btn btn-outline-success">Login</button>
					</Link>

					<Link to="/private">
						<button className="btn btn-outline-dark">Private</button>
					</Link>

					{store.token && (
						<button className="btn btn-OUTLINE-danger" onClick={handleLogout}>
							Logout
						</button>
					)}
				</div>
			</div>
		</nav>
	);
};