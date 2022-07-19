import axios from 'axios';

// conexion back front

export function getGames(){

    return async function (dispatch){
        var json = await axios.get('http://localhost:3001/videogames');
        return dispatch({ 
            type: 'GET_VIDEOGAMES',
        payload: json.data

        })
    }
} 
export function getGenres(){
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/genres')
        return dispatch({
            type: "GET_GENRES",
            payload: json.data
        })
    }
}
 export function postVg(payload){
    
    return async function(dispatch){
       
        const response= await axios.post('http://localhost:3001/videogame',payload);
        console.log(response)
        return response;
    }
 }

 export function filterByGenre(payload) {
    return {
        type: "FILTER_BY_GENRE",
        payload
    }
}

export function filterCreated(payload){
    return{
        type:'FILTER_CREATED',
        payload
       
    }
 }

export function filterByRating(payload){
    return{
        type:'ORDER_BY_RATING',
        payload
    }
}
export function orderByName(payload){
    return{
        type: "ORDER_BY_NAME",
        payload: payload
    }
}

export function getName(payload){
    return async function(dispatch){
        try{
            var json = await axios.get(`http://localhost:3001/videogames?name=${payload}`)
            return dispatch({
                type: "GET_VIDEOGAME_BY_NAME",
                payload: json.data,
                
            })
        } catch(error){
            console.log("getName"+ error)
        }
    }}
     export function getDetail(id){
        return async function(dispatch){
            try{
                const json= await axios.get(`http://localhost:3001/videogame/${id}`);
                return dispatch({
                    type:"GET_DETAILS", 
                payload:json.data,
                  }  )
            } catch(error){
                console.log(error)
            }
        }
     }