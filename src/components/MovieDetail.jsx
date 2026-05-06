import { useMovies } from "../context/MovieContext";

function MovieDetail() {
	const { selectedId } = useMovies();

	return (
		<div>
			<h2 className="text-white">Id of that Movie !{selectedId} </h2>
		</div>
	);
}

export default MovieDetail;
