import React from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Private } from "./pages/Private";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Login />} />
			<Route path="/Signup" element={<Signup />} />
			<Route path="/login" element={<Login />} />
			<Route path="/private" element={<Private />} />
		</Route>
	)
);