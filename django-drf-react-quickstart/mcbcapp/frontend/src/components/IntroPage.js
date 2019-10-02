import React, { Component } from "react";
import PropTypes from "prop-types";

class IntroPage extends Component{ 
    render(){                   
        const backgroundStyle = {
            backgroundColor: "#32669D",
            width: "100vw",
            height: "100vh",
        };
        const divStyle = {
            height: "35%",
            width: "60%",
            position: "absolute",
            top: "25%",
            left: "20%"

        }
        const nameStyle1 = {
            color: "white",
            fontSize: "7.5vw", 
            textAlign: "center"              
        };
        const nameStyle2 = {
            color: "white", 
            fontSize: "3vw",
            textAlign: "center"              
        };
        const imgStyle = {
            display: "block",
            margin: "auto"
        }
        return(
            <body style={backgroundStyle}>
                <div style = {divStyle}>            
                    <img src = {"/static/assets/icons/logo.png"} 
                        alt = "app logo" 
                        width = "25%" 
                        height = "57.14%"
                        style = {imgStyle}
                    />
                    <h1 style = {nameStyle1}>
                        CROSSGEN 
                    </h1>
                    <h2 style = {nameStyle2}>
                        ROSTER
                    </h2>                                      
                </div> 
            </body>
        );            
    }
}

export default IntroPage;