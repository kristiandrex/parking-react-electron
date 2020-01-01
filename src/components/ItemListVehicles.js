import React, { useState, useEffect, useContext } from "react";
import { StorageContext } from "./App";

export default function ItemListVehicles(props) {
	const { vehicles, setVehicles } = useContext(StorageContext);

	const [seconds, setSeconds] = useState(props.vehicle.seconds || 0);
	let minutes = parseInt(seconds / 60);
	let hours = parseInt(minutes / 60);

	useEffect(() => {
		const timer = setInterval(() => {
			setSeconds(seconds + 1);

			vehicles.find(
				(vehicleStored) => vehicleStored.vehicleID === props.vehicle.vehicleID
			).seconds = seconds + 1;

			setVehicles(vehicles);
		}, 1000);

		return () => clearInterval(timer);
	}, [seconds]);

	return (
		<tr>
			<td className="type">
				{props.vehicle.type === "CAR" ? (
					<i className="material-icons">directions_car</i>
				) : (
					<i className="material-icons">motorcycle</i>
				)}
			</td>
			<td style={{ textTransform: "uppercase" }}>{props.vehicle.vehicleID}</td>
			<td style={{ textTransform: "capitalize" }}>{props.vehicle.owner}</td>
			<td>{props.vehicle.ownerID}</td>
			<td>{props.vehicle.phone}</td>
			<td className="time">
				{hours >= 10 ? hours : `0${hours}`}:{minutes >= 10 ? minutes : `0${minutes}`}
			</td>
			<td className="price">{props.vehicle.price}</td>
			<td>
				<i
					className="material-icons clear"
					style={{ verticalAlign: "middle" }}
					onClick={() => props.removeVehicle(props.vehicle.vehicleID)}
				>
					clear
				</i>
			</td>
		</tr>
	);
}
