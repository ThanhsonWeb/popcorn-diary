function Button({ onClick, children, type }) {
	return (
		<button
			onClick={onClick}
			type={type}
			className="px-6 py-2 bg-purple-500 text-white text-2xl font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-200 cursor-pointer"
		>
			{children}
		</button>
	);
}

export default Button;
