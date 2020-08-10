import {
    REMOVE_VEHICLE,
    REMOVE_COUNT_CARS,
    REMOVE_COUNT_MOTORCYLES,
    ADD_VEHICLE,
    ADD_COUNT_CARS,
    ADD_COUNT_MOTORCYCLES,
    ADD_HISTORY_MOTORCYCLES,
    ADD_HISTORY_CARS
} from "./types";

export function removeVehicle(vehicle, index) {
    return (dispatch) => {
        dispatch({
            type: REMOVE_VEHICLE,
            payload: index
        });

        dispatch({
            type: vehicle.category === "CAR"
                ? REMOVE_COUNT_CARS
                : REMOVE_COUNT_MOTORCYLES
        });

        dispatch({
            type: vehicle.category === "CAR" ? ADD_HISTORY_CARS : ADD_HISTORY_MOTORCYCLES,
            payload: vehicle
        });
    }
}

export function addVehicle(vehicle) {
    return (dispatch) => {
        dispatch({
            type: ADD_VEHICLE,
            payload: vehicle
        });

        dispatch({
            type: vehicle.category === "CAR"
                ? ADD_COUNT_CARS
                : ADD_COUNT_MOTORCYCLES
        });
    };
}