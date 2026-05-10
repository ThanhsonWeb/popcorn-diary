import { useMovies } from "../context/MovieContext";
import { useRef, useEffect } from "react";

function SearchMovie() {
	const { query, setQuery, movieDetail } = useMovies();

	const inputEl = useRef(null);

	useEffect(() => {
		inputEl.current.focus();
	}, []);

	return (
		<>
			{!movieDetail && (
				<form className="w-full">
					<input
						type="text"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						className="p-5 rounded-xl w-full text-xl 
							 bg-purple-800 text-white placeholder-gray-400 
							 focus:outline-none focus:ring-2 focus:ring-blue-500 
							 transition duration-200"
						placeholder="Search movies..."
						ref={inputEl}
					/>
				</form>
			)}
		</>
	);
}

export default SearchMovie;
