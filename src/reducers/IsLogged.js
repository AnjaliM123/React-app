import { COUNTER_CONST } from "../actionsTypes/index"

const LoggedReducer=(state=false, action)=> {
    switch(action.type) {
        case COUNTER_CONST.SIGN_IN:
            return !state
        default:
            return state
    }
}
export default LoggedReducer