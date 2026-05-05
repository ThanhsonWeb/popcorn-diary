import { useMovies } from "../context/MovieContext";

function Results() {
	const { query, movieData } = useMovies();

	return (
		<div className="p-4 w-[80%] mx-auto mx-auto bg-gray-500 rounded-2xl my-5 ">
			<h3 className="text-3xl text-center font-semibold text-white">
				Top {movieData.length} Results for {query} 🎉
			</h3>
		</div>
	);
}

export default Results;
