import { useMovies } from "../context/MovieContext";
import arrowUp from "../assets/icon/arrowUp.svg";
import arrowDown from "../assets/icon/arrowDown.svg";
import arrowCircle from "../assets/icon/angles-down.svg";

function Results() {
	const { query, movieData, isOpen, setIsOpen, movieDetail } = useMovies();

	return (
		<>
			{movieData.length === 0 ? (
				""
			) : (
				<div className="flex items-center justify-between md:p-4 p-2 w-[87%] mx-auto bg-gray-500 rounded-2xl my-5">
					<h3 className="md:text-3xl text-2xl text-center font-semibold text-white">
						{!movieDetail ? (
							`Top ${movieData.length} Results for ${query} 🎉`
						) : (
							<div className="flex items-center gap-4  " >
								<span>Movie Detail</span>
								<div className="p-2 bg-white rounded-full"><img src={arrowCircle} alt="arrowCircle" className="h-10" /></div>
							</div>
						)}
					</h3>
					{!movieDetail && (
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="md:h-15 md:w-15 h-10 w-10 flex items-center cursor-pointer bg-purple-700 rounded-full"
						>
							<img
								src={isOpen ? arrowUp : arrowDown}
								alt="arrowIcon"
								className="h-20"
							/>
						</button>
					)}
				</div>
			)}
		</>
	);
}

export default Results;
