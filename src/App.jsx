import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainMovie from "./components/MainMovie";
import AppLayout from "./components/AppLayout";

function App() {
	const router = createBrowserRouter([
		{
			element: <AppLayout />, // parent layout
			children: [
				{
					path: "/", // default route
					element: <MainMovie />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
