import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Label, Input } from "reactstrap";
import { required } from "../constants";
import {useDispatch} from "react-redux"
import { getPosts } from "../actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {useHistory} from "react-router-dom"


import {Link} from "react-router-dom"
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
  const { handleSubmit, pristine,  submitting } = props;
  const history=useHistory()
  const dispatch=useDispatch();
  // const {signUpPage}=useSelector(state=>state)
  const posts=useSelector(state=>state.posts.allPosts)
 
// useEffect(()=> {

// })
  

  const submit=(formProps)=> {
    console.log(formProps)
    // dispatch(getPosts())
  }

  useEffect(()=> {
    // dispatch(getPosts())
        console.log("posts", posts)
  
       if (posts&&posts.length) {

        history.push("/Posts")
       }
  },[history,posts])

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
            <div>
              <Link to="/ReduxForm">For Registration Click here</Link>
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
