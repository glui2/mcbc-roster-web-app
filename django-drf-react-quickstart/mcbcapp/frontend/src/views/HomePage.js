import React from "react";
import { makeStyles, useTheme, Typography } from "@material-ui/core";
import MinistryIcon from "../components/MinistryIcon";
import color from "@material-ui/core/colors/blueGrey";
import { textAlign } from "@material-ui/system";
import { withStyles } from "@material-ui/styles";

const profileStyles = theme => ({
  root: {
    backgroundImage:
      "url(" + "/static/assets/images/backgroundProfilePage.jpg" + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center",
    display: "flex",
    flexDirection: "column"
  },
  usernameBox: {
    borderStyle: "solid",
    borderColor: "#E53232",
    margin: "auto",
    marginTop: "3%",
    marginBottom: "3%",
    padding: "5%",
    paddingLeft: "8%",
    paddingRight: "8%"
  },
  ministries: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  }
});

class ProfilePage extends React.Component {
  render() {
    const { classes } = this.props;

    return <div className={classes.root}></div>;
  }
}

export default withStyles(profileStyles)(ProfilePage);
