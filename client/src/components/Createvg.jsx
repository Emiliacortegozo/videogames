import { useState, useEffect } from "react";
import {useDispatch , useSelector} from "react-redux";
import {Link, Navigate, useNavigate} from 'react-router-dom';
import { getGenres, postVg,getGames } from "../actions";
import  "./createVg.css"

export default function CreateVg(){
    const dispatch= useDispatch()
    const genres= useSelector((state)=>state.genres)
const Navigate= useNavigate()

    const[input,setInput]= useState({// obj to post
        name:"",
        rating:"",
        released:"",
        platforms:[],
        genres:[],
        released:"",
        image:"",
    })

function handleChange(e){
    setInput({
        ...input,
        [e.target.name]:e.target.value
    })
}

function handleSelect(e){
    
      setInput({
        ...input,
        genres:[...input.genres, e.target.value]
      }
        
      )
    }

    const [image, setImage] = useState();
    const onChangeIM = e => setImage(URL.createObjectURL(e.target.files[0]));
  
  
 function handleSubmit(e){
    e.preventDefault();
    console.log(input)
    dispatch(postVg(input))
    alert("videogame created!")
    setInput({ name:"",
    rating:"",
    released:"",
    platforms:"",
    genres:[],
    image:"",
    })
 Navigate('/home') //redirigir
 }
    useEffect(()=>{
        dispatch(getGenres())
        dispatch(getGames())
    },[dispatch]);

    let platforms = [
        "PC",
        "PlayStation 5",
        "Xbox One",
        "PlayStation 4",
        "Xbox Series S/X",
        "Nintendo Switch",
        "iOS",
        "Android",
        "Nintendo 3DS",
        "Nintendo DS",
        "Nintendo DSi",
        "macOS",
        "Linux",
        "Xbox 360",
        "Xbox",
        "PlayStation 3",
        "PlayStation 2",
        "PlayStation",
        "PS Vita",
        "PSP",
        "Wii U",
        "Wii",
        "GameCube",
        "Nintendo 64",
        "Game Boy Advance",
        "Game Boy Color",
        "Game Boy",
        "SNES",
        "NES",
        "Classic Macintosh",
        "Apple II",
        "Commodore / Amiga",
        "Atari 7800",
        "Atari 5200",
        "Atari 2600",
        "Atari Flashback",
        "Atari 8-bit",
        "Atari ST",
        "Atari Lynx",
        "Atari XEGS",
        "Genesis",
        "SEGA Saturn",
        "SEGA CD",
        "SEGA 32X",
        "SEGA Master System",
        "Dreamcast",
        "3DO",
        "Jaguar",
        "Game Gear",
        "Neo Geo",
    ];
    function handleChangePlatforms(e) {
        setInput({
            ...input,
            platforms:[...input.platforms, e.target.value]
          }
            
          )
        }

    return(<div className="createTop"> 
        <div >  <Link style={{ textDecoration: 'none'}} 
        to='/home'> <button className="btn3"> go back</button></Link>
        <h1> create a videogame</h1>
        </div>
        <form  className="Createcontainer" onSubmit={e=>handleSubmit(e)}>
<div>
    <label>Name</label>
    <input type="text"
    value={input.name}
    name="name" onChange={e=>handleChange(e)}
    />
</div>
<div>

    <label>Rating</label>
    <input type="number"
    value={input.rating}
    name="rating"onChange={e=> handleChange(e)}/>
</div>
<div>
    <label>Image</label>
      <input type="file" onChange={onChangeIM} />
        {image && <img className="imgloaded" src={image} alt="The current file" />}
    
</div>
<div>
<label> Genres</label>
<select onChange={(e)=>handleSelect(e)}> 
    {genres.map((g)=>(
        <option value={g.name}>{g.name}</option>
    ) 
    )}
   
</select>
</div>
<div>
    <label> Platforms</label>
    
<select required name="platforms"  onChange={(e) => handleChangePlatforms(e)}>
                        <option hidden={true}>Select some platforms</option>
                        {platforms.map(pl => <option value={pl}>{pl}</option>)}
                    </select>
                    </div>
<ul><li className="listof"> {input.genres.map(g=> g + ",")}</li></ul>
<ul><li className="listof"> {input.platforms.map(g=> g + ",")}</li></ul>
<button className="btn4" type="submit"> create</button>
<div>
</div>
        </form>
        </div>

        

    )
}