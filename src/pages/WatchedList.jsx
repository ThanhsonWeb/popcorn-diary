import { useMovies } from "../context/MovieContext";
import WatchedMovie from "../components/WatchedMovie";
function WatchedList() {
	const { watched } = useMovies();

	console.log(watched);
	return (
		<div className="text-white p-4">
			<h2>Watched summary</h2>

			<h1>Watched Movie</h1>
			<ul>
				{watched?.map((movie) => (
					<WatchedMovie movie={movie} key={movie.id} />
				))}
			</ul>
		</div>
	);
}

export default WatchedList;
