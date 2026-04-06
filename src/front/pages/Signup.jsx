import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const backendUrl = import.meta.env.VITE_BACKEND_URL;

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch(`${backendUrl}/api/signup`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ email, password })
		})
			.then(res => res.json())
			.then(data => {
				if (data.user) {
					alert("Usuario creado");
					navigate("/login");
				} else {
					alert(data.message);
				}
			});
	};

	return (
		<div className="container mt-5">
			<h1>Signup</h1>

			<form onSubmit={handleSubmit}>
				<input
					type="email"
					placeholder="Email"
					className="form-control mb-2"
					onChange={e => setEmail(e.target.value)}
				/>

				<input
					type="password"
					placeholder="Password"
					className="form-control mb-2"
					onChange={e => setPassword(e.target.value)}
				/>

				<button className="btn btn-primary">Register</button>
			</form>

			<Link to="/login">Ir a login</Link>
		</div>
	);
};