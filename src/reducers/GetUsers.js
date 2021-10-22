import {  USERS_CONST } from "../actionsTypes/index"

const GetUsersReducer = (state={}, action) => {
    console.log(action)
    switch (action.type) {
       case USERS_CONST.GET_USERS_REQUEST:
          return {
          isLoading:true,
          users:action.payload
          }
    case USERS_CONST.GET_USERS_SUCCESS:
        return {
    
            ...state,
            users:action.payload && action.payload,
            isLoading:false
        }
    case USERS_CONST.GET_USERS_FAILURE:
        return {
            
            ...state,
          users:action.payload,
          isLoading:false
        }
      default:
         return state
      }
 }
export default GetUsersReducer