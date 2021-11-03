import { USERS_CONST } from "../actionsTypes"
import { COUNTER_CONST } from "../actionsTypes"

import { ADD_USERS_CONST } from "../actionsTypes"

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

export const usersList=(value)=> ({
    type: USERS_CONST.GET_USERS_REQUEST,
    payload:value
  
})



export const postUsers=(action)=> ({
    type:ADD_USERS_CONST.ADD_USERS_REQUEST,
    payload:action
})