import { USERS_CONST } from "../actionsTypes";


const UsersReducer =(state = {},action) => {
     switch (action.type) {
          // case "GET_USERS_REQUEST":
          case USERS_CONST.GET_USERS_REQUEST:
               return {
                    ...state,
                    users:action.payload,
               }
       case "RECEIVE_API_DATA":
         return {
              ...state,
              users:action.payload.users,
         }
       default:
         return state
     }
   }
   export default UsersReducer