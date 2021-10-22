import {  POSTS_CONST } from "../actionsTypes"

const GetPostReducer = (state={}, action) => {
    
    switch (action.type) {
       case POSTS_CONST.GET_POSTS_REQUEST:
          return {
          isLoading:true,
          allPosts:action.payload
          }
    case POSTS_CONST.GET_POSTS_SUCCESS:
        return {
    
            ...state,
            allPosts:action.payload &&action.payload.data,
            isLoading:false
        }
    case POSTS_CONST.GET_POSTS_FAILURE:
        return {
            
            ...state,
          allPosts:action.payload,
          isLoading:false
        }
      default:
         return state
      }
 }
export default GetPostReducer