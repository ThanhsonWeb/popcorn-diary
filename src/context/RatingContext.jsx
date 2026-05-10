import { createContext, useState, useContext } from "react";
const RatingContext = createContext();

//RatingContext → focused only on rating logic (rating, tempRating, handlers).

function RatingProvider({ children }) {
	const [rating, setRating] = useState(null);
	const [tempRating, setTempRating] = useState(null);

	return (
		<RatingContext.Provider
			value={{
				rating,
				setRating,
				tempRating,
				setTempRating,
			}}
		>
			{children}
		</RatingContext.Provider>
	);
}

function useRating() {
	const context = useContext(RatingContext);
	if (!context) throw new Error("useRating must be use inside RatingProvider");
	return context;
}

export { RatingProvider, useRating };
