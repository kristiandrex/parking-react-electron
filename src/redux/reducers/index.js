import { combineReducers } from "redux";
import config from "./config";
import count from "./count";
import history from "./history";
import vehicles from "./vehicles";

export default combineReducers({
    config,
    count,
    history,
    vehicles
});