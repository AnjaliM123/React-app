import { ADD_USERS_CONST } from "../actionsTypes"

const PostUsersReducer =(state = {},action) => {
    console.log(action)
    switch (action.type) {
        
         case ADD_USERS_CONST.ADD_USERS_REQUEST:
              return {
               isLoading:true,
                   ...state,
                   postUsers:action.payload,
              }
      case ADD_USERS_CONST.ADD_USERS_SUCCESS:
        return {
          isLoading:false,
             ...state,
             postUsers:action.payload.postUsers,
        }
      default:
        return state
    }
  }
  export default PostUsersReducer