import React, { useContext } from "react";
import "../css/Sidebar.css";
import { StorageContext } from "./App";
import { findVehicle } from "../utils/utils";

export default function Sidebar() {
	const {
		vehicles,
		setVehicles,
		config,
		countCars,
		setCountCars,
		countMotorcycles,
		setCountMotorcycles
	} = useContext(StorageContext);

	const addVehicle = (e) => {
		e.preventDefault();

		const vehicle = {
			type: e.target.typeVehicle.value,
			vehicleID: e.target.vehicleID.value,
			owner: e.target.owner.value,
			ownerID: e.target.ownerID.value,
			phone: e.target.phone.value,
			seconds: 0,
			price: 0
		};

		if (findVehicle(vehicles, vehicle.vehicleID) !== -1) {
			return alert("Vehículo ya registrado");
		}

		if (vehicle.type === "CAR" && countCars < config.spacesCars) {
			setCountCars(countCars + 1);
		} else if (vehicle.type === "MOTORCYCLE" && countMotorcycles < config.spacesMotorcycles) {
			setCountMotorcycles(countMotorcycles + 1);
		} else {
			return alert("No hay espacio");
		}

		setVehicles([vehicle, ...vehicles]);
		e.target.reset();
	};

	return (
		<div id="sidebar" className="col s4">
			<form onSubmit={addVehicle}>
				<div className="section" style={{ paddingTop: 0 }}>
					<input type="radio" name="typeVehicle" value="CAR" required id="type-car" />
					<label htmlFor="type-car" className="btn btn-type btn waves-effect waves-light">
						<i className="material-icons">directions_car</i>${config.priceCars}
					</label>
					<input
						type="radio"
						name="typeVehicle"
						value="MOTORCYCLE"
						id="type-motorcycle"
						required
					/>
					<label
						htmlFor="type-motorcycle"
						className="btn btn-type btn waves-effect waves-light"
					>
						<i className="material-icons">motorcycle</i>${config.priceMotorcycles}
					</label>
				</div>
				<div className="required-time">Precio mínimo: {config.requiredTime} minutos</div>
				<div className="input-field">
					<i className="material-icons prefix">money</i>
					<input
						type="text"
						id="vehicle-id"
						style={{ textTransform: "uppercase" }}
						name="vehicleID"
						required
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
						required
					/>
					<label htmlFor="owner">Propietario:</label>
				</div>
				<div className="input-field">
					<i className="material-icons prefix">fingerprint</i>
					<input type="text" id="owner-id" name="ownerID" required />
					<label htmlFor="owner-id">Identificación:</label>
				</div>
				<div className="input-field">
					<i className="material-icons prefix">phone</i>
					<input type="text" id="phone" name="phone" required />
					<label htmlFor="phone">Teléfono:</label>
				</div>
				<table className="parking-spaces">
					<caption>Cupos</caption>
					<tbody>
						<tr>
							<td>
								<i className="material-icons">directions_car</i>
							</td>
							<td id="cars-parking-spaces">{config.spacesCars - countCars}</td>
						</tr>
						<tr>
							<td>
								<i className="material-icons">motorcycle</i>
							</td>
							<td id="motorcycles-parking-spaces">
								{config.spacesMotorcycles - countMotorcycles}
							</td>
						</tr>
					</tbody>
				</table>
				<div className="section" style={{ paddingBottom: 0 }}>
					<button
						type="submit"
						className="btn waves-effect btn-register"
						style={{ margin: "0 1rem" }}
					>
						Registrar
						<i className="material-icons right">done</i>
					</button>
					<button
						type="button"
						className="waves-effect waves-light btn btn-flat btn-incomes"
						style={{ margin: "0 1rem" }}
					>
						Recaudado
						<i className="material-icons right">assignment</i>
					</button>
				</div>
			</form>
		</div>
	);
}
