import React, { useState } from 'react'
import { withStyles } from "@material-ui/core/styles"
import SignupScreen from "./SignupScreen"

const styles={
loginScreen:{
    position:"relative",
    height:"100%",
    background:`url("http://mppmduse2pmpovwapp.azurewebsites.net/wp-content/uploads/2019/09/netflix-background-9.jpg") center no-repeat`,
    backgroundSize:"cover",
"& .loginScreen_logo":{
    position:"fixed",
    left:0,
    width:"150px",
    objectFit:"contain",
    paddingLeft:"20px"
},
"& .loginScreen_button":{
    position:"fixed",
    top:"20px",
    right:"20px",
    padding:"10px 20px",
    fontSize:"1rem",
    color:"#fff",
    backgroundColor:"#e50914",
    fontWeight:600,
    border:"none",
    cursor:"pointer"
},
"& .loginScreen_gradient":{
    width:"100%",
    zIndex:1,
    height:"100vh",
    background:"rgba(0,0,0,0.4)",
    backgroundImage:"linear-gradient(to bottom, rgba(0,0,0,0.8) 0, rgba(0,0,0,0) 60%, rgba(0,0,0,0) 100%)"
},
"& .loginScreen_body":{
    position:"absolute",
    top:"30%",
    // width:"90%",
    marginLeft:"auto",
    marginRight:"auto",
    textAlign:"center",
    zIndex:1,
    color:"#fff",
    padding: "20px",
    left: 0,
    right:0,
    "& h1":{
        fontSize:"3.125rem",
        marginBottom:"20px"
    },
    "& h2":{
        fontSize:"2rem",
        fontWeight:400,
        marginBottom:"30px"
    },
    "& h3":{
        fontSize:"1.3rem",
        fontWeight:400
    },
    "& .loginScreen_input": {
        margin:"20px",
        "& input": {
            padding: "10px",
            outlineWidth: 0,
            height: "30px",
            width: "30%",
            border: "none",
            maxWidth:"600px"
        },
        "& button": {
            padding: "16px 20px",
            fontSize: "1rem",
            color: "#fff",
            backgroundColor: "#e50914",
            border: "none",
            cursor: "pointer",
            fontWeight:600
        }
    }
}
}
}
function LoginScreen(props) {
    const { classes } = props
    const [signIn, setSignIn] = useState(false)
    return (
        <div className={classes.loginScreen}>
            <div className="loginScreen_background">
                <img className="loginScreen_logo"
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                alt=""/>
                <button className="loginScreen_button" onClick={(e) => {
                    e.preventDefault()
                    setSignIn(true)
                }}>
                    Sign In
                </button>
                <div className="loginScreen_gradient"/>
                </div>
            <div className="loginScreen_body">
                {signIn ? (
                    <SignupScreen/>
                ) : (
                        
                    <>
                    <h1>Unlimited films, TV programmes and more.</h1>
                    <h2>Watch anywhere. Cancel at anytime</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                <div className="loginScreen_input">
                        <form >
                            <input type="email" placeholder="Email address" />
                            <button className="loginScreen_getStarted" onClick={(e) => {
                    e.preventDefault()
                    setSignIn(true)
                }}>GET STARTED</button>
                    </form>
                </div>    
                </>
                )}
                </div>
        </div>
    )
}

export default withStyles(styles)(LoginScreen)
