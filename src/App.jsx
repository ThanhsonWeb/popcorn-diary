import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./components/AppLayout";
import SignIn from "./pages/SignIn";
import MovieDetail from "./components/MovieDetail";
function App() {
	const router = createBrowserRouter([
		{
			element: <AppLayout />, // parent layout
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/signin",
					element: <SignIn />,
				},
				{
					path: "/detail/:id",
					element: <MovieDetail />,
				},
			
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
