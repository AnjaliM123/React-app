import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Label, Form, Input, FormGroup } from "reactstrap";
import { required, date, email, select, checkBox } from "../constants";
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
const renderSelectField = ({
  input,
  label,
  type,
  options,
  meta: { touched, error, warning },
  custom,
}) => (
  <div>
    <Label>{label}</Label>
    <div>
      <Input {...input}  type="select">
        {options}
      </Input>
      {touched &&
        ((error && <span className="error">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const renderFieldDate = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
  custom,
}) => (
  <div>
    <Label>Date Of Birth</Label>
    <div>
      <Input {...input} placeholder={label} type="Date" />
      {touched &&
        ((error && <span className="error">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const renderFieldCheckBox = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
  custom,
}) => (
  <div className="checkbox-container">
    <div className="checkbox">
      <Input {...input} placeholder={label} type="checkbox" />
      <div>
        <Label>Remember me</Label>
      </div>
    </div>
    <div className="error-container">
      {touched &&
        ((error && <span className="error">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);
const submit=(formProps)=> {
  console.log(formProps)
}

const SimpleForm = (props) => {
  const { handleSubmit, pristine, reset, submitting,error } = props;
  return (
    <div className="container">
      <div className="reduxform">
      <div className="reduxcontainer">
        <h1>Login Form</h1>
        <div className="reduxcardcontainer">
          <form onSubmit={handleSubmit(submit)}>
            <div className="labelcontainer">
              <div>
                <Field
                  name="username"
                  type="text"
                  component={renderTextField}
                  // label={renderFieldText.label}
                  label="User Name"
                  validate={required}
                />
              </div>
            </div>
            <div className="labelcontainer">
              <div>
                <Field
                  name="email"
                  component={renderTextField}
                  label="Email"
                  // label={renderFieldEmail.label}
                  validate={[email]}
                />
              </div>
            </div>
            {/* <FormGroup>
              <Label for="exampleSelect">Hobbies</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Reading Books</option>
                <option>Playing Crcicket</option>
                <option>Watching Tv</option>
              </Input>
            </FormGroup> */}
             <div className="labelcontainer">
               {/* <Label>Hobbies</Label>  */}
             {/* <Label for="exampleSelect">Hobbies</Label> */}
              <div>
              <Field
                  name="Hobbies"
                  component={renderSelectField}
                  label="Hobbies"
                  // label={renderFieldEmail.label}
                  validate={required}
                  options= {
                  <Fragment>
                    <option value="0">Hobbies</option>
                  <option value="ff0000">Reading Books</option>
                  <option value="00ff00">Playing Cricket</option>
                  <option value="0000ff">Watching Tv</option>
                  </Fragment>}
                />
                {/* <Field name="Hobbies" component="select">
                  <option />
                  <option value="ff0000">Reading Books</option>
                  <option value="00ff00">Playing Cricket</option>
                  <option value="0000ff">Watching Tv</option>
                </Field> */}
              </div>
            </div> 
            <div className="labelcontainer">
              {/* <Label>Date of birth</Label> */}
              <div>
                <Field
                  name="date"
                  component={renderFieldDate}
                  type="Date"
                  label={renderFieldDate.label}
                  placeholder="Date of birth"
                  validate={[date]}
                />
              </div>
            </div>
            <div className="labelcontainer">
              <Label>Gender</Label>
              <div>
                <Label>
                  <Field
                    name="sex"
                    component="input"
                    type="radio"
                    value="male"
                    default
                  />{" "}
                  Male
                </Label>
                <Label>
                  <Field
                    name="sex"
                    component="input"
                    type="radio"
                    value="female"
                  />{" "}
                  Female
                </Label>
              </div>
            </div>
            <div className="labelcontainer">
              <div>
                <Field
                  name="remember"
                  id="remember"
                  component={renderFieldCheckBox}
                  type="checkbox"
                  validate={[checkBox]}
                />
                {/* <Label htmlFor="remember">Remember me</Label> */}
              </div>
            </div>
            <div className="labelcontainer">
              <Button type="submit" disabled={pristine || submitting}>
                Submit
              </Button>
            </div>
            <div>
              <Link to="/SignUpPage">for registration click here</Link>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "simple",
})(SimpleForm);
