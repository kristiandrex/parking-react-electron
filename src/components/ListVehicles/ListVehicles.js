import React from "react";
import ItemListVehicles from "./ItemListVehicles";
import { useSelector } from "react-redux";
import "./ListVehicles.scss";

export default function ListVehicles() {
	const vehicles = useSelector((state) => state.vehicles);

	const list = vehicles.map((vehicle, index) => 
		<ItemListVehicles
			vehicle={vehicle}
			key={vehicle.vehicleID}
			index={index}
		/>
	);

	return (
		<div id="list-vehicles" className="col s9">
			<table>
				<thead>
					<tr>
						<th></th>
						<th>
							<span className="material-icons">money</span>
						</th>
						<th>
							<span className="material-icons">person</span>
						</th>
						<th>
							<span className="material-icons">fingerprint</span>
						</th>
						<th>
							<span className="material-icons">phone</span>
						</th>
						<th>
							<span className="material-icons">schedule</span>
						</th>
						<th>
							<span className="material-icons">attach_money</span>
						</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{list}
				</tbody>
			</table>
		</div>
	);
}