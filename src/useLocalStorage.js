import { useState, useEffect } from "react";

// Add parameters to make it reusable: (initialState, key)
export function useLocalStorage(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    
    // If storedValue exists, parse it. 
    // If NOT (first time user), return the initialState ([])
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}