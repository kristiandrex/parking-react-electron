import { combineReducers } from 'redux';
import config from './config';
import count from './count';
import incomes from './incomes';
import vehicles from './vehicles';

export default combineReducers({
    config,
    count,
    incomes,
    vehicles
});