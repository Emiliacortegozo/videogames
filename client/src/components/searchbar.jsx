import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getName} from "../actions";
import "./searchbar.css"

export default function SearchBar({setCurrentPage}){
    const dispatch = useDispatch();
    const [name,setName] = useState("")

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value);
        
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getName(name))
        setName("")
        
    
    }
    function onKeyDownHandler ( e ){
        if (e.keyCode === 13) {
            dispatch(getName(name))
        }}
      

    return(
        <div  className="searchInputCONT">
            <input className="searchInput"
            type="text" 
            value={name}
            placeholder="Search..."
            onChange={e=> handleInputChange(e)}
            onKeyDown={e=>onKeyDownHandler (e)}/>

            <button className="btn2"
             type="submit" onClick={e=> handleSubmit(e)}> Search</button>
        </div>
    )}