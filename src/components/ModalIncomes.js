import React from "react";
import Modal from "./Modal";

export default function ModalIncomes(props) {
	return (
		props.show && (
			<Modal>
				<table className="centered">
					<thead>
						<tr>
							<th>Automóviles</th>
							<th>Motocicletas</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td style={{ width: "33%" }}>${props.incomesCars}</td>
							<td style={{ width: "33%" }}>${props.incomesMotorcycles}</td>
							<td style={{ width: "33%" }}>
								${props.incomesCars + props.incomesMotorcycles}
							</td>
						</tr>
					</tbody>
				</table>
				<div className="section" style={{ paddingBottom: 0 }}>
					<button
						type="button"
						className="btn white"
						onClick={() => props.setShow(false)}
					>
						<i className="material-icons">clear</i>
					</button>
				</div>
			</Modal>
		)
	);
}
