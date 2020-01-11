import React, { useContext } from "react";
import "../css/Sidebar.css";
import { GeneralContext } from "./App";
import { findVehicle } from "../utils/utils";

export default function Sidebar(props) {
	const {
		vehicles,
		setVehicles,
		countCars,
		setCountCars,
		countMotorcycles,
		setCountMotorcycles
	} = useContext(GeneralContext);

	const addVehicle = e => {
		e.preventDefault();

		if (e.target.typeVehicle.value === "") {
			return props.showToast("Seleccione el tipo de vehículo");
		}

		const inputs = e.target.querySelectorAll("input[type='text'], input[type='number']");

		for (let index = 0; index < inputs.length; index++) {
			if (inputs[index].value.trim() === "") {
				return props.showToast("Rellene todos los campos");
			}
		}

		const vehicle = {
			type: e.target.typeVehicle.value,
			vehicleID: e.target.vehicleID.value,
			owner: e.target.owner.value,
			ownerID: e.target.ownerID.value,
			phone: e.target.phone.value,
			price: 0
		};

		if (findVehicle(vehicles, vehicle.vehicleID) !== -1) {
			return props.showToast("Vehículo ya registrado");
		}

		if (vehicle.type === "CAR" && countCars < props.config.spacesCars) {
			setCountCars(countCars + 1);
		} else if (
			vehicle.type === "MOTORCYCLE" &&
			countMotorcycles < props.config.spacesMotorcycles
		) {
			setCountMotorcycles(countMotorcycles + 1);
		} else {
			return props.showToast("No hay espacio");
		}

		setVehicles([vehicle, ...vehicles]);
		e.target.reset();
	};

	return (
		<div id="sidebar" className="col s4">
			<form onSubmit={addVehicle} style={{ width: "100%" }}>
				<div className="section" style={{ paddingTop: 0 }}>
					<input type="radio" name="typeVehicle" value="CAR" id="type-car" />
					<label htmlFor="type-car" className="btn btn-type btn waves-effect waves-light">
						<i className="material-icons">directions_car</i>${props.config.priceCars}
					</label>
					<input
						type="radio"
						name="typeVehicle"
						value="MOTORCYCLE"
						id="type-motorcycle"
					/>
					<label
						htmlFor="type-motorcycle"
						className="btn btn-type btn waves-effect waves-light"
					>
						<i className="material-icons">motorcycle</i>${props.config.priceMotorcycles}
					</label>
				</div>
				<div className="required-time">
					Precio mínimo: {props.config.requiredTime} minutos
				</div>
				<div className="input-field">
					<i className="material-icons prefix">money</i>
					<input
						type="text"
						id="vehicle-id"
						style={{ textTransform: "uppercase" }}
						name="vehicleID"
					/>
					<label htmlFor="vehicle-id">Placa:</label>
				</div>
				<div className="input-field">
					<i className="material-icons prefix">person</i>
					<input
						type="text"
						id="owner"
						style={{ textTransform: "capitalize" }}
						name="owner"
					/>
					<label htmlFor="owner">Propietario:</label>
				</div>
				<div className="input-field">
					<i className="material-icons prefix">fingerprint</i>
					<input type="text" id="owner-id" name="ownerID" />
					<label htmlFor="owner-id">Identificación:</label>
				</div>
				<div className="input-field">
					<i className="material-icons prefix">phone</i>
					<input type="number" id="phone" name="phone" />
					<label htmlFor="phone">Teléfono:</label>
				</div>
				<table className="parking-spaces">
					<caption>Cupos</caption>
					<tbody>
						<tr>
							<td>
								<i className="material-icons">directions_car</i>
							</td>
							<td id="cars-parking-spaces">{props.config.spacesCars - countCars}</td>
						</tr>
						<tr>
							<td>
								<i className="material-icons">motorcycle</i>
							</td>
							<td id="motorcycles-parking-spaces">
								{props.config.spacesMotorcycles - countMotorcycles}
							</td>
						</tr>
					</tbody>
				</table>
				<div
					className="section"
					style={{ paddingBottom: 0, display: "flex", justifyContent: "space-between" }}
				>
					<button type="submit" className="btn waves-effect white">
						Registrar
						<i className="material-icons right">done</i>
					</button>
					<button
						type="button"
						className="waves-effect waves-light btn-flat light"
						onClick={() => props.setShowIncomes(true)}
					>
						Recaudado
						<i className="material-icons right">assignment</i>
					</button>
					<button
						type="button"
						className="btn-flat light waves-effect waves-light"
						onClick={() => props.setShowConfig(true)}
					>
						<i className="material-icons">build</i>
					</button>
				</div>
			</form>
		</div>
	);
}
