import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { MovieProvider } from "../context/MovieContext";
function AppLayout() {
	return (
		<MovieProvider>
			<div className="p-4">
				<Header />
				<main>
					<Outlet />
				</main>
				<Footer />
			</div>
		</MovieProvider>
	);
}

export default AppLayout;
