export function loadState() {
    try {
        const state = localStorage.getItem('state');
        
        return state === null
            ? undefined
            : JSON.parse(state);
    }

    catch (error) {
        return undefined;
    }
}

export function saveState(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }

    catch (error) {
        // errors
    }
}