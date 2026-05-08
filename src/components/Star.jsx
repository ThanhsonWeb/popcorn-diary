import starFull from "../assets/icon/star-full.svg";
import starEmpty from "../assets/icon/star-empty.svg";
function Star({ onClick, full, onHoverIn, onHoverOut }) {
	return (
		<div>
			<button
				onClick={onClick}
				onMouseEnter={onHoverIn}
				onMouseLeave={onHoverOut}
			>
				{full ? (
					<img src={starFull} alt="starFull" className="h-12 cursor-pointer" />
				) : (
					<img
						src={starEmpty}
						alt="starEmpty"
						className="h-12 cursor-pointer"
					/>
				)}
			</button>
		</div>
	);
}

export default Star;
