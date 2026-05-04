function SearchMovie() {
  return (
    <form className="w-full">
      <input
        type="text"
        className="px-4 py-2 rounded-xl w-full text-xl 
                   bg-gray-800 text-white placeholder-gray-400 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   transition duration-200"
        placeholder="Search movies..."
      />
    </form>
  );
}

export default SearchMovie;
