import { useMovies } from "../context/MovieContext";
import arrowUp from "../assets/icon/arrowUp.svg";
import arrowDown from "../assets/icon/arrowDown.svg";

function Results() {
	const { query, movieData, isOpen, setIsOpen } = useMovies();

	return (
		<>
			{movieData.length === 0 ? (
				""
			) : (
				<div className="flex items-center justify-between p-4 w-[87%] mx-auto bg-gray-500 rounded-2xl my-5">
					<h3 className="text-3xl text-center font-semibold text-white">
						Top {movieData.length} Results for {query} 🎉
					</h3>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="h-15 w-15 flex items-center cursor-pointer bg-purple-700 rounded-full"
					>
						<img
							src={isOpen ? arrowUp : arrowDown}
							alt="arrowIcon"
							className="h-20"
						/>
					</button>
				</div>
			)}
		</>
	);
}

export default Results;
