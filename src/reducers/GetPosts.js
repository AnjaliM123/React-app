import {  POSTS_CONST } from "../actionsTypes/index"

const GetPostReducer = (state={}, action) => {
    console.log("act", action)
    switch (action.type) {
       case POSTS_CONST.GET_POSTS_REQUEST:
          return {
          isLoading:true,
          posts:action.payload
          }
    case POSTS_CONST.GET_POSTS_SUCCESS:
        return {
    
            ...state,
            posts:action.payload && action.payload,
            isLoading:false
        }
    case POSTS_CONST.GET_POSTS_FAILURE:
        return {
            
            ...state,
          posts:action.payload,
          isLoading:false
        }
      default:
         return state
      }
 }
export default GetPostReducer