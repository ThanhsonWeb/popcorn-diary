import yearIcon from "../assets/icon/year.svg";
import { useMovies } from "../context/MovieContext";
import { Link } from "react-router-dom";

function MovieItem({ movie }) {
	const { Poster, Title, Year, imdbID } = movie;

	const { handleSelected } = useMovies();

	return (
		<li className="rounded-2xl bg-gray-900 cursor-pointer mt-5 ">
			<Link
				to={`/detail/${imdbID}`}
				onClick={() => handleSelected(movie.imdbID)}
			>
				<img
					src={Poster}
					alt={Title}
					className=" w-full  h-90  rounded-xl  "
				/>
				

				<div className="px-3 py-2 text-center">
					<h3 className="font-semibold text-white text-2xl  sm:truncate ">
						{Title}
					</h3>
					<div className="inline-flex items-center text-white gap-4 text-lg mt-3  ">
						<img src={yearIcon} alt="Icon" className="h-10" />
						<span> {Year}</span>
					</div>
				</div>
			</Link>
		</li>
	);
}

export default MovieItem;
