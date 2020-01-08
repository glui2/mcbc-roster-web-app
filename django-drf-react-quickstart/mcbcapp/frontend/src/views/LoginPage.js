import React from "react";
import { makeStyles, useTheme, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from '@material-ui/core/InputAdornment';

const loginStyles = theme => ({
  root: {
    backgroundImage:
      "url(" + "/static/assets/images/backgroundProfilePage.jpg" + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center",
    display: "flex",
    flexDirection: "column"
  },
  loginBox: {
    backgroundColor: "white",
    borderRadius: "10%",
    color: "red"
  },
  loginButton:{
    backgroundColor: "red",
    borderRadius: "40%", 
    color: "white",
    textAlign: "center",
    width: "80%"
  }
});

class LoginPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div>
          <img
            style={{ marginTop: "1%" }}
            src="/static/assets/icons/RosterIcon.png" // LOGO TO ADD
          />
        </div>
        <div>
          <div className={classes.loginBox}>  
            <TextField
            id="outlined-required"
            label="username"
            defaultValue=""
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img style={{ marginTop: "1%" }} src="/static/assets/icons/ProfileIcon.png"/>
                </InputAdornment>
              ),
            }}/>
          </div>
          <div className={classes.loginBox}>
            <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img style={{ marginTop: "1%" }} src="/static/assets/icons/PasswordIcon.png"/>
                </InputAdornment>
              ),
            }}/>        
            
            
          </div>
          <Button style={{
            borderRadius: "100px",
            margin: "auto",
            paddingLeft: "15%",
            paddingRight: "15%"}}  
            variant="contained" 
            color="primary">
            Login
         </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(loginStyles)(LoginPage);
