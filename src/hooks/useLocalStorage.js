import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			return initialValue;
		}
	});

	const setValue = value => {
		setStoredValue(value);
		localStorage.setItem(key, JSON.stringify(value));
	};

	return [storedValue, setValue];
}
