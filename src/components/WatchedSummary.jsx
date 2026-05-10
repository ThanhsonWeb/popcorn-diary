import arrowLeft from "../assets/icon/arrow-left.svg";
import imdb from "../assets/icon/imdb2.svg";
import clock from "../assets/icon/clock.svg";
import year from "../assets/icon/year.svg";
import { useNavigate } from "react-router-dom";
import { useMovies } from "../context/MovieContext";
function WatchedSummary() {
	const navigate = useNavigate();

	const { watched } = useMovies();

	const average = (item) =>
		item.reduce((acc, cur) => acc + cur, 0) / item.length;
	// item = runtime , imdbRating, userRating

	const timeAverage = average(watched.map((item) => parseInt(item.runtime)));
	const ratingAverage = average(watched.map((item) => Number(item.imdbRating)));
	const userRatingAverage = average(
		watched.map((item) => Number(item.userRating || 0)),
	);

	return (
		<div className="flex items-center   bg-gray-900 md:p-4 py-4">
			<button
				onClick={() => navigate(-1)}
				className="md:p-4 p-2 bg-white rounded-2xl hover:scale-110 "
			>
				<img src={arrowLeft} alt="arrowLeft" className="md:h-12 h-8" />
			</button>

			{/* infor */}
			<div className="flex items-center gap-7 text-2xl font-semibold md:ml-5   md:text-3xl text-md">
				{/* 0 */}
				<div className="flex items-center  gap-5 md:ml-5">
					<img src={year} alt="Icon" className="lg:h-20 md:15 h-10" />
					<span>
						{watched.length > 1
							? watched.length + " Movies"
							: watched.length + " Movie"}
					</span>
				</div>
				{/* 1 */}
				<div className="flex items-center gap-1  ">
					<img src={imdb} alt="Icon" className="lg:h-20 md:15 h-10" />
					<span> {ratingAverage ? ratingAverage.toFixed(1) : ""}</span>
				</div>
				{/* 2 */}
				<div className="flex items-center gap-1 ">
					<span className="lg:text-5xl md:text-3xl text-xl">⭐</span>
					<span>{userRatingAverage ? userRatingAverage.toFixed(1) : ""}</span>
				</div>
				{/* 3 */}
				<div className="flex items-center gap-1 ">
					<img src={clock} alt="clockIcon" className="lg:h-20 md:15 h-10" />
					<span>{Math.round(timeAverage ? timeAverage : "")} min</span>
				</div>
			</div>
		</div>
	);
}

export default WatchedSummary;
