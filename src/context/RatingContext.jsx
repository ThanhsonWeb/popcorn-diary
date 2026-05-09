import { createContext, useState, useContext } from "react";
const RatingContext = createContext();

//RatingContext → focused only on rating logic (rating, tempRating, handlers).

function RatingProvider({ children }) {
	const [rating, setRating] = useState(0);
	const [tempRating, setTempRating] = useState(0);

	return (
		<RatingContext.Provider
			value={{ rating, setRating, tempRating, setTempRating }}
		>
			{children}
		</RatingContext.Provider>
	);
}

function useRating() {
	const context = useContext(RatingContext);
   if(!context) throw new Error("useRating must be use inside RatingProvider")
	return context;
}

export { RatingProvider, useRating };
