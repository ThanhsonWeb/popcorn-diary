import starFull from "../assets/icon/star-full.svg";
import starEmpty from "../assets/icon/star-empty.svg";
function Star({ onClick }) {
	return (
		<div>
			<button onClick={onClick}>
				<img src={starFull} alt="starFull" className="h-12 cursor-pointer" />
			</button>
		</div>
	);
}

export default Star;
