import React from "react";
import { makeStyles, useTheme, Typography } from "@material-ui/core";
import MinistryIcon from "../components/MinistryIcon";
import color from "@material-ui/core/colors/blueGrey";
import { textAlign } from "@material-ui/system";
import { withStyles } from "@material-ui/styles";

const homeStyles = theme => ({
  root: {
    backgroundColor: "#32669D",
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

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.nextDay = this.nextDay.bind(this);
  }
  nextDay(x) {
    var now = new Date();
    now.setDate(now.getDate() + ((x + (7 - now.getDay())) % 7));
    return now;
  }

  // takes desired day of the week as input (0-6), outputs next date with that day of the week, relative to today
  render() {
    const { classes } = this.props;
    var comingSunday = this.nextDay(0);
    var month = comingSunday.getMonth;
    var date = comingSunday.getDate;

    return (
      <div className={classes.root}>
        <div className={classes.textContainer}>
          <Typography style={{ color: "#FFFFFF" }} variant="h5">
            This upcoming Sunday
          </Typography>
          <Typography style={{ color: "#FFFFFF" }} variant="h3">
            {date} {month}
          </Typography>
          <Typography style={{ color: "#FFFFFF" }} variant="h5">
            You are rostered on
          </Typography>
          <MinistryIcon
            imgsrc="/static/assets/icons/WorshipIcon.png"
            label=""
          />
          <Typography style={{ color: "#FFFFFF" }} variant="h5">
            WORSHIP
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(homeStyles)(HomePage);
