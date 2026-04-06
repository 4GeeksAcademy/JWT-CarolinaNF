import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Private = () => {
	const { store, dispatch } = useGlobalReducer();
	const navigate = useNavigate();
	const backendUrl = import.meta.env.VITE_BACKEND_URL;

	useEffect(() => {
		const token = sessionStorage.getItem("token");

		if (!token) {
			navigate("/login");
			return;
		}

		fetch(`${backendUrl}/api/private`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
			.then((resp) => {
				if (resp.status === 401 || resp.status === 422) {
					sessionStorage.removeItem("token");
					dispatch({ type: "logout" });
					navigate("/login");
					return null;
				}
				return resp.json();
			})
			.then((data) => {
				if (!data) return;

				dispatch({
					type: "set_private",
					payload: data
				});
			})
			.catch((error) => console.log(error));
	}, [backendUrl, dispatch, navigate]);

	return (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-md-8">
					<h1 className="mb-4">Private Page</h1>
					<p>Solo usuarios autenticados pueden ver esta página.</p>

					{store.privateData && (
						<div className="alert alert-success mt-4">
							<p className="mb-2">
								<strong>Mensaje:</strong> {store.privateData.message}
							</p>
							<p className="mb-0">
								<strong>Email:</strong> {store.privateData.user.email}
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};