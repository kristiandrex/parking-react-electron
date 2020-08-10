import {
    SHOW_HISTORY,
    HIDE_HISTORY,
    ADD_HISTORY_CARS,
    ADD_HISTORY_MOTORCYCLES
} from "../types";

const initialState = {
    show: false,
    cars: 0,
    motorcycles: 0,
    list: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_HISTORY: {
            return {
                ...state,
                show: true
            };
        }

        case HIDE_HISTORY: {
            return {
                ...state,
                show: false
            }
        }

        case ADD_HISTORY_CARS: {
            return {
                ...state,
                list: [
                    action.payload,
                    ...state.list
                ],
                cars: state.cars + action.payload.price
            };
        }

        case ADD_HISTORY_MOTORCYCLES: {
            return {
                ...state,
                list: [
                    action.payload,
                    ...state.list
                ],
                motorcycles: state.motorcycles + action.payload.price
            };
        }

        default:
            return state
    }
}