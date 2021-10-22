import CounterReducer  from "./Counter";
import LoggedReducer from "./IsLogged";

import GetUsersReducer from "./GetUsers"
import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'

import GetPostReducer from "./GetPosts"
// import GetPostDetails from "../components/GetPostDetails";

const allReducers=combineReducers({
    counter:CounterReducer,
    isLogged:LoggedReducer,
    users:GetUsersReducer,
    posts:GetPostReducer,
    form:formReducer
})
export default allReducers