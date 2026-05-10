import { useMovies } from "../context/MovieContext";
import arrowUp from "../assets/icon/arrowUp.svg";
import arrowDown from "../assets/icon/arrowDown.svg";
import arrowCircle from "../assets/icon/angles-down.svg";
import Button from "../ui/Button";

function Results() {
	const { query, movieData, isOpen, setIsOpen, movieDetail, watched } =
		useMovies();

	return (
		<>
			{movieData.length === 0 ? (
				""
			) : (
				<div className="flex items-center  justify-around md:p-4 p-2 lg:w-[87%] w-[95%] mx-auto bg-gray-600 rounded-2xl my-5 ">
					{movieDetail ? (
						<div className="flex items-center gap-4">
							<h3 className="md:text-3xl text-xl font-semibold text-white">
								Movie Detail
							</h3>
							<div className="p-2 bg-white rounded-full">
								<img src={arrowCircle} alt="arrowCircle" className="h-10" />
							</div>
						</div>
					) : watched.length > 0 ? (
						<h3 className="md:text-3xl text-xl font-semibold text-white">
							Top {movieData.length} Results for {query} 🎉
						</h3>
					) : (
						<h3 className="md:text-3xl text-xl font-semibold text-white">
							Movie You Watched ⬇️
						</h3>
					)}

				

					<div className="flex items-center ">
						<Button variant="secondary" to="/watched">
							<span className="whitespace-nowrap">
								🎬 WATCHED {watched.length}
							</span>
						</Button>
					</div>
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
