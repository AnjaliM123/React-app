import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Label, Form, Input, FormGroup } from "reactstrap";
import { required, date, email, select, checkBox } from "../constants";
import {useDispatch} from "react-redux"
import { getPosts, getUsers } from "../actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const renderTextField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
  custom,
}) => (
  <div>
    <Label>{label}</Label>
    <div>
      <Input {...input} placeholder="Enter User Name" type="text" />
      {touched &&
        ((error && <span className="error">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);



const SimpleForm = (props) => {
  const { handleSubmit, pristine, reset, submitting,error } = props;
  const dispatch=useDispatch();
  const {signUpPage}=useSelector(state=>state)
  const {posts}=useSelector(state=>state.posts)

// useEffect(()=> {

// })
  

  const submit=(formProps)=> {
    console.log(formProps)
    // dispatch(getPosts())
    
  }

  useEffect(()=> {
        console.log("posts", props)
  },[props])

  return (
    <div className="container">
      <div className="reduxform">
      <div className="reduxcontainer">
        <h1>SignUp Page</h1>
        <div className="reduxcardcontainer">
          <form onSubmit={handleSubmit(submit)}>
            <div className="labelcontainer">
              <div>
                <Field
                  name="username"
                  type="text"
                  component={renderTextField}
                  label="User Name"
                  validate={required}
                />
              </div>
            </div>
            <div className="labelcontainer">
              <div>
                <Field
                  name="password"
                  component={renderTextField}
                  label="Password"
                  validate={required}
                />
              </div>
            </div>
            <div className="labelcontainer">
              <Button type="submit" disabled={pristine || submitting} onClick={() => dispatch(getPosts())}> 
                Submit
              </Button>
            </div>
          </form>
        </div>
        
      </div>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "SignUp Page",
})(SimpleForm);
