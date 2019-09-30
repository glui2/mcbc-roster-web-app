import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

const mcbcTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#E53232"
    },
    secondary: {
      main: "#32669D"
    }
  },
  typography: {
    fontFamily: "Archivo Narrow, Roboto, sans-serif"
  }
});

const wrapper = document.getElementById("app");
wrapper
  ? ReactDOM.render(
      <MuiThemeProvider theme={mcbcTheme}>
        <App />
      </MuiThemeProvider>,
      wrapper
    )
  : null;
