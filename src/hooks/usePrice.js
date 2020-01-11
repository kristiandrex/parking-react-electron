import { useState, useContext } from "react";
import { GeneralContext } from "../components/App";

export default function usePrice(type, minutes, hours) {
	const { config } = useContext(GeneralContext);
	const defaultPrice = type === "CAR" ? config.priceCars : config.priceMotorcycles;

	const [state, setState] = useState(() => {
		return minutes + hours * 60 < config.requiredTime
			? config.requiredTime * defaultPrice
			: (minutes + hours * 60) * defaultPrice;
	});

	const setPrice = (minutes, hours) => {
		const price =
			minutes + hours * 60 < config.requiredTime
				? config.requiredTime * defaultPrice
				: (minutes + hours * 60) * defaultPrice;

		setState(price);
	};

	return [state, setPrice];
}
