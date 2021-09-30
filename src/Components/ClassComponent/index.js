import React from 'react';
import {  Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Component} from "react"

//import "./index.css"

class Skote extends Component  {
    
    
    render () {
        
        const {onChange,onChangePassword,onSubmitButton}=this.props
        console.log("Class Component", onChange)
        console.log("Class Component", onChangePassword)
  return (
      <div className="main-container">
          <div className="small-container">
           
        <div className="card-container">
            <div>
            <h1>5k+ satisfied clients</h1>
            <p className="satisfied">"fantastic theme with a tone of options. if you just want the html to integrate with your project, then this is the package. you can find the files in the "dist floder... no ned to install git and all the other stuff the documentation talks about"</p>
            <p>Abs 1981</p>
            <p>-skote user</p>
            </div>

        </div>
            <div className="form-container">
                <div>
                
            <Form>
                <h1>Skote</h1>
                <p>welcome back</p>
                <p>sign in to continue to skote</p>
            <FormGroup className="formgroup-container">
                <Label for="exampleEmail" className="label" >Email</Label>
                <Input type="email" name="email" id="exampleEmail"  onChange={this.onChange} placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup className="formgroup-container">
                <Label for="examplePassword" className="label">Password</Label>
                <Input type="password" name="password" id="examplePassword"   onChange={this.onChangePassword} placeholder="password placeholder" />
            </FormGroup>
            <FormGroup check>
                <Label check>
                <Input type="checkbox" />{' '}
                Check me out
                </Label>
            </FormGroup>
            <Button type="button" onClick={this.onSubmitButton}>login</Button>
            <p>sign in with</p>
            <p>dont have an account</p>
            </Form>
            </div>
    
    </div>
    </div>
    </div>
  );
    }
}

export default Skote;