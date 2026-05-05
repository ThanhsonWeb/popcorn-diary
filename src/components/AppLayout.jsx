import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { MovieProvider } from "../context/MovieContext";
function AppLayout() {
	return (
		<MovieProvider>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</MovieProvider>
	);
}

export default AppLayout;
