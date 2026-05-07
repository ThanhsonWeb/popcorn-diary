import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

function MovieProvider({ children }) {
	const KEY = "783e376b";
	const [query, setQuery] = useState("ninja");
	const [isLoading, setIsLoading] = useState(false);
	const [movieData, setMovieData] = useState([]);
	const [username, setUsername] = useState("");
	const [selectedId, setSelectedId] = useState(null);
	const [isOpen, setIsOpen] = useState(true);
	const [movieDetail, setMovieDetail] = useState(null);

	function handleSelected(id) {
		setSelectedId(id);
	}

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

	useEffect(() => {
		if (!selectedId) return;

		async function fetchMovieDetail() {
			try {
				setIsLoading(true);
				const res = await fetch(
					`https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`,
				);
				const dataMovie = await res.json();
				console.log(dataMovie);
				setMovieDetail(dataMovie);
			} catch (err) {
				console.error("Failed to fetch movie detail:", err);
			} finally {
				setIsLoading(false);
			}
		}

		if (selectedId) {
			fetchMovieDetail();
		}
	}, [selectedId]);

	return (
		<MovieContext.Provider
			value={{
				query,
				setQuery,
				isLoading,
				movieData,
				username,
				setUsername,
				handleSelected,
				selectedId,
				isOpen,
				setIsOpen,
				movieDetail,
			}}
		>
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
