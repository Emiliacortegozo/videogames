import React from "react";
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./Details.css"

export default function Detail(){
  
    const myVideo= useSelector((state)=>state.detail);
const dispatch= useDispatch();
const {id} = useParams();
useEffect(()=>{
    dispatch(getDetail(id))
},[dispatch,id])

    return (
        <div> <Link style={{ textDecoration: 'none'}}to= "/home">
            <button className="btnDe"> go back </button>
            </Link>
         
                        <div className="infocard">
                            <div className=" info1">
                    <h1 className="h1">{myVideo.name}</h1>
 <h5  > {myVideo.platforms?.join(" | ")} </h5>
                    <h2 className="h1">{myVideo.genres?.join(" | ")}</h2>
                   
                   
                    <h4 >Released: {myVideo.releaseDate}</h4>
                
                <h4>Rating: {myVideo.rating}</h4>
                
                </div>
                
                <img  className="imge" src={myVideo.background_image}  alt="Videogame cover" />
                
               <div className="info2" >
                 
             <p className="p" dangerouslySetInnerHTML={{__html: myVideo.description}}></p>
             </div>
            </div>
            </div>
         
                 )}
