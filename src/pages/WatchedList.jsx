import { useMovies } from "../context/MovieContext";
import WatchedMovie from "../components/WatchedMovie";
import WatchedSummary from "../components/WatchedSummary";
function WatchedList() {
	const { watched } = useMovies();

	console.log(watched);
	return (
		<div className="text-white md:p-4 p-1 ">
			<WatchedSummary />

			<ul className="overflow-scroll">
				{watched?.map((movie) => (
					<WatchedMovie movie={movie} key={movie.id} />
				))}
			</ul>
		</div>
	);
}

export default WatchedList;
