import { COUNTER_CONST, DELETE_POST,  } from "../actionsTypes/index"
import { USERS_CONST } from "../actionsTypes/index"
import {POSTS_CONST} from "../actionsTypes/index"


import axios from "axios"

export const increment=(number)=> {
    return {
        type:COUNTER_CONST.INCREMENT,
        payload:number,
       
    }
}

export const decrement=(number)=> {
    return {
        type:COUNTER_CONST.DECREMENT,
        payload:number
    }
}

export const signIn=()=> {
    return {
        type:COUNTER_CONST.SIGN_IN
    }
}



export function checkHttpStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }

  export const getUsers = () => async (dispatch) => {
    try {
      await dispatch({
        type: USERS_CONST.GET_USERS_REQUEST,
      });
      const response = await axios.get("https://randomuser.me/api/?results=5");
      const parsingJson = await checkHttpStatus(response);
      console.log(response)
         if (parsingJson.status === 200) {
        dispatch({
          type: USERS_CONST.GET_USERS_SUCCESS,
          payload: {
            statusCode: 200,
            data: response.data,
          },
        });
      } else {
        console.log("error");
        dispatch({
          type: USERS_CONST.GET_USERS_FAILURE,
          payload: {
            response: {
              statusCode: 200,
              data: response,
            },
          },
        });
      }
    } catch (error) {
      await dispatch({
        type: USERS_CONST.GET_USERS_FAILURE,
        error: {
          statusText: error,
          netWorkError: true,
        },
      });
    }
  };


  export const getPosts = () => async (dispatch) => {
    try {
      await dispatch({
        type: POSTS_CONST.GET_POSTS_REQUEST,
      });
      const postsResponse = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const parsingJson = await checkHttpStatus(postsResponse);
    
      console.log("response", postsResponse)
         if (parsingJson.status === 200) {
        dispatch({
          type: POSTS_CONST.GET_POSTS_SUCCESS,
          payload: {
            statusCode: 200,
            data: postsResponse.data,
          },
        });
      } else {
        console.log("error");
        dispatch({
          type: POSTS_CONST.GET_POSTS_FAILURE,
          payload: {
            response: {
              statusCode: 200,
              data: postsResponse,
            },
          },
        });
      }
    } catch (error) {
      await dispatch({
        type: POSTS_CONST.GET_POSTS_FAILURE,
        error: {
          statusText: error,
          netWorkError: true,
        },
      });
    }
  };


  export const deletePosts=(id)=> async(dispatch)=> {
    try {
      await dispatch({
        type: DELETE_POST.DELETE_POST_REQUEST,
      });
      const deleteResponse = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const parsingJson = await checkHttpStatus(deleteResponse);
      if (parsingJson.status === 200) {
        dispatch({
          type: DELETE_POST.DELETE_POST_SUCCESS,
          payload: {
            statusCode: 200,
            data: deleteResponse.data,
          },
        });
      } else {
        console.log("error");
        dispatch({
          type: DELETE_POST.DELETE_POST_FAILURE,
          payload: {
            response: {
              statusCode: 200,
              data: deleteResponse,
            },
          },
        });
      }


    }
    catch (error) {
      await dispatch({
        type: DELETE_POST.DELETE_POST_FAILURE,
        error: {
          statusText: error,
          netWorkError: true,
        }
      })
    }

    
      

  }