import {combineReducers} from "redux";

import counterReducer from "./counterReducer";
import userDetailsReducer from "./userDetailsReducer";

const combinerReducer=combineReducers({
counter:counterReducer,
user :userDetailsReducer
});

export default combinerReducer;