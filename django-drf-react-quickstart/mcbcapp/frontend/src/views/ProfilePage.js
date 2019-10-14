import React from "react";
import { makeStyles, useTheme, Typography } from "@material-ui/core";
import MinistryIcon from "../components/MinistryIcon";
import color from "@material-ui/core/colors/blueGrey";
import { textAlign } from "@material-ui/system";

const profileStyles = makeStyles(theme => ({
  backgroundStyling: {
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
}));

export default function ProfilePage() {
  const profileClasses = profileStyles();

  return (
    <div className={profileClasses.backgroundStyling}>
      {/* <div>
        <img
          style={{ marginTop: "2%" }}
          src="/static/assets/icons/ProfileIcon2x.png"
        />
      </div> */}
      <div className={profileClasses.usernameBox}>
        <Typography style={{ color: "#E53232" }} variant="h2">
          Chris <br /> Yeung
        </Typography>
      </div>
      <Typography style={{ color: "#E53232" }} variant="h6">
        I AM SERVING IN
      </Typography>
      <div className={profileClasses.ministries}>
        <MinistryIcon
          imgsrc="/static/assets/icons/WorshipIcon.png"
          label="WORSHIP"
        />
        <MinistryIcon imgsrc="/static/assets/icons/AVIcon.png" label="AV" />
      </div>
    </div>
  );
}
