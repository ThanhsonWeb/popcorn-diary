import logo from "../assets/img/logo.jpg";
import SearchMovie from "./SearchMovie";
import Results from "./Results";

function Header() {
	return (
		<>
			<div className="flex  items-center justify-evenly p-6 bg-purple-900">
				<div className="flex items-center gap-3 ">
					<img src={logo} alt="logo" className="h-20 w-20 rounded-full" />
					<h2 className=" hidden md:block text-4xl  font-bold tracking-wide text-yellow-50">
						PopcornDiary
					</h2>
				</div>

				<div className="w-[50%]">
					<SearchMovie />
				</div>
			</div>
			<div>
				<Results />
			</div>
		</>
	);
}

export default Header;
