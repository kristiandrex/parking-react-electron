const initialState = {
    cars: 0,
    motorcycles: 0
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_COUNT_CARS': {
            return {
                ...state,
                cars: state.cars + 1
            }
        }

        case 'ADD_COUNT_MOTORCYCLES': {
            return {
                ...state,
                cars: state.motorcycles + 1
            }
        }

        case 'REMOVE_COUNT_CARS': {
            return {
                ...state,
                cars: state.cars - 1
            }
        }

        case 'REMOVE_COUNT_MOTORCYCLES': {
            return {
                ...state,
                cars: state.motorcycles - 1
            }
        }

        default:
            return state
    }
}
