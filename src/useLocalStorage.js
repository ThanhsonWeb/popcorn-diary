import { useState, useEffect } from "react";

export function useLocalStorage() {
	const [watched, setWatched] = useState(function () {
		const storeValue = localStorage.getItem("watched");
		return JSON.parse(storeValue);
	});

	useEffect(
		function () {
			localStorage.setItem("watched", JSON.stringify(watched));
		},
		[watched],
	);
	return [watched, setWatched];
}
