import * as React from "react";
import Box from "@mui/material/Box";
// import IconButton from "@mui/material/IconButton";
// import Input from "@mui/material/Input";
// import FilledInput from "@mui/material/FilledInput";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import InputAdornment from "@mui/material/InputAdornment";
// import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
// import { flexbox } from "@mui/system";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

const image =
  "https://res.cloudinary.com/ddcycgbwg/image/upload/v1633696396/images_czf2nm.jpg";

export default function InputAdornments() {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  // const handleClickShowPassword = () => {
  //   setValues({
  //     ...values,
  //     showPassword: !values.showPassword,
  //   });
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

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
                  variant="standard"
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
                    variant="standard"
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
                    variant="standard"
                  />
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Button variant="contained">submit</Button>
                </Box>
              </FormControl>
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
    </div>
  );
}
