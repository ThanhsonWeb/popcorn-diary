function Button({onClick}) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-200"
    >
      Sign In
    </button>
  );
}

export default Button;
