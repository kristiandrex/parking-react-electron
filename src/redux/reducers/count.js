import {
    ADD_COUNT_CARS,
    ADD_COUNT_MOTORCYCLES,
    REMOVE_COUNT_CARS,
    REMOVE_COUNT_MOTORCYLES
} from "../types";

const initialState = {
    cars: 0,
    motorcycles: 0
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COUNT_CARS: {
            return {
                ...state,
                cars: state.cars + 1
            }
        }

        case ADD_COUNT_MOTORCYCLES: {
            return {
                ...state,
                motorcycles: state.motorcycles + 1
            }
        }

        case REMOVE_COUNT_CARS: {
            return {
                ...state,
                cars: state.cars - 1
            }
        }

        case REMOVE_COUNT_MOTORCYLES: {
            return {
                ...state,
                motorcycles: state.motorcycles - 1
            }
        }

        default:
            return state
    }
}
