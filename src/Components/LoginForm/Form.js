import {  Button, Form, FormGroup, Label, Input } from 'reactstrap';
import React, {useState} from "react"

function FormName () {
    const [form, setForm]=useState( {
        email:"",
        name:"",
        password:"",

    })

    const onChangeValue=(event)=> {
        setForm((values)=>({...values, [event.target.name]:event.target.value}))
    }

    console.log(form)

    const onSubmitForm=(event)=> {
        event.preventDefault()
    }
console.log(form)

return (
    <div className="container">
        <div className="login-container">
            <h className="signheading">free register</h>
            <p className="signheading">get your your free skote account now</p>
            <div className="skoteimagecontainer">
            <img src="https://res.cloudinary.com/ddcycgbwg/image/upload/v1632994570/download_qbhmqx.png" alt="skote" className="skoteimage"/>
            </div>
        </div>
        
    <Form onSubmit={onSubmitForm}>
            <FormGroup className="formgroup-container">
                <Label className="label label3">email</Label>
                <Input type="text"  placeholder="Enter name" className="inputtext" name= "email" onChange={onChangeValue} />
            </FormGroup>
            <FormGroup className="formgroup-container">
                <Label className="label">name</Label>
                <Input type="text" placeholder="Enter username" className="inputtext" name="name" onChange={onChangeValue}/>
            </FormGroup>
            <FormGroup className="formgroup-container">
                <Label className="label">password</Label>
                <Input type="password" placeholder="Enter password" className="inputtext" name="password" onChange={onChangeValue} />
            </FormGroup>
            
            <Button type="submit" className="loginbutton">Register</Button>
        </Form>
        <p className="signterms">by regitering you agree to the skote <span className="stylesign">terms of use</span></p>
        </div>
)

}
export default FormName