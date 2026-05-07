import { useMovies } from "../context/MovieContext";

function SearchMovie() {
	const { query, setQuery } = useMovies();

	return (
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
			/>
		</form>
	);
}

export default SearchMovie;
