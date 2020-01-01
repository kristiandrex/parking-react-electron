import React, { useState, useEffect, useContext } from "react";
import { StorageContext } from "./App";
import usePrice from "../hooks/usePrice";

export default function ItemListVehicles(props) {
	const { vehicles, setVehicles } = useContext(StorageContext);

	const [seconds, setSeconds] = useState(props.vehicle.seconds || 0);
	const minutes = parseInt(seconds / 60);
	const hours = parseInt(minutes / 60);

	const [price, setPrice] = usePrice(props.vehicle.type, minutes, hours);

	useEffect(() => {
		const timer = setInterval(() => {
			setSeconds(seconds + 1);
			setPrice(minutes, hours);

			let vehicle = vehicles.find(
				(vehicleStored) => vehicleStored.vehicleID === props.vehicle.vehicleID
			);

			vehicle.seconds = seconds + 1;
			vehicle.price = price;

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
				{hours >= 10 ? hours : `0${hours}`}:
				{minutes % 60 >= 10 ? minutes % 60 : `0${minutes % 60}`}:
				{seconds % 60 >= 10 ? seconds % 60 : `0${seconds % 60}`}
			</td>
			<td className="price">${price}</td>
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
