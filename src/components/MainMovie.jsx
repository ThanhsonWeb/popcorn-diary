import background from "../assets/img/bg-hero.jpg";
import { useMovies } from "../context/MovieContext";
import MovieList from "./MovieList";
function MainMovie() {
	const { query } = useMovies();
	if (!query) {
		return (
			<div
				className="h-[80vh] bg-cover bg-center flex items-center justify-center"
				style={{ backgroundImage: `url(${background})` }}
			>
				<h1 className="text-5xl font-bold text-white drop-shadow-lg">
					PopcornDiary
				</h1>
			</div>
		);
	}

	return <MovieList />;
}

export default MainMovie;
