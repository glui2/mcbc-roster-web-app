import React from "react";
import { makeStyles, useTheme, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
            src="/static/assets/icons/ProfileIcon2x.png" // LOGO TO ADD
          />
        </div>
        <div>
          <div className={classes.loginBox}>  
            {/* <input type = "text" placeholder = "Username" name = "uname" required></input> */}
          </div>
          <div className={classes.loginBox}>
          <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          variant="outlined"/>
          </div>
          <Button style={{borderRadius: "100%"}} variant="contained" color="primary">
            Login
         </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(loginStyles)(LoginPage);
