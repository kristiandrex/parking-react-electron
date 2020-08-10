import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../Modal/Modal";
import { SET_CONFIG } from "../../redux/types";
import "./Config.scss";

export default function Config() {
	const { config, count } = useSelector((state) => state);
	const dispatch = useDispatch();

	const handleSaveConfig = (event) => {
		event.preventDefault();

		const spacesCars = Number(event.target.spacesCars.value);
		const spacesMotorcycles = Number(event.target.spacesMotorcycles.value);

		if (spacesCars < count.cars || spacesMotorcycles < count.motorcycles) {
			return alert("Hay más vehículos parqueados");
		}

		const config = {
			show: false,
			price: {
				cars: Number(event.target.priceCars.value),
				motorcycles: Number(event.target.priceMotorcycles.value)
			},
			spaces: {
				cars: spacesCars,
				motorcycles: spacesMotorcycles
			},
			time: Number(event.target.time.value)
		};

		dispatch({
			type: SET_CONFIG,
			payload: config
		});
	};

	if (!config.show) {
		return null;
	}

	return (
		<Modal>
			<form onSubmit={handleSaveConfig} className="config">
				<div className="row">
					<p>Precio</p>
					<div className="input-field col s6">
						<input
							name="priceCars"
							type="number"
							defaultValue={config.price.cars}
						/>
					</div>
					<div className="input-field col s6">
						<input
							name="priceMotorcycles"
							type="number"
							defaultValue={config.price.motorcycles}
						/>
					</div>
				</div>
				<div className="row">
					<p>Espacio</p>
					<div className="input-field col s6">
						<input
							name="spacesCars"
							type="number"
							defaultValue={config.spaces.cars}
						/>
					</div>
					<div className="input-field col s6">
						<input
							name="spacesMotorcycles"
							type="number"
							defaultValue={config.spaces.motorcycles}
						/>
					</div>
				</div>
				<div className="row">
					<p>Tiempo mínimo</p>
					<div className="input-field col s6 push-s3">
						<input
							type="number"
							name="time"
							defaultValue={config.time}
						/>
					</div>
				</div>
				<button type="submit" className="btn primary">
					Guardar
				</button>
			</form>
		</Modal>
	);
}