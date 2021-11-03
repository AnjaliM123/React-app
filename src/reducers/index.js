import CounterReducer  from "./Counter";
import LoggedReducer from "./IsLogged";
import UsersReducer from "./UsersReducer"
import PostUserrsReducer from "./PostUsersReducer"
import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'



const allReducers=combineReducers({
    counter:CounterReducer,
    isLogged:LoggedReducer,
    users:UsersReducer,
    postUsers:PostUserrsReducer,
    form:formReducer
})
export default allReducers