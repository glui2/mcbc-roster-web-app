import React, { Component } from "react";
import PropTypes from "prop-types";
//import logo from "../assets/icons/logo.png";

console.log(logo);

class IntroPage extends Component{ 
    render(){
        
            const backgroundStyle = {
                backgroundColor: "#32669d", 
                width: "1919.9px", 
                height: "1080px"
            };
            const nameStyle1 = {
                color: "white", 
                fontSize:"50px",  
                position: "center" 
            };
            const nameStyle2 = {
                color: "white", 
                fontSize:"20px",  
                position: "center" 
            };
            return(
            <body style={backgroundStyle}>
                
                <center>
                    <img src={"../assets/icons/logo.png"} alt = "app logo" />
                    <h1 style = {nameStyle1}> <br></br>
                        CROSSGEN 
                    </h1>
                    <h2 style = {nameStyle2}>
                        ROSTER
                    </h2>                                      
                </center>
                </body>
        );     
    }
}

export default IntroPage;