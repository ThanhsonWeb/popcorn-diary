import logo from "../assets/img/logo.jpg";
import SearchMovie from "./SearchMovie";
import Results from "./Results";
import Button from "../ui/Button";
import { useNavigate, Link } from "react-router-dom";
import { useMovies } from "../context/MovieContext";

function Header() {
	const navigate = useNavigate();
	const { username, setUsername } = useMovies();

	return (
		<>
			<div className="flex  items-center justify-between  p-6 bg-purple-900">
				<Link to="/">
					<div className="flex items-center gap-3 ">
						<img src={logo} alt="logo" className="h-20 w-20 rounded-full" />
						<h2 className=" hidden md:block lg:text-4xl text-2xl  font-bold tracking-wide text-yellow-50">
							PopcornDiary
						</h2>
					</div>
				</Link>

				<div className="w-[50%] ">
					<SearchMovie />
				</div>
				{username !== "" ? (
					<button
						onClick={() => setUsername("")}
						className="font-bold shadow-2xl text-xl bg-amber-50 p-4 rounded-2xl"
					>
						{username}
					</button>
				) : (
					<Button onClick={() => navigate("/signin")}>Sign In</Button>
				)}
			</div>
			<div>
				<Results />
			</div>
		</>
	);
}

export default Header;
