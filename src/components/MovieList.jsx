import { useMovies } from "../context/MovieContext";
import MovieItem from "./MovieItem";

function MovieList() {
	const { movieData } = useMovies();

	return (
		<div>
			<ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
				{movieData.map((movie) => (
					<MovieItem movie={movie} key={movie.imdbID} />
				))}
			</ul>
		</div>
	);
}

export default MovieList;
