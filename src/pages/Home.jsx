import theater from "../assets/img/theater.jpg";
import { useMovies } from "../context/MovieContext";
import MovieList from "../components/MovieList";
function Home() {
	const { query, username } = useMovies();
	if (!query) {
		return (
			<div
				className="h-[80vh] bg-cover bg-center flex  justify-center"
				style={{ backgroundImage: `url(${theater})` }}
			>
				<h1 className="md:text-6xl text-4xl font-bold text-white mt-30">
					Welcome ! {username}👋
					<br /> 
				</h1>
			</div>
		);
	}

	return <MovieList />;
}

export default Home;
