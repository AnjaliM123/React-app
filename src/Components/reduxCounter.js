import { useSelector, useDispatch } from "react-redux"
import {increment,decrement,signIn} from "../actions"
import { Button } from "reactstrap"

export default function Counter () {
             
    const {counter,isLogged}= useSelector((state)=>({
        counter : state.counter,
        isLogged : state.isLogged
      }));
            // const values=useSelector(state=>state)
            const dispatch=useDispatch()
            
    return (
        <>
        <h1>Counter {counter}</h1>
        <Button onClick={()=>dispatch(increment(5))}>+</Button>
        <Button onClick={()=>dispatch(decrement(5))}>-</Button>
        <Button onClick={()=> dispatch(signIn())}>{isLogged?"sign out":"sign in"}</Button>
        </>
    )
}