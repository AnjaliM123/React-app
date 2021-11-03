import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Label, Button, Form } from 'reactstrap';


//simpleForm

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Label>First Name</Label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <Label>Last Name</Label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <Label>Email</Label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <Label>Sex</Label>
        <div>
          <Label>
            <Field name="sex" component="input" type="radio" value="male" />
            {' '}
            Male
          </Label>
          <Label>
            <Field name="sex" component="input" type="radio" value="female" />
            {' '}
            Female
          </Label>
        </div>
      </div>
      <div>
        <Label>Favorite Color</Label>
        <div>
          <Field name="favoriteColor" component="select">
            <option />
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>
      <div>
        <Label htmlFor="employed">Employed</Label>
        <div>
          <Field
            name="employed"
            id="employed"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <Label>Notes</Label>
        <div>
          <Field name="notes" component="textarea" />
        </div>
      </div>
      <div>
        <Button type="submit" disabled={pristine || submitting}>Submit</Button>
        <Button type="Button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </div>
    </Form>
  );
};

export default reduxForm({
  form: 'simple',
})(SimpleForm);
