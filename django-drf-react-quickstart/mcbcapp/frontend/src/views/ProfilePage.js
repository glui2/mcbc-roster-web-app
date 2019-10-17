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

    return (
      <div className={classes.root}>
        {/* <div>
          <img
            style={{ marginTop: "2%" }}
            src="/static/assets/icons/ProfileIcon2x.png"
          />
        </div> */}
        <div className={classes.usernameBox}>
          <Typography style={{ color: "#E53232" }} variant="h2">
            Chris <br /> Yeung
          </Typography>
        </div>
        <Typography style={{ color: "#E53232" }} variant="h6">
          I AM SERVING IN
        </Typography>
        <div className={classes.ministries}>
          <MinistryIcon
            imgsrc="/static/assets/icons/WorshipIcon.png"
            label="Worship"
          />
          <MinistryIcon
            imgsrc="/static/assets/icons/AnnouncementsIcon.png"
            label="Announcements"
          />
          <MinistryIcon
            imgsrc="/static/assets/icons/BibleReadingIcon.png"
            label="Bible Reading"
          />
          <MinistryIcon
            imgsrc="/static/assets/icons/CommunionIcon.png"
            label="Communion"
          />
          <MinistryIcon imgsrc="/static/assets/icons/AVIcon.png" label="AV" />
        </div>
      </div>
    );
  }
}

export default withStyles(profileStyles)(ProfilePage);
