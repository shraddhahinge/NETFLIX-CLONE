import React from 'react'
import Nav from "./Nav"
import {withStyles} from "@material-ui/core/styles"
import Banner from "./Banner"
import Row from './Row'
import requests from "./../Request"

const styles ={}

function HomeScreen() {
    return (
        <div>
           <Nav/>
          <Banner/>
          <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
          <Row title="Trending Now" fetchUrl={requests.fetchTrending}  />
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated}  />
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}  />
          <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}  />
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}  />
          <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}  />
          <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
        </div>
    )
}

export default withStyles(styles)(HomeScreen)
