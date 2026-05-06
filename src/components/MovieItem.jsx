import yearIcon from "../assets/icon/year.svg";

function MovieItem({ movie }) {
	const { Poster, Title, Year } = movie;

	return (
		<li className="rounded-2xl bg-gray-900 cursor-pointer mt-5 ">
			<img
				src={Poster}
				alt={Title}
				className="w-full h-[85%] bg-cover bg-center  "
			/>
			<h3 className="font-semibold text-white text-2xl truncate text-center mt-2">
				{Title}
			</h3>
			<div className="flex items-center justify-center text-white gap-4 text-lg mt-2 ">
				<img src={[yearIcon]} alt="Icon" className="h-10 " />
				<span> {Year}</span>
			</div>
		</li>
	);
}

export default MovieItem;
