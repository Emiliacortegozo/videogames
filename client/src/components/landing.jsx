import React from "react";
import {Link} from "react-router-dom";
import "./button.css";


export default function LandingPage(){
    return(
        <div className="bodylanding">
            
            <h1 className="title">VIDEOGAMES</h1>
            
            <Link to = '/home'>
            < a className="a">START</a>
            </Link>
            
            
            </div>
    )
}