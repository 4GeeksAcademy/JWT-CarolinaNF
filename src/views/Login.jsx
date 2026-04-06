import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { dispatch } = useGlobalReducer();
	const navigate = useNavigate();

	const backendUrl = import.meta.env.VITE_BACKEND_URL;

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch(`${backendUrl}/api/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email,
				password
			})
		})
			.then((resp) => resp.json())
			.then((data) => {
				if (data.token) {
					sessionStorage.setItem("token", data.token);

					dispatch({
						type: "set_token",
						payload: data.token
					});

					dispatch({
						type: "set_user",
						payload: data.user
					});

					navigate("/private");
				} else {
					alert(data.message || "Credenciales inválidas");
				}
			})
			.catch((error) => console.log(error));
	};

	return (
		<div className="container mt-5">
			<h1>Login</h1>

			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label className="form-label">Email</label>
					<input
						type="email"
						className="form-control"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className="mb-3">
					<label className="form-label">Password</label>
					<input
						type="password"
						className="form-control"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<button type="submit" className="btn btn-success">
					Login
				</button>
			</form>

			<p className="mt-3">
				¿No tienes cuenta? <Link to="/signup">Regístrate</Link>
			</p>
		</div>
	);
};