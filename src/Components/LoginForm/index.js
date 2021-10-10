import LoginForm from "./login"
// import SkoteClass from "../ClassComponent"
import React , {useState} from "react"


const Skote=()=>{
    // const onChangeEmail=(event)=> {
    //     //console.log(event.target.value, "inside onchange handler")
    //     return (event.target.value)
    // }
    // const onChangePassword=(event)=> {
    //     //console.log(event.taget.value)
    //     return (event.target.value)
    // }
    // const onSubmitButtom=(event)=> {
    //     event.preventDefault()
    //     console.log("Welcome")
    // }

    const [form, setForm]=useState({
        
    })
    const onChangeValue=(event)=> {
        console.log(event)
        setForm((values)=>({...values, [event.target.name]:event.target.value}))
    }
    
    console.log(form)
    //console.log(onChangeValue)
    //console.log("string")
    //console.log("onChangeValue", onChangeValue)
    return (
        <div>
            
            {/* <SkoteClass onChangeValue={onChangeValue}/> */}
            <LoginForm onChangeValue={onChangeValue} />
        </div>
    )
}
export default Skote
