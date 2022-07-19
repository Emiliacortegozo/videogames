import React from "react";
import { useState, useEffect } from "react";
import "./paginado.css"
export default function Paginado({videosPerPage, allGames, paginado}){
const pageNumbers =[];

for(let i= 1; i<= Math.ceil(allGames/videosPerPage); i++){
    pageNumbers.push(i)
}
return (
    <div > {
        <ul className="page">
     {pageNumbers &&
     pageNumbers.map(number=>(
    <li  key= {number}>
    <button className="btn"  onClick={()=> paginado(number)}>{number}</button>
    </li>
    ))}    
 </ul>
 } </div>
)
}