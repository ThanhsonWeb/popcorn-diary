import imdb from "../assets/icon/imdb2.svg";
function WatchedMovie({ movie }) {
	const { poster, title, imdbRating, runtime, id } = movie;

	return (
		<li>
			<div className="flex items-center gap-5">
				<img src={poster} alt={title} className="h-35  object-cover" />
				<div>
					<h3>{movie.title}</h3>
					<div>
						<img src={imdb} alt=""  className="h-10"/>
					</div>
				</div>
			</div>
		</li>
	);
}

export default WatchedMovie;
