export default function reducer(state = [], action) {
    switch (action.type) {
        case 'ADD_VEHICLE_HISTORY': {
            return [
                ...action.payload,
                state
            ]
        }

        default:
            return state;
    }
}