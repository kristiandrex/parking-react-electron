import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers"
import { saveState, loadState } from "../utils/localStorage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, loadState(), composeEnhancers(
    applyMiddleware(thunk)
));

store.subscribe(() => {
    saveState(store.getState());
});

export default store;