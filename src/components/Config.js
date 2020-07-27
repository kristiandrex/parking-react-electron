import React from "react";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import "../styles/Config.scss";

export default function Config() {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	const handleSaveConfig = (event) => {
		event.preventDefault();

		const config = {
			show: false,
			price: {
				cars: Number(event.target.priceCars.value),
				motorcycles: Number(event.target.priceMotorcycles.value)
			},
			spaces: {
				cars: Number(event.target.spacesCars.value),
				motorcycles: Number(event.target.spacesMotorcycles.value)
			},
			time: Number(event.target.time.value)
		};

		dispatch({
			type: 'SET_CONFIG',
			payload: config
		});
	};

	const handleHideConfig = () => {
		dispatch({ type: 'HIDE_CONFIG' });
	}

	if (!state.config.show) {
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
							defaultValue={state.config.price.cars}
						/>
					</div>
					<div className="input-field col s6">
						<input
							name="priceMotorcycles"
							type="number"
							defaultValue={state.config.price.motorcycles}
						/>
					</div>
				</div>
				<div className="row">
					<p>Espacio</p>
					<div className="input-field col s6">
						<input
							name="spacesCars"
							type="number"
							defaultValue={state.config.spaces.cars}
						/>
					</div>
					<div className="input-field col s6">
						<input
							name="spacesMotorcycles"
							type="number"
							defaultValue={state.config.spaces.motorcycles}
						/>
					</div>
				</div>
				<div className="row">
					<p>Tiempo mínimo</p>
					<div className="input-field col s6 push-s3">
						<input
							type="number"
							name="time"
							defaultValue={state.config.time}
						/>
					</div>
				</div>
				<button className="btn primary" onClick={handleHideConfig}>
					Guardar
				</button>
			</form>
		</Modal>
	);
}