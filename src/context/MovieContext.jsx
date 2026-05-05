import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

function MovieProvider({ children }) {
	const KEY = "783e376b";
	const [query, setQuery] = useState("Pokemon");
	const [isLoading, setIsLoading] = useState(false);
	const [movieData, setMovieData] = useState([]);

	useEffect(() => {
		const controller = new AbortController();

		async function fetchMovies() {
			try {
				setIsLoading(true);
				const res = await fetch(
					`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
					{ signal: controller.signal },
				);
				const data = await res.json();
				console.log(data.Search);
				setMovieData(data.Search || []);
			} catch (err) {
				if (err.name === "AbortError") {
					// Request was intentionally cancelled, ignore
					// console.log("Fetch aborted");
					return;
				}
				console.error("Failed to fetch movies:", err);
			} finally {
				setIsLoading(false);
			}
		}
		fetchMovies();
		return () => controller.abort();
	}, [query]);

	return (
		<MovieContext.Provider value={{ query, setQuery, isLoading, movieData }}>
			{children}
		</MovieContext.Provider>
	);
}

function useMovies() {
	const context = useContext(MovieContext);
	if (!context) throw new Error("useMovie must be use inside MovieProvider");
	return context;
}

export { MovieProvider, useMovies };
