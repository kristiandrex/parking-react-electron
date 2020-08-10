import { SET_CONFIG, SHOW_CONFIG } from "../types";

const initialState = {
    show: false,
    price: {
        cars: 0,
        motorcycles: 0
    },
    spaces: {
        cars: 0,
        motorcycles: 0
    },
    time: 0
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_CONFIG: {
            return action.payload;
        }

        case SHOW_CONFIG: {
            return {
                ...state,
                show: true
            };
        }

        default:
            return state;
    }
}