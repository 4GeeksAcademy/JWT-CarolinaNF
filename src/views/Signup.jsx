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
			body: JSON.stringify({
				email,
				password
			})
		})
			.then((resp) => resp.json())
			.then((data) => {
				if (data.user) {
					alert("Usuario registrado correctamente");
					navigate("/login");
				} else {
					alert(data.message || "Error al registrar");
				}
			})
			.catch((error) => console.log(error));
	};

	return (
		<div className="container mt-5">
			<h1>Signup</h1>

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

				<button type="submit" className="btn btn-primary">
					Register
				</button>
			</form>

			<p className="mt-3">
				¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
			</p>
		</div>
	);
};