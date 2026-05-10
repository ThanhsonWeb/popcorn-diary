import yearIcon from "../assets/icon/year.svg";
import { useMovies } from "../context/MovieContext";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function MovieItem({ movie }) {
	const KEY = "783e376b";
	const { Poster, Title, Year, imdbID } = movie;
	const [detail, setDetail] = useState(null);

	const { handleSelected } = useMovies();

	useEffect(() => {
		async function FetchDetail() {
			const res = await fetch(
				`https://www.omdbapi.com/?apikey=${KEY}&i=${imdbID}`,
			);

			const data = await res.json();
			console.log(data);
			setDetail(data);
		}
		FetchDetail();
	}, [imdbID]);

	return (
		<li className="rounded-2xl bg-gray-900 cursor-pointer mt-5 relative  ">
			<Link
				to={`/detail/${imdbID}`}
				onClick={() => handleSelected(movie.imdbID)}
			>
				<img src={Poster} alt={Title} className=" w-full  h-90  rounded-xl  " />

				<div className="absolute top-2 left-2 bg-stone-900 px-4 p-3 rounded-full text-amber-200">
					 ⭐ {detail?.imdbRating} 
				</div>

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
