import { COUNTER_CONST } from "../actionsTypes";

const CounterReducer=(state=0, action)=> {
    switch(action.type) {
        case COUNTER_CONST.INCREMENT:
            return state + action.payload;
        case COUNTER_CONST.DECREMENT:
            return state - 1;
        default:
            return state
    }
};
export default CounterReducer;