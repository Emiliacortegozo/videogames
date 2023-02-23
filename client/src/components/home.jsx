import React from "react";
import { useState, useEffect } from "react";
import {useDispatch , useSelector} from "react-redux";
import {getGames,filterByGenre, filterCreated, filterByRating, getGenres, getName, orderByName, setOrden} from "../actions";
import Card from "./cards";
import Paginado from "./Paginado";
import SearchBar from "./searchbar";
import { Link } from "react-router-dom";
import"./home.css"


export default function Home (){

let allGames = useSelector((state)=> state.videogames)//trae del reducer 

 const [currentPage,setCurrentPage]= useState(1) //pag x local states
 const [videosPerPage,setVideosPerPage]= useState(8) //cuantos games x pagina
 

 const indexOflastvideo = currentPage * videosPerPage
 const indexOfFirstVideo =indexOflastvideo - videosPerPage

 const currentVideos = allGames.slice(indexOfFirstVideo, indexOflastvideo) 

 const paginado= (pageNumber)=> {
     setCurrentPage(pageNumber)
 }
 const dispatch = useDispatch();

 useEffect(()=>{
     dispatch(getGames());
 },[dispatch]) 

      
    function handleClick(e){
e.preventDefault();
dispatch(getGames());
    }
    
    function handleFilterByGenre (e) {
        e.preventDefault();
        dispatch(filterByGenre(e.target.value))
        setCurrentPage(1)
       setVideosPerPage(9)
     
        ;}

    function handlefilterCreated (e){
        e.preventDefault();
        dispatch(filterCreated(e.target.value)) 
        setCurrentPage(1) 
    }
    function handlefilterorderbyRating(e){
        e.preventDefault();
        dispatch(filterByRating(e.target.value))
        setOrden(`Ordenado ${e.target.value}`)
        setCurrentPage(1)
    }
    const [orden, setOrden]= useState("")
    
    function handleSort(e){
        e.preventDefault()
        dispatch(orderByName(e.target.value));
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
    }
   
    return (
        <div className="home">
            <h1 className="title2"> VIDEOGAMES</h1>
<div className="options1">

<SearchBar  onChange ={e=>(e.target.value)} /> 

<select className="select" onChange={e=>handlefilterCreated(e)}>
<option value="alpha">Sort created-all</option>
    <option value="all"> All</option>
    <option value="created"> created</option>
    </select>
    <select className="select" onChange={e => handleSort(e)}>
                            <option value="alpha">Sort abc</option>
                            <option value="asc">Sort:  A - Z</option>
                            <option value="des">Sort:  Z - A</option>
                        
</select>

<select className="select" onChange={e=>handleFilterByGenre(e)} >  
<option value="alpha">Sort by Genre</option>
<option  value="All">All</option>
                        <option  value="Action">Action</option>
                        <option  value="Adventure">Adventure</option>
                        <option value="Arcade">Arcade</option>
                        <option  value="Board Games">Board Games</option>
                        <option  value="Card">Card</option>
                        <option value="Casual">Casual</option>
                        <option  value="Educational">Educational</option>
                        <option  value="Family">Family</option>
                        <option value="Fighting">Fighting</option>
                        <option  value="Indie">Indie</option>
                        <option  value="Massively Multiplayer">Massively Multiplayer</option>
                        <option  value="Platformer">Platformer</option>
                        <option  value="Puzzle">Puzzle</option>
                        <option  value="Racing">Racing</option>
                        <option  value="RPG">RPG</option>
                        <option  value="Shooter">Shooter</option>
                        <option  value="Simulation">Simulation</option>
                        <option  value="Sports">Sports</option>
                        <option  value="Strategy">Strategy</option>
</select >

<button className="btn2"> <Link style={{ textDecoration: 'none'}} to= '/videogames'>Create </Link></button>
<button onClick={e=>{handleClick(e)}} className="btn2"> RELOAD</button>
</div>
<Paginado
videosPerPage = {videosPerPage}
allGames ={allGames.length}
paginado={paginado}/>
<div  className="CONTAINER">
{currentVideos.map((el)=> 
        <Link style={{ textDecoration: 'none'}} key={el.id} to={`/videogame/${el.id}`}>
<Card name={el.name} image={el.background_image} 
 genres={el.genres}/> 
  </Link>)
}
</div>
</div>
)}