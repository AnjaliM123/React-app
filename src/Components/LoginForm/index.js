import LoginForm from "./login"
import SkoteClass from "../ClassComponent"

const Skote=()=>{
    const onChangeEmail=(event)=> {
        //console.log(event.target.value, "inside onchange handler")
        return (event.target.value)
    }
    const onChangePassword=(event)=> {
        //console.log(event.taget.value)
        return (event.target.value)
    }
    const onSubmitButtom=(event)=> {
        event.preventDefault()
        console.log("Welcome")
    }
    console.log("string")
    return (
        <div>
            <SkoteClass onChange={onChangeEmail}  onChangePassword = {onChangePassword} onSubmitButtom={onSubmitButtom}/>
            <LoginForm onChange={onChangeEmail}  onChangePassword = {onChangePassword} onSubmitButtom={onSubmitButtom}/>
        </div>
    )
}
export default Skote
