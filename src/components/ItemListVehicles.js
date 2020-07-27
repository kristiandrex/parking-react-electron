import React, { useState, useEffect, memo } from "react";
import { useDispatch } from "react-redux";

function ItemListVehicles({ vehicle, index }) {
	const [minutes, setMinutes] = useState(vehicle.time.minutes);
	const [hours, setHours] = useState(vehicle.time.hours);

	const dispatch = useDispatch();

	const handleRemoveVehicle = () => {
		dispatch({
			type: 'REMOVE_VEHICLE',
			payload: index
		});
	};

	useEffect(() => {
		const timer = setInterval(() => {
			if (minutes === 59) {
				setMinutes(0);
				setHours((hours) => hours + 1);
			}

			else {
				setMinutes(minutes + 1);
			}

			dispatch({
				type: 'SET_TIME_VEHICLE',
				payload: {
					index,
					time: {
						minutes,
						hours
					}
				}
			});
		}, 1000);

		return () => clearInterval(timer);
	}, [minutes]);

	return (
		<tr>
			<td className="category">
				{
					vehicle.category === "CAR"
						? <i className="material-icons">directions_car</i>
						: <i className="material-icons">motorcycle</i>
				}
			</td>
			<td>{vehicle.vehicleID}</td>
			<td>{vehicle.owner}</td>
			<td>{vehicle.ownerID}</td>
			<td>{vehicle.phone}</td>
			<td className="time">
				{hours.toString().padStart(2, 0)}:{minutes.toString().padStart(2, 0)}
			</td>
			<td className="price">${vehicle.price}</td>
			<td>
				<i className="material-icons clear" onClick={handleRemoveVehicle}>clear</i>
			</td>
		</tr>
	);
}

export default memo(ItemListVehicles);