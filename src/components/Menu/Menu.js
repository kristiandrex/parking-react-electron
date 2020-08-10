import React, { memo } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import Config from "../Config/Config";
import History from "../History/History";
import FormVehicle from "./FormVehicle";
import { addVehicle } from "../../redux/actions";
import "./Menu.scss";

function Menu() {
    const { config, count, vehicles, history } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleAddVehicle = (event) => {
        event.preventDefault();

        const category = event.target.category.value;
        const inputs = event.target.querySelectorAll(".input-field input");

        if (category.trim().length === 0) {
            return alert("Seleccione el tipo de vehículo");
        }

        for (let input of inputs) {
            if (input.value.trim().length === 0) {
                return alert("Rellene todos los campos");
            }
        }

        const vehicleID = event.target.vehicleID.value;
        const exists = vehicles.some((vehicle) => vehicle.vehicleID === vehicleID);

        if (exists) {
            return alert("Este vehículo ya está registrado");
        }

        const vehicle = {
            category,
            vehicleID,
            owner: event.target.owner.value,
            ownerID: event.target.ownerID.value,
            phone: event.target.phone.value,
            entry: Date.now()
        };

        const currentCount = vehicle.category === "CAR"
            ? count.cars
            : count.motorcycles;

        const spaces = vehicle.category === "CAR"
            ? config.spaces.cars
            : config.spaces.motorcycles;

        if (currentCount === spaces) {
            return alert("Está lleno");
        }

        dispatch(addVehicle(vehicle));

        event.target.reset();
    };

    const root = document.getElementById("root");

    if (config.show) {
        return createPortal(<Config />, root);
    }

    if (history.show) {
        return createPortal(<History />, root);
    }

    return <FormVehicle onSubmit={handleAddVehicle} />
}

export default memo(Menu);