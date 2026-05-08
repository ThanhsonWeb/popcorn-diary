import { useRating } from "../context/RatingContext";
import Star from "./Star";

function StarRating() {

	const { rating, setRating, tempRating, setTempRating } = useRating();

	function handleClick(i) {
		setRating(i + 1);
		setTempRating(i + 1);
	}

	return (
		<div className="flex justify-around items-center ">
			<div className="flex ">
				{Array.from({ length: 10 }, (_, i) => (
					<Star
						key={i}
						onClick={() => handleClick(i)}
						full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
						onHoverIn={() => setTempRating(i + 1)}
						onHoverOut={() => setTempRating(0)}
					/>
				))}
			</div>
			<span className="md:text-2xl text-3xl ml-5 font-bold text-purple-900">
				{rating || tempRating}
			</span>
		</div>
	);
}

export default StarRating;
