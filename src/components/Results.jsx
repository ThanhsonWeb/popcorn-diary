import { useMovies } from "../context/MovieContext";

function Results() {
	const { query } = useMovies();

	return (
		<div className="p-4 w-[80%] mx-auto mx-auto  ">
			<h3 className="text-2xl font-semibold text-white">
				Top .. Results for {query} 🎉
			</h3>
		</div>
	);
}

export default Results;
