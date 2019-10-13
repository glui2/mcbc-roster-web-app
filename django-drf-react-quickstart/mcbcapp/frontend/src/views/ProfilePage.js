import React from "react";
import { makeStyles, useTheme, Typography } from "@material-ui/core";
import color from "@material-ui/core/colors/blueGrey";

const profileStyles = makeStyles(theme => ({
  backgroundStyling: {
    backgroundImage: "/static/assets/images/background_profile_page.jpg",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    height: "-webkit-fill-available"
  },
  usernameBox: {
    borderStyle: "solid",
    borderColor: "#E53232",
    margin: "auto",
    marginTop: "5%",
    marginBottom: "5%",
    padding: "5%",
    paddingLeft: "8%",
    paddingRight: "8%"
  },
  ministryIcon: {
    width: "10%",
    margin: "3%"
  }
}));

export default function ProfilePage() {
  const profileClasses = profileStyles();
  const theme = useTheme();

  return (
    <div className={profileClasses.backgroundStyling}>
      <div>
        <img
          style={{ width: "5%" }}
          src="/static/assets/icons/ProfileIcon2x.png"
        />
      </div>
      <div className={profileClasses.usernameBox}>
        <Typography style={{ color: "#E53232" }} variant="h2">
          Chris <br /> Yeung
        </Typography>
      </div>
      <Typography style={{ color: "#E53232" }} variant="h6">
        I AM SERVING IN
      </Typography>
      <div>
        <img
          src="/static/assets/icons/WorshipIcon.png"
          className={profileClasses.ministryIcon}
        />
        <img
          src="/static/assets/icons/AVIcon.png"
          className={profileClasses.ministryIcon}
        />
      </div>
    </div>
  );
}
