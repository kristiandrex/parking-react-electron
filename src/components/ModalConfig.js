import React from "react";
import Modal from "./Modal";

export default function ModalConfig(props) {
	const saveConfig = e => {
		e.preventDefault();

		const inputs = e.target.querySelectorAll("input[type='number']");

		for (let index = 0; index < inputs.length; index++) {
			if (inputs[index].value.trim() === "") {
				return props.showToast("Rellene todos los campos");
			}
		}

		const config = {
			priceCars: e.target.price_car.value,
			priceMotorcycles: e.target.price_motorcycle.value,
			requiredTime: e.target.required_time.value,
			spacesCars: e.target.spaces_cars.value,
			spacesMotorcycles: e.target.spaces_motorcycles.value
		};

		props.setConfig(config);
		props.setShow(false);
	};

	return (
		props.show && (
			<Modal>
				<form onSubmit={saveConfig}>
					<div className="row">
						<div className="input-field col s6">
							<input
								id="price_car"
								name="price_car"
								type="number"
								defaultValue={props.config ? props.config.priceCars : ""}
							/>
							<label htmlFor="price_car" className={props.config ? "active" : null}>
								Precio automóvil
							</label>
						</div>
						<div className="input-field col s6">
							<input
								id="price_motorcycle"
								name="price_motorcycle"
								type="number"
								defaultValue={props.config ? props.config.priceMotorcycles : ""}
							/>
							<label
								htmlFor="price_motorcycle"
								className={props.config ? "active" : null}
							>
								Precio motocicleta
							</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s6 push-s3">
							<input
								type="number"
								id="required_time"
								name="required_time"
								defaultValue={props.config ? props.config.requiredTime : ""}
							/>
							<label
								htmlFor="required_time"
								className={props.config ? "active" : null}
							>
								Tiempo mínimo
							</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s6">
							<input
								id="spaces_cars"
								name="spaces_cars"
								type="number"
								defaultValue={props.config ? props.config.spacesCars : ""}
							/>
							<label htmlFor="spaces_cars" className={props.config ? "active" : null}>
								Espacios automóvil
							</label>
						</div>
						<div className="input-field col s6">
							<input
								id="spaces_motorcycles"
								name="spaces_motorcycles"
								type="number"
								defaultValue={props.config ? props.config.spacesMotorcycles : ""}
							/>
							<label
								htmlFor="spaces_motorcycles"
								className={props.config ? "active" : null}
							>
								Espacios motocicleta
							</label>
						</div>
					</div>
					<div className="row" style={{ marginBottom: 0 }}>
						<button className="waves-effect waves-light btn white">
							<i className="material-icons right">check</i>Guardar
						</button>
					</div>
				</form>
			</Modal>
		)
	);
}
