// contains stylings for the respective views, ordered alphabetically
// naming convention: export const <nameOfPageInCamelCase> = { className: {styleElement: value}}
// then import the constant into its respective page

export const homePageStyles = {
  root: {
    backgroundImage:
      "url(" + "/static/assets/images/backgroundHomePage1.jpg" + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
  },
  layer: {
    backgroundColor: "#32669d",
    height: "100%",
    opacity: "70%",
    width: "100%"
  },
  textContainer: {
    margin: "auto",
    marginBottom: "3%",
    marginTop: "3%",
    padding: "5%",
    paddingLeft: "8%",
    paddingRight: "8%"
  },
  subheading: {
    color: "#FFFFFF",
    letterSpacing: "6px"
  },
  heading: {
    color: "#FFFFFF",
    letterSpacing: "10px",
    margin: "2%"
  }
};

export const loginPageStyles = {
  root: {
    backgroundImage: "url(" + "/static/assets/images/backgroundLogin.png" + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
  },
  loginButton: {
    borderRadius: "100px",
    margin: "auto",
    paddingLeft: "15%",
    paddingRight: "15%"
  },
  loginDiv: {
    marginBottom: "13%",
    marginTop: "12%"
  },
  loginInputField: {
    width: "25%"
  }
};

export const profilePageStyles = {
  root: {
    backgroundImage:
      "url(" + "/static/assets/images/backgroundProfilePage.jpg" + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    padding: "1%",
    textAlign: "center"
  },
  usernameBox: {
    borderColor: "#E53232",
    borderStyle: "solid",
    margin: "auto",
    marginBottom: "3%",
    marginTop: "3%",
    padding: "5%",
    paddingLeft: "8%",
    paddingRight: "8%"
  },
  ministries: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  }
};
