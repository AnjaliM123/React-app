import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { SmsFailedRounded } from "@mui/icons-material";
import axios from "axios";
import { email } from "../constants";

const image =
  "https://res.cloudinary.com/ddcycgbwg/image/upload/v1633696396/images_czf2nm.jpg";

export default function InputAdornments(props) {
  const [values, setValues] = React.useState({
      username:"",
      email:"",
    password: "",
    showError:false
  });

  const onChangeText = (event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
console.log(values)
  const failure=()=> {
      console.log("failure")
      setValues((prevState)=> ({...prevState, showError:true}))
    
  }

  const success=()=> {


    const {history}=props
    history.push("/Home")
    setValues((prevState)=> ({...prevState, showError:false}))
  }




  const onClickSubmit=async()=> {

    
  
    const article = {
      username: `${values.username}`,
      email: `${values.email}`,
      password: `${values.password}`,
    };
    const headers = { "Content-type": "application/json; charset=UTF-8" };
    const response= await axios
      .post("https://jsonplaceholder.typicode.com/posts", article, { headers })
      console.log(response)
    if (response.data.username=="" && response.data.email=="" && response.data.password=="") {
        console.log("click")
        failure()
    }
    else  {
        success()
    }
     
  }

  return (
    <div className="container">
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          height: "100%",
          flexWrap: "wrap",
          fontFamily: "Raleway",
        }}
      >
        <Card
          variant="outlined"
          sx={{
        
            height: "70%",
            borderColor: "Window",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            pr: 3,
            pl: 3,
          }}
        >
          <Box sx={{ fontFamily: "Raleway", mt: 3 }}>
            <h1>Registration Form</h1>
          </Box>
          <Box>
            <FormControl variant="standard">
              <Box
                sx={{ display: "flex", alignItems: "flex-end", mb: 3, mt: 3 }}
              >
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="input-with-sx"
                  label="First Name"
                  name="username"
                  variant="standard" onChange={(e)=>onChangeText(e)}
                />
              </Box>
            </FormControl>
            <Box>
              <FormControl variant="standard">
                <Box sx={{ display: "flex", alignItems: "flex-end", mb: 3 }}>
                  <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                  <TextField
                    id="input-with-sx"
                    label="Email"
                    name="email"
                    variant="standard"
                    onChange={(e)=>onChangeText(e)}
                  />
                </Box>
              </FormControl>
            </Box>
            <Box>
              <FormControl variant="standard">
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <VisibilityIcon
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id="input-with-sx"
                    type={values.showPassword ? "text" : "password"}
                    label="Password"
                    name="password"
                    variant="standard"
                    onChange={(e)=>onChangeText(e)}
                  />
                </Box>
              </FormControl>
            </Box>
          </Box>
          <div className="box-container">
                <Box sx={{mt:3}}>
                  <Button variant="contained" onClick={()=>onClickSubmit()}>submit</Button>
                </Box>
                </div>
                <div>
                  {values.showError?"Please Enter valid values":null}
                </div>
        </Card>
      </Box>
    </Box>
    </div>
  );
}
