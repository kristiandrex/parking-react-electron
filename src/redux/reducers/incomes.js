const initialState = {
    show: false,
    cars: 0,
    motorcycles: 0
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SHOW_INCOMES': {
            return {
                ...state,
                show: true
            };
        }

        case 'HIDE_INCOMES': {
            return {
                ...state,
                show: false
            }
        }

        default:
            return state
    }
}
