import React from "react";
import { makeStyles, useTheme, Typography } from "@material-ui/core";
import MinistryIcon from "../components/MinistryIcon";
import color from "@material-ui/core/colors/blueGrey";
import { textAlign } from "@material-ui/system";
import { withStyles } from "@material-ui/styles";

const profileStyles = theme => ({
  root: {
    backgroundColor: "navy",
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center",
    display: "flex",
    flexDirection: "column"
  },
  textContainer: {
    margin: "auto",
    marginTop: "3%",
    marginBottom: "3%",
    padding: "5%",
    paddingLeft: "8%",
    paddingRight: "8%"
  }
});

// takes desired day of the week as input (0-6), outputs next date with that day of the week, relative to today
function nextDay(x) {
  var now = new Date();
  now.setDate(now.getDate() + ((x + (7 - now.getDay())) % 7));
  return now;
}

class ProfilePage extends React.Component {
  render() {
    const { classes } = this.props;
    const comingSunday = nextDay(0);
    const month = comingSunday.getMonth;
    const date = comingSunday.getDate;

    return (
      <div className={classes.root}>
        <div className={classes.textContainer}>
          <Typography variant="h5">This upcoming Sunday</Typography>
          <Typography variant="h3">
            {date} {month}
          </Typography>
          <Typography variant="h5">You are rostered on</Typography>
          <MinistryIcon
            imgsrc="/static/assets/icons/WorshipIcon.png"
            label=""
          />
          <Typography>WORSHIP</Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(profileStyles)(ProfilePage);
