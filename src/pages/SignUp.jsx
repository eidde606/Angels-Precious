import React, { useState } from "react";
import { TextField, Typography, Button } from "@mui/material";
import "./SignUp.css";

const SignUp = () => {
  const defaultValues = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    password: "",
    phoneNum: "",
  };

  const [formData, setFormData] = useState(defaultValues);

  const buttonStyle = {
    marginBottom: "1.5rem",
  };
  const onSubmit = () => console.log(formData);

  return (
    <div>
      <h1>Sign Up</h1>
      <div></div>
      <form className="formContainer">
        <TextField
          style={buttonStyle}
          label="First Name"
          onChange={(evt) =>
            setFormData(formData, (formData.firstName = evt.target.value))
          }
        />
        <TextField
          style={buttonStyle}
          label="Last Name"
          onChange={(evt) =>
            setFormData(formData, (formData.lastName = evt.target.value))
          }
        />
        <TextField
          style={buttonStyle}
          label="Date Of Birth"
          onChange={(evt) =>
            setFormData(formData, (formData.dateOfBirth = evt.target.value))
          }
        />
        <TextField
          style={buttonStyle}
          label="E-mail"
          onChange={(evt) =>
            setFormData(formData, (formData.email = evt.target.value))
          }
        />
        <TextField
          style={buttonStyle}
          label="Password"
          onChange={(evt) =>
            setFormData(formData, (formData.password = evt.target.value))
          }
        />
        <TextField
          style={buttonStyle}
          label="Phone Number"
          onChange={(evt) =>
            setFormData(formData, (formData.phoneNum = evt.target.value))
          }
        />
        <Button variant="contained" onClick={onSubmit}>
          Sign Up{" "}
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
