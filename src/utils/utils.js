export const findVehicle = (vehicles, vehicleID) => {
	return vehicles.findIndex((vehicle) => vehicle.vehicleID === vehicleID);
};
