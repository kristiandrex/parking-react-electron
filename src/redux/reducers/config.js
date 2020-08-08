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
        case 'SET_CONFIG': {
            return action.payload;
        }

        case 'SHOW_CONFIG': {
            return {
                ...state,
                show: true
            };
        }

        case 'HIDE_CONFIG': {
            return {
                ...state,
                show: false
            };
        }

        default:
            return state;
    }
}