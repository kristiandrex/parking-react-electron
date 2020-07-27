const initialState = window.localStorage.getItem('vehicles')
    ? JSON.parse(window.localStorage.getItem('vehicles'))
    : [];

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_VEHICLE': {
            const newState = [
                action.payload,
                ...state
            ];

            window.localStorage.setItem('vehicles', JSON.stringify(newState));
            return newState;
        }

        case 'REMOVE_VEHICLE': {
            const newState = [...state];
            newState.splice(action.payload, 1);

            window.localStorage.setItem('vehicles', JSON.stringify(newState));
            return newState;
        }

        case 'SET_TIME_VEHICLE': {
            const newState = [...state];
            const { index, time } = action.payload;

            const vehicle = { ...newState[index], time };
            newState[index] = vehicle;

            window.localStorage.setItem('vehicles', JSON.stringify(newState));
            return newState;
        }

        default:
            return state
    }
}