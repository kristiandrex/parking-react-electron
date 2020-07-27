const defaultState = {
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

const initialState = window.localStorage.getItem('config')
    ? JSON.parse(window.localStorage.getItem('config'))
    : defaultState;

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_CONFIG': {
            window.localStorage.setItem(JSON.stringify(action.payload));
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