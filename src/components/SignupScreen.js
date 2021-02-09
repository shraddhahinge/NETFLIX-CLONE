import React from 'react'
import { withStyles } from "@material-ui/core/styles"

const styles = {
    signupScreen: {
        maxWidth: "300px",
        padding: "70px",
        marginLeft: "auto",
        marginRight: "auto",
        background: "rgba(0,0,0,0.85)",
        "& form": {
            display: "grid",
            flexDirection: "column",
            "& h1": {
                textAlign: "left",
              marginBottom:"25px"  
            },
            "& h4": {
                textAlign: "left",
                marginTop: "30px",
                "& span": {
                    "&:nth-child(1)": {
                  color:"gray"
                },
                "&:nth-child(2):hover": {
                    cursor: "pointer",
                    textDecoration:"underline"
                }
                }
            },
            "& input": {
                padding: "5px 15px",
                outlineWidth: 0,
                height: "40px",
                marginBottom: "14px",
                borderRadius: "5px",
               border:"none"
            },
            "& button": {
                padding: "16px 20px",
                fontSize: "1rem",
                color: "#fff",
                borderRadius: "5px",
                backgroundColor: "#e50914",
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
            marginTop: "20px"
            }
        }
    }
}

function SignupScreen(props) {
    const {classes} = props
    return (
        <div className={classes.signupScreen}>
           <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email address" />
                <input type="password" placeholder="Password" />
                <button type="submit">Sign In</button>
                <h4>
                    <span>
                        New to Netflix? 
                    </span>
                    {" "}
                    <span>
                    Sign Up Now
                    </span>
                    </h4>
           </form>

        </div>
    )
}

export default withStyles(styles)(SignupScreen)
