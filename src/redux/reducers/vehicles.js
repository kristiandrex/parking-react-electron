import { ADD_VEHICLE, REMOVE_VEHICLE } from "../types";

export default function reducer(state = [], action) {
    switch (action.type) {
        case ADD_VEHICLE: {
            return [
                action.payload,
                ...state
            ];
        }

        case REMOVE_VEHICLE: {
            const newState = [...state];
            newState.splice(action.payload, 1);

            return newState;
        }

        default:
            return state
    }
}