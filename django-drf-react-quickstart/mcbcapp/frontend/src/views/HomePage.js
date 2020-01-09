import React from "react";
import { makeStyles, useTheme, Typography } from "@material-ui/core";
import MinistryIcon from "../components/MinistryIcon";
import color from "@material-ui/core/colors/blueGrey";
import { textAlign } from "@material-ui/system";
import { homePageStyles } from "../styling";
import { withStyles } from "@material-ui/styles";

class HomePage extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.nextDay = this.nextDay.bind(this);
  // }
  // nextDay(x) {
  //   var now = new Date();
  //   now.setDate(now.getDate() + ((x + (7 - now.getDay())) % 7));
  //   return now;
  // }

  // takes desired day of the week as input (0-6), outputs next date with that day of the week, relative to today
  render() {
    const { classes } = this.props;
    // var comingSunday = this.nextDay(0);
    // var month = comingSunday.getMonth;
    // var date = comingSunday.getDate;

    return (
      <div className={classes.root}>
        <div className={classes.layer}>
          <div className={classes.textContainer}>
            <Typography
              style={{ color: "#FFFFFF", letterSpacing: "6px" }}
              variant="h5"
            >
              THIS UPCOMING SUNDAY
            </Typography>
            <Typography
              style={{ color: "#FFFFFF", margin: "2%", letterSpacing: "10px" }}
              variant="h3"
            >
              Dec 22
            </Typography>
            <Typography
              style={{ color: "#FFFFFF", letterSpacing: "6px" }}
              variant="h5"
            >
              YOU ARE ROSTERED ON
            </Typography>
            <MinistryIcon
              imgsrc="/static/assets/icons/WorshipIcon_white.png"
              label=""
            />
            <Typography
              style={{ color: "#FFFFFF", letterSpacing: "10px" }}
              variant="h3"
            >
              WORSHIP
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(homePageStyles)(HomePage);
