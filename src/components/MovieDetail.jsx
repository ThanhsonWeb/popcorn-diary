import { useMovies } from "../context/MovieContext";
import Loading from "../ui/Loading";
import imdb from "../assets/icon/imdb2.svg";
import arrowleft from "../assets/icon/arrow-left.svg";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";

function MovieDetail() {
	const navigate = useNavigate();
	const { movieDetail, setMovieDetail, handleSelected } = useMovies();

	console.log(movieDetail);

	if (!movieDetail) return <Loading />;

	const {
		Director,
		Genre,
		Poster,
		Released,
		Runtime,
		Title,
		imdbRating,
		Plot,
		Actors,
	} = movieDetail;

	function handleClick() {
		setMovieDetail(null);
		handleSelected(null);
		navigate(-1);
	}
	return (
		<div className="md:flex  gap-5 text-white ">
			{/* left */}
			<div className="flex  flex-row md:flex-col   w-full bg-gray-800">
				<button
					onClick={handleClick}
					className="absolute p-3 rounded-full bg-amber-50 active:scale-90 cursor-pointer hover:scale-105  transition duration-200"
				>
					<img src={arrowleft} alt="arrowleft" className="h-10" />
				</button>
				<img
					src={Poster}
					alt={Title}
					className=" md:w-full sm:w-[220px]  w-[170px] object-cover"
				/>
				{/* infor */}
				<div className="p-5 md:w-full ">
					<h2 className="text-xl font-semibold md:truncate my-2 ">{Title}</h2>
					<p className="mb-2">
						{Released} • {Runtime}
					</p>
					<span>{Genre}</span>
					<div className="flex items-center text-lg mt-4">
						<img src={imdb} alt="IMdb" className="h-12" />
						<span>{imdbRating}</span>
					</div>
				</div>
			</div>
			{/* right */}
			<div className="text-xl p-5">
				<StarRating />

				<p className="w-[80%] ">{Plot}</p>
				<p className="my-5">{Actors}</p>
				<p className="text-end italic">- Direced by {Director} -</p>
			</div>
		</div>
	);
}

export default MovieDetail;
