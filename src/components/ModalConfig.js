import React from "react";
import "../css/ModalConfig.css";

export default function ModalConfig(props) {
	const saveConfig = (e) => {
		e.preventDefault();

		const config = {
			priceCars: e.target.price_car.value,
			priceMotorcycles: e.target.price_motorcycle.value,
			requiredTime: e.target.required_time.value,
			spacesCars: e.target.spaces_cars.value,
			spacesMotorcycles: e.target.spaces_motorcycles.value
		};

		props.setConfig(config);
	};

	return (
		<div className="col s6 push-s3 modal-config-wrapper">
			<form className="modal-config" onSubmit={saveConfig}>
				<div className="row">
					<div className="input-field col s6">
						<input id="price_car" name="price_car" type="number" />
						<label htmlFor="price_car">Precio automóvil</label>
					</div>
					<div className="input-field col s6">
						<input id="price_motorcycle" name="price_motorcycle" type="number" />
						<label htmlFor="price_motorcycle">Precio motocicleta</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s6 push-s3">
						<input type="number" id="required_time" name="required_time" />
						<label htmlFor="required_time">Tiempo mínimo</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s6">
						<input id="spaces_cars" name="spaces_cars" type="number" />
						<label htmlFor="spaces_cars">Espacios automóvil</label>
					</div>
					<div className="input-field col s6">
						<input id="spaces_motorcycles" name="spaces_motorcycles" type="number" />
						<label htmlFor="spaces_motorcycles">Espacios motocicleta</label>
					</div>
				</div>
				<div className="row">
					<button className="waves-effect waves-light btn">
						<i className="material-icons right">check</i>Guardar
					</button>
				</div>
			</form>
		</div>
	);
}
