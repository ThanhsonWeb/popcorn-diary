import imdb from "../assets/icon/imdb2.svg";
import clock from "../assets/icon/clock.svg";
import close from "../assets/icon/close.svg";
import { useMovies } from "../context/MovieContext";
function WatchedMovie({ movie }) {
	const { poster, title, imdbRating, runtime, userRating, id } = movie;
	const { onDeleteMovie } = useMovies();

	return (
		<li className="bg-gray-700 md:p-5 p-2">
			<div className="flex items-center  md:gap-5 gap-2">
				<img src={poster} alt={title} className="h-30  object-cover" />
				<div className="space-y-3 w-[90%]">
					<h3 className="lg:text-3xl md:text-2xl text-lg font-semibold">{movie.title}</h3>
					{/* infor */}
					<div className="flex items-center md:gap-7 gap-2 lg:text-2xl md:text-xl text-lg">
						{/* 1 */}
						<div className="flex items-center md:gap-3 gap-1">
							<img src={imdb} alt="Icon" className="md:h-12 h-6" />
							<span>{imdbRating}</span>
						</div>
						{/* 2 */}
						<div className="flex items-center md:gap-3 gap-1">
							<span className="text-2xl">⭐</span>
							<span>{userRating}</span>
						</div>
						{/* 3 */}
						<div className="flex items-center md:gap-3 gap-1">
							<img src={clock} alt="clockIcon" className="md:h-8 h-5" />
							<span>{runtime}</span>
						</div>
					</div>
					{/* button */}
				</div>
				<button
					onClick={() => onDeleteMovie(movie.id)}
					className="p-3 rounded-full bg-red-400 cursor-pointer ml-auto"
				>
					<img
						src={close}
						alt="closeIcon"
						className="md:h-8 h-5  rounded-full"
					/>
				</button>
			</div>
		</li>
	);
}

export default WatchedMovie;
