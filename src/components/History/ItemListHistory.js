import React from "react";

export default function ItemListHistory({ vehicle }) {
    const entry = new Date(vehicle.entry).toLocaleTimeString();
    const departure = new Date(vehicle.departure).toLocaleTimeString();

    return (
        <tr key={vehicle.entry}>
            <td>{vehicle.vehicleID}</td>
            <td>{entry}</td>
            <td>{departure}</td>
            <td>${vehicle.price}</td>
        </tr>
    )
}
