import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";
import WebFont from "webfontloader";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

WebFont.load({
  google: {
    families: ["Archivo Narrow", "sans-serif"]
  }
});

const mcbcTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#E53232"
    },
    secondary: {
      main: "#32669D"
    }
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
