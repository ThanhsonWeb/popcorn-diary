import { useMovies } from "../context/MovieContext";
import MovieItem from "./MovieItem";
import Loading from "../ui/Loading";

function MovieList() {
	const { movieData, isLoading } = useMovies();

	if (isLoading) return <Loading />;

	return (
		<div>
			<ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
				{movieData.length > 0 ? (
					movieData.map((movie) => (
						<MovieItem movie={movie} key={movie.imdbID} />
					))
				) : (
					<p>No Movie Found.</p>
				)}
			</ul>
		</div>
	);
}

export default MovieList;
