import { COUNTER_CONST } from "../actionsTypes/Counter"

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