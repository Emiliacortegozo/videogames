import React from "react";
import { useLinkClickHandler } from "react-router-dom";
import  "./cards.css"
import Detail from "./details";
import { Link } from "react-router-dom";

export default function Card({name,image,genres}){

    return (

                        <div className="card"> 
                 <div className="card_items">
                 <img  className="img"src= {image} ></img>
                   <h2>{name}</h2>
                     <e>{ genres.join(" | ")}</e>
                     </div> 
                     </div>      
    )
}