import { USERS_CONST } from "../actionsTypes";


const UsersReducer = (state = {}, action) => {
     switch (action.type) {
          // case "GET_USERS_REQUEST":
          case USERS_CONST.GET_USERS_REQUEST:
               return {
                    isLoading: true,
                    ...state,
                    users: action.payload,
               }
          case USERS_CONST.GET_ALL_USERS:
               return {
                    isLoading: false,
                    ...state,
                    users: action.payload.users,
               }
          default:
               return state
     }
}
export default UsersReducer