import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

function MovieProvider({ children }) {
	const KEY = "783e376b";
	const [query, setQuery] = useState("Doraemon");
	const [isLoading, setIsLoading] = useState(false);
	const [movieData, setMovieData] = useState([]);

	useEffect(() => {
		async function fetchMovies() {
			try {
				setIsLoading(true);
				const res = await fetch(
					`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
				);
				const data = await res.json();
				console.log(data.Search)
				setMovieData(data.Search);
			} catch (err) {
				console.error("something went wrong while fetch movie", err);
			} finally {
				setIsLoading(false);
			}
		}
		fetchMovies();
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
