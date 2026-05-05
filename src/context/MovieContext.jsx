import { createContext, useContext, useState } from "react";

const MovieContext = createContext();

function MovieProvider({ children }) {
	const [query, setQuery] = useState("");

	return (
		<MovieContext.Provider value={{ query, setQuery }}>
			{children}
		</MovieContext.Provider>
	);
}

function useMovies() {
	const context = useContext(MovieContext);
	if (!context) throw new Error("useMovie must be use inside MovieProvider");
	return context;
}

export { MovieProvider, useMovies };
