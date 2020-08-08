import { createStore } from 'redux';
import reducers from './reducers'
import { saveState, loadState } from '../utils/localStorage';

const store = createStore(
    reducers,
    loadState(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    saveState(store.getState());
});

export default store;