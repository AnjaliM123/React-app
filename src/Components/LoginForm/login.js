
import React from 'react';
import {  Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { AiFillTwitterCircle,AiFillGoogleCircle } from "react-icons/ai";
import {FaFacebook} from 'react-icons/fa';


const LoginForm=(props)=>  {
    // const {onChange, onChangePassword, onSubmitButtom}=props
    const {onChangeValue}=props
    
    
    
    const onSubmitButtom=(event)=> {
        event.preventDefault()
    }

  return (
      //<Form onSubmit={(e)=>onSubmitButtom(e)}>
     
          <div className="main-container">
                <div class="card-container">
                  <div className="small-container">
                        <h1 className="clients-heading">5k+ satisfied clients</h1>
                        <p className="satisfied">"fantastic theme with a tone of options. if you just want the html to integrate with your project, then this is the package. you can find the files in the "dist floder... no ned to install git and all the other stuff the documentation talks about"</p>
                        <p>Abs 1981</p>
                        <p>-skote user</p>
                    </div>
                    </div>
                    <div>
                        <div className="skote-container">
                            <div className="skotelogo-container">
                            <img src="https://res.cloudinary.com/ddcycgbwg/image/upload/v1632994570/download_qbhmqx.png" alt="skote" className="image"/>
                            <h1 className="skote-heading"> Skote</h1>
                            </div>
                            <p className="skote-heading3 style-skote" >welcome back</p>
                            <p className="skote-heading3" >sign in to continue to skote</p>
                        </div>
                        <Form className="skote-container">
                        <FormGroup className="formgroup-container">
                            <Label for="exampleEmail" className="label" >Email</Label>
                            <Input type="email" name="email" id="exampleEmail" className="input-container" onChange={(e)=>{onChangeValue(e)}}   placeholder="with a placeholder" />
                        </FormGroup>
                        <FormGroup className="formgroup-container">
                            <Label for="examplePassword" className="label">Password</Label>
                            <Input type="password" name="password" id="examplePassword"  className="input-container" required  onChange={(e)=>{onChangeValue(e)}}  placeholder="password placeholder" />
                        </FormGroup>
                        <FormGroup check className="checkbox-container">
                            <Label check>
                                <Input className="remeber" type="checkbox" />{' '}
                                Remember me
                            </Label>
                        </FormGroup>
                        <Button type="submit" className="button" onClick={(e)=>onSubmitButtom(e)}>login</Button>
                        <p>sign in with</p>
                        <FaFacebook/>
                        <AiFillTwitterCircle/>
                        <AiFillGoogleCircle/>
                        <p>dont have an account? <span className="stylesign">sign up</span></p>
                    </Form>
                </div>      
            </div>
            
  );
    
}

export default LoginForm;