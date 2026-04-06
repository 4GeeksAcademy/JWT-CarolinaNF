import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { Navbar } from "../components/Navbar";

export const Layout = () => {
	const location = useLocation();

	return (
		<ScrollToTop location={location}>
			<Navbar />
			<Outlet />
		</ScrollToTop>
	);
};