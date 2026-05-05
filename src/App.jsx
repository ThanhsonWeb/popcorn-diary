import Header from "./components/Header";
import MainMovie from "./components/MainMovie";
import { MovieProvider } from "./context/MovieContext";

function App() {
	return (
		<MovieProvider>
			<Header />
			<MainMovie />
		</MovieProvider>
	);
}

export default App;
