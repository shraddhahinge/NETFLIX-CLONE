import React, { useEffect, useState } from 'react'
import {withStyles} from "@material-ui/core/styles"

const styles ={
    nav:{
        position:"fixed",
        top:0,
        padding:"20px",
        width:"100%",
        height:"30px",
        zIndex:1,
        // animations
        transitionTimingFunction:"ease-in",
        transition:"all 0.5s",
       
"& .nav_contents":{
    display:"flex",
    justifyContent:"space-between",
    "& .nav_logo":{
position:"fixed",
top:"10px",
left:0,
width:"80px",
objectFit:"contain",
paddingLeft:"20px",
cursor:"pointer"
    },
    "& .nav_avatar":{
        position:"fixed",
        right:"20px",
        width:"30px",
      cursor:"pointer"
    }
}
    },
    nav_black:{
        backgroundColor:"black"
                },
}

function Nav(props) {
    const {classes} = props
    const [show, handleShow] = useState(false)

    const transitionNavbar =() =>{
if(window.scrollY > 100){
    handleShow(true)
}else{
    handleShow(false)
}
    }

    useEffect(()=>{
window.addEventListener("scroll", transitionNavbar);
return () => window.removeEventListener("scroll", transitionNavbar)
    },[])
    return (

        <div className={`${classes.nav} ${show && classes.nav_black}` }>
            <div className="nav_contents">

            <img className="nav_logo" 
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix_logo"/>
            <img className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix_avatar_logo"/>
            </div>
        </div>
    )
}

export default withStyles(styles)(Nav)
