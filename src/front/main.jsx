import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { StoreProvider } from "./hooks/useGlobalReducer";
import { router } from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<StoreProvider>
			<RouterProvider router={router} />
		</StoreProvider>
	</React.StrictMode>
);