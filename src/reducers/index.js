import CounterReducer  from "./Counter";
import LoggedReducer from "./IsLogged";
import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'


const allReducers=combineReducers({
    counter:CounterReducer,
    isLogged:LoggedReducer,
    form:formReducer
})
export default allReducers