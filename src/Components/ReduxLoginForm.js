import React, { Fragment } from "react";
import { Field, reduxForm} from "redux-form";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { ReportGmailerrorred, SmsFailedRounded } from "@mui/icons-material";

import { required } from "../constants/index";
import ModalExample from "./crudOperation/AddPost";
import axios from "axios";


const renderTextField = ({
  input,
  label,
  variant,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    hintText={label}
    label={label}
    errorText={touched && error}
    placeholder={label}
    variant={variant}
    {...input}
    {...custom}
  />
);


const success=()=> {
    console.log("success")

}


const submit=async(props)=> {
    
    console.log(props)
    const article = {
        username: "anjali",
        passwoprd: "1234567",
        email:"anjali.m@innomick.com",
      };
      const headers = { "Content-type": "application/json; charset=UTF-8" };
      const response=await axios
        .post("https://jsonplaceholder.typicode.com/posts", article, { headers })
        console.log(response)
       if (response.status===201) {
           success()
       }
        
    
}

const MaterialUiForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="container">
        <div className="redux-container">
          <div className="redux-form">
            <Card variant="outlined" className="card-container">
              <Box>
                <h1>Registration Form</h1>
              </Box>
              <Box>
                <FormControl variant="standard">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      mb: 3,
                      mt: 3,
                      ml: 3,
                    }}
                  >
                    <AccountCircle
                      sx={{ color: "action.active", mr: 1, my: 0.5 }}
                    />
                    <Field
                      name="User Name"
                      component={renderTextField}
                      variant="standard"
                      label="User Name"
                      placeholder="User Name"
                      validate={required}
                    />
                  </Box>
                </FormControl>
                <Box>
                  <FormControl variant="standard">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-end",
                        mb: 3,
                        ml: 3,
                      }}
                    >
                      <EmailIcon
                        sx={{ color: "action.active", mr: 1, my: 0.5 }}
                      />
                      <Field
                        id="input-with-sx"
                        label="email"
                        name="email"
                        variant="standard"
                        component={renderTextField}
                      />
                    </Box>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl variant="standard">
                    <Box
                      sx={{ display: "flex", alignItems: "flex-end", ml: 3 }}
                    >
                      <VisibilityIcon
                        sx={{ color: "action.active", mr: 1, my: 0.5 }}
                      />
                      <Field
                        id="input-with-sx"
                        label="Password"
                        name="password"
                        variant="standard"
                        component={renderTextField}
                      />
                    </Box>
                  </FormControl>
                </Box>
              </Box>
              <div className="box-container">
                <Box className="mt-3">
                  <Button variant="contained" type="submit">submit</Button>
                </Box>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "MaterialUiForm",
})(MaterialUiForm);
