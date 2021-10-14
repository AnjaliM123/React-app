import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Label, Form, Input } from "reactstrap";
import { required, date, email, select, checkBox } from "../constants";

const renderFieldText = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
  custom,
}) => (
  <div>
    <Label>User Name</Label>
    <div>
      <Input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
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
    <Label>{label}</Label>
    <div>
      <Input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);
const renderFieldEmail = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
  custom,
}) => (
  <div>
    <Label>email</Label>
    <div>
      <Input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

//   const renderFieldHobbies = ({
//     input,
//     label,
//     type,
//     meta: { touched, error, warning },
//     custom,
//   }) => (
//     <div>
//       <Label>Hobbies</Label>
//       <div>
//         <Input {...input} placeholder={label} type={type} />
//         {touched &&
//           ((error && <span>{error}</span>) ||
//             (warning && <span>{warning}</span>))}
//       </div>
//     </div>
//   );

const SimpleForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div className="container">
      <div className="reduxcontainer">
        <h1>Login Form</h1>
        <div className="reduxcardcontainer">
          <Form onSubmit={handleSubmit}>
            <div className="labelcontainer">
              <div>
                <Field
                  name="username"
                  type="text"
                  component={renderFieldText}
                  label={renderFieldText.label}
                  validate={[required]}
                />
              </div>
            </div>
            <div className="labelcontainer">
              <div>
                <Field
                  name="email"
                  type="email"
                  component={renderFieldEmail}
                  label={renderFieldEmail.label}
                  validate={[email]}
                />
              </div>
            </div>
            <div className="labelcontainer">
              {/* <Label>Hobbies</Label> */}
              <Label for="exampleSelect">Hobbies</Label>
              <div>
                <Field name="Hobbies" component="select">
                  <option />
                  <option value="ff0000">Reading Books</option>
                  <option value="00ff00">Playing Cricket</option>
                  <option value="0000ff">Watching Tv</option>
                </Field>
              </div>
            </div>
            <div className="labelcontainer">
              {/* <Label>Date of birth</Label> */}
              <div>
                <Field
                  name="date"
                  component={renderFieldDate}
                  type="Date"
                  label="Date of birth"
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
                  component="input"
                  type="checkbox"
                  validate={[checkBox]}
                />
                <Label htmlFor="remember">Remember me</Label>
              </div>
            </div>
            <div className="labelcontainer">
              <Button type="submit" disabled={pristine || submitting}>
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "simple",
})(SimpleForm);
