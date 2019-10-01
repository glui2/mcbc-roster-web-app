import React, { Component } from "react";
import PropTypes from "prop-types";

class IntroPage extends Component{ 
    render(){                   
        const backgroundStyle = {
            backgroundColor: "#32669D",
            //alignItems: "center",
            margin: "auto",
            width: "100%",
            height: "100%",
            textAlign: "center",
            alignItems: "center" // not working
        };
        const nameStyle1 = {
            color: "white",
            fontSize: "7.5vw",               
        };
        const nameStyle2 = {
            color: "white", 
            fontSize: "3vw",            
        };
        return(
            <div style={backgroundStyle}>
                
                <img src={"/static/assets/icons/logo.png"} 
                    alt = "app logo" 
                    width= "20%" 
                    height= "24%"
                    />
                <h1 style = {nameStyle1}> <br></br>
                    CROSSGEN 
                </h1>
                <h2 style = {nameStyle2}>
                    ROSTER
                </h2>                                      

            </div>
        );  
        
        
    }

}

export default IntroPage;