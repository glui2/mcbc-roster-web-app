import React from "react";
import { makeStyles, useTheme, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import { loginPageStyles } from "../styles";
import { withStyles } from "@material-ui/styles";

class LoginPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.logindiv}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <img
                style={{ marginTop: "1%" }}
                src="/static/assets/icons/RosterIcon.png"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.logintext}
                id="outlined-required"
                label="username"
                defaultValue=""
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img
                        style={{ marginTop: "1%" }}
                        src="/static/assets/icons/ProfileIcon.png"
                      />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.logintext}
                id="outlined-password-input"
                label="Password"
                type="password"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img
                        style={{ marginTop: "1%" }}
                        src="/static/assets/icons/PasswordIcon.png"
                      />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                className={classes.logintext}
                style={{
                  borderRadius: "100px",
                  margin: "auto",
                  paddingLeft: "15%",
                  paddingRight: "15%"
                }}
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyles)(LoginPage);
