import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { MovieProvider } from "../context/MovieContext";
import { RatingProvider } from "../context/RatingContext";
function AppLayout() {
	return (
		<RatingProvider>
			<MovieProvider>
				<div className="xl:p-6 p-0">
					<Header />
					<main className="container mx-auto">
						<Outlet />
					</main>
					<Footer />
				</div>
			</MovieProvider>
		</RatingProvider>
	);
}

export default AppLayout;
