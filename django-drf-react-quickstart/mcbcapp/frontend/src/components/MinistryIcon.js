import React, { Component } from "react";
import PropTypes from "prop-types";
import { Typography, makeStyles } from "@material-ui/core";
import { textAlign } from "@material-ui/system";

const blockStyle = {
  margin: "3%"
};

const iconStyle = {
  width: "120px",
  height: "95px",
  margin: "auto"
};

const fontStyle = {
  color: "#E53232",
  textAlign: "center",
  margin: "5%"
};

class MinistryIcon extends Component {
  render() {
    return (
      <div style={blockStyle}>
        <img style={iconStyle} src={this.props.imgsrc} />
        <Typography variant="subtitle2" style={fontStyle}>
          {this.props.label}
        </Typography>
      </div>
    );
  }
}
export default MinistryIcon;
