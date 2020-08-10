import React, { useEffect, memo, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { removeVehicle } from "../../redux/actions";
import getPrice from "../../utils/getPrice";
import getTime from "../../utils/getTime";

function ItemListVehicles({ vehicle, index }) {
	const [time, setTime] = useState(getTime(vehicle.entry));
	const [price, setPrice] = useState(getPrice(time, vehicle.category));

	const hours = useMemo(() => time.hours.toString().padStart(2, 0), [time.hours]);
	const minutes = useMemo(() => time.minutes.toString().padStart(2, 0), [time.minutes]);

	const category = vehicle.category === "CAR"
		? <i className="material-icons">directions_car</i>
		: <i className="material-icons">motorcycle</i>;

	const dispatch = useDispatch();

	const handleRemoveVehicle = () => {
		vehicle.departure = Date.now();
		vehicle.price = price;

		dispatch(removeVehicle(vehicle, index));
	};

	useEffect(() => {
		const timer = setInterval(() => {
			const newTime = getTime(vehicle.entry);

			setTime(newTime);
			setPrice(getPrice(newTime, vehicle.category));
		}, 60000);

		return () => clearInterval(timer);
	}, [vehicle.entry, vehicle.category, time, setPrice]);

	return (
		<tr>
			<td className="category">{category}</td>
			<td>{vehicle.vehicleID}</td>
			<td>{vehicle.owner}</td>
			<td>{vehicle.ownerID}</td>
			<td>{vehicle.phone}</td>
			<td className="time">{hours}:{minutes}</td>
			<td className="price">${price}</td>
			<td>
				<i className="material-icons clear" onClick={handleRemoveVehicle} >
					clear
				</i>
			</td>
		</tr>
	);
}

export default memo(ItemListVehicles);