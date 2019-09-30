import React, { Component } from "react";
import PropTypes from "prop-types";
//import logo from "../assets/icons/logo.png";

//console.log(logo);

class IntroPage extends Component{ 
    render(){
               
            const backgroundStyle = {
                backgroundColor: "#32669d", 
                width: "1919.9px", 
                height: "1080px"
            };
            const nameStyle1 = {
                color: "white",
                width: "390px",
                height: "100.8",
                fontSize:"50px",  
                position: "center" 
                
            };
            const nameStyle2 = {
                color: "white", 
                width:"281px",
                height:"62.9px",
                fontSize:"20px",  
                position: "center"
            };

            return(
    
            <body style={backgroundStyle}>
                
                <center>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br>

                    <img src={"/static/assets/icons/logo.png"} alt = "app logo" width="182" height="220" />
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