/*
    Store : An object that holds the application's data
    Action : An object that tells the reducer how to change its data
    Reducer : A function that returns some data
    State : Data for our application to use
*/

import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
    auth: AuthReducer,
    employee: EmployeeReducer
});

