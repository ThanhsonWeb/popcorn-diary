import Star from "./Star";
import { useState } from "react";
function StarRating() {
	const [rating, setRating] = useState("");

	function handleClick(i) {
		setRating(i + 1);
	}

	return (
		<div className="flex justify-between items-center bg-blue-200 p-5 my-5 rounded-2xl">
			<div className="flex ">
				{Array.from({ length: 10 }, (_, i) => (
					<Star key={i} onClick={() => handleClick(i)} />
				))}
			</div>
			<span className="text-3xl font-bold text-purple-900" >{rating}</span>
		</div>
	);
}

export default StarRating;
