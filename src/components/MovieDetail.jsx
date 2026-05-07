import { useMovies } from "../context/MovieContext";
import Loading from "../ui/Loading";
import imdb from "../assets/icon/imdb2.svg";

function MovieDetail() {
	const { movieDetail } = useMovies();

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

	return (
		<div className="md:flex  gap-5 text-white ">
			{/* left */}
			<div className="flex  flex-row md:flex-col md:w-[400px]  w-full bg-gray-800">
				<img
					src={Poster}
					alt={Title}
					className=" md:w-full w-[200px]  object-cover"
				/>
				{/* infor */}
				<div className="p-5 md:w-full ">
					<h2 className="text-xl font-semibold truncate my-2 ">{Title}</h2>
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
				<h2>Star</h2>

				<p className="w-[80%] ">{Plot}</p>
				<p className="my-5">{Actors}</p>
				<p className="text-end italic">- Direced by {Director} -</p>
			</div>
		</div>
	);
}

export default MovieDetail;
