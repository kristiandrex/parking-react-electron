import React from 'react';
import ItemListVehicles from './ItemListVehicles';
import { useSelector } from 'react-redux';
import '../styles/ListVehicles.scss';

export default function ListVehicles() {
	const vehicles = useSelector((state) => state.vehicles);

	return (
		<div id='list-vehicles' className='col s9'>
			<table>
				<thead>
					<tr>
						<th></th>
						<th>
							<span className='material-icons'>money</span>
						</th>
						<th>
							<span className='material-icons'>person</span>
						</th>
						<th>
							<span className='material-icons'>fingerprint</span>
						</th>
						<th>
							<span className='material-icons'>phone</span>
						</th>
						<th>
							<span className='material-icons'>schedule</span>
						</th>
						<th>
							<span className='material-icons'>attach_money</span>
						</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{
						vehicles.map((vehicle, index) => (
							<ItemListVehicles
								vehicle={vehicle}
								key={vehicle.vehicleID}
								index={index}
							/>
						))
					}
				</tbody>
			</table>
		</div>
	);
}