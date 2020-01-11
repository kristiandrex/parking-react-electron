import React, { useContext } from "react";
import ItemListVehicles from "./ItemListVehicles";
import { GeneralContext } from "./App";
import { findVehicle } from "../utils/utils";
import "../css/ListVehicles.css";

export default function ListVehicles(props) {
	const {
		vehicles,
		setVehicles,
		countCars,
		setCountCars,
		countMotorcycles,
		setCountMotorcycles
	} = useContext(GeneralContext);

	const removeVehicle = (vehicleID, price) => {
		const index = findVehicle(vehicles, vehicleID);

		if (vehicles[index].type === "CAR") {
			setCountCars(countCars - 1);
			props.setIncomesCars(props.incomesCars + price);
		} else {
			setCountMotorcycles(countMotorcycles - 1);
			props.setIncomesMotorcyles(props.incomesMotorcycles + price);
		}

		setVehicles(vehicles.filter((_, i) => i !== index));
	};

	return (
		<div id="list-vehicles" className="col s8">
			<table>
				<thead>
					<tr>
						<th></th>
						<th>Placa</th>
						<th style={{ textTransform: "capitalize" }}>Propietario</th>
						<th>Identificación</th>
						<th>Teléfono</th>
						<th>Tiempo</th>
						<th>Precio</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{vehicles.map(vehicle => (
						<ItemListVehicles
							vehicle={vehicle}
							key={vehicle.vehicleID}
							removeVehicle={removeVehicle}
						></ItemListVehicles>
					))}
				</tbody>
			</table>
		</div>
	);
}
