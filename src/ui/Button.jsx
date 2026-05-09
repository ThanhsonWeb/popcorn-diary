import { Link } from "react-router-dom";
function Button({ onClick, children, type, variant = "primary", to }) {
	const base =
		" bg-purple-500 text-white  font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-200 cursor-pointer";

	const style = {
		primary: "p-5  ",
		secondary:
			"bg-red-800 flex items-center md:gap-3 md:text-2xl md:px-6 py-2 px-2  ",
	};

	const classname = `${base} + ${style[variant]}`;

	if (to)
		return (
			<Link to={to} onClick={onClick} type={type} className={classname}>
				{children}
			</Link>
		);

	return (
		<button onClick={onClick} type={type} className={classname}>
			{children}
		</button>
	);
}

export default Button;
