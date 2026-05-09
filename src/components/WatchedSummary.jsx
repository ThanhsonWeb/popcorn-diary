import arrowLeft from "../assets/icon/arrow-left.svg";
import imdb from "../assets/icon/imdb2.svg";
import clock from "../assets/icon/clock.svg";
import year from "../assets/icon/year.svg";
import { useNavigate } from "react-router-dom";
function WatchedSummary() {
	const navigate = useNavigate();

	return (
		<div className="flex items-center   bg-gray-900 md:p-4">
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
					<span>12 Movies</span>
				</div>
				{/* 1 */}
				<div className="flex items-center gap-1  ">
					<img src={imdb} alt="Icon" className="lg:h-20 md:15 h-10" />
					<span>12</span>
				</div>
				{/* 2 */}
				<div className="flex items-center gap-1 ">
					<span className="lg:text-5xl md:text-3xl text-xl">⭐</span>
					<span>12</span>
				</div>
				{/* 3 */}
				<div className="flex items-center gap-1 ">
					<img src={clock} alt="clockIcon" className="lg:h-20 md:15 h-10" />
					<span>61 min</span>
				</div>
			</div>
		</div>
	);
}

export default WatchedSummary;
