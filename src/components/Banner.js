import React, { useEffect, useState } from 'react'
import {withStyles} from "@material-ui/core/styles"
import axios from "./../axios"
import requests from "./../Request"

const styles ={
banner:{
    position:"relative",
    color:"white",
    objectFit:"contain",
    width:"100%",
    height:"448px",
    "& .banner_contents":{
        marginLeft:"30px",
        paddingTop:"140px",
        height:"190px",
        "& .banner_title":{
            fontSize:"3rem",
            fontWeight:800,
            paddingBottom:"0.3rem"
        },
        "& .banner_description":{
            width:"45rem",
            lineHeight:1.3,
            paddingTop:"1rem",
            fontSize:"0.8rem",
            maxWidth:"360px",
            height:"80px"
        }
    },
    "& .banner_button":{
cursor:"pointer",
color:"#fff",
outline:"none",
border:"none",
fontWeight:700,
borderRadius:"0.2vw",
paddingLeft:"2rem",
paddingRight:"2rem",
marginRight:"1rem",
paddingTop:"0.5rem",
backgroundColor:"rgba(51,51,51,0.5)",
paddingBottom:"0.5rem",
"&:hover":{
    color:"#000",
    backgroundColor:"#e6e6e6",
    transition:"all 0.2s"
}

    },
    "& .banner--fadeBottom":{
        height:"7.4rem",
        backgroundImage:"linear-gradient(180deg,transparent,rgba(37,37,37,0.61),#111)"
    }

}
}

function Banner(props) {
    const {classes} = props
    const [movie, setMovie] = useState([])

    useEffect(()=>{
async function fetchData(){
    const request = await axios.get(requests.fetchNetflixOriginals)
    setMovie(
        request.data.results[
            Math.floor(Math.random() * request.data.results.length-1)
        ]
    )
    return request

}
fetchData()
    },[])
function truncate(string,n){
return string?.length > n ?string.substr(0,n-1) + "..." : string
}
    return (
        <header className={classes.banner} style={{
            backgroundSize :"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:"center center"
        }}>
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">
                        Play 
                        </button>
                        <button className="banner_button">
My list
                        </button>
                </div>
                <h1 className="banner_description">{truncate(movie?.overview,150)}</h1>
            </div>
            <div className="banner--fadeBottom"/>
        </header>
    )
}

export default withStyles(styles)(Banner)
