const initialState ={

    videogames : [],
videogamesCopy:[],
    detail:[],
    genres:[],
}

function rootReducer (state= initialState, action){
    switch(action.type){
        case 'GET_VIDEOGAMES':
            return{
                ...state,
                videogames:action.payload,
                videogamesCopy: action.payload
            }
            
            
            case "FILTER_CREATED":
                const allVideoGames2 = state.videogamesCopy;
                const createdFilter = action.payload === "created" ? allVideoGames2.filter(e => e.createdInDb) : allVideoGames2.filter( e => !e.createInDb)
                return{
                    ...state,
                    videogames: action.payload === "All" ? state.videogames : createdFilter
                }
            

            case  "ORDER_BY_NAME":
                let sortGame = action.payload === "asc" || action.payload === "alpha"
                ? state.videogames.sort((a,b) =>{
    
                    if(a.name.toUpperCase() > b.name.toUpperCase()){
                        return 1;
                    }
                    if(a.name.toUpperCase() < b.name.toUpperCase()){
                        return -1;
                    }
                    return 0;
                    
                   
                }): state.videogames.sort((a,b)=>{
    
                    if(a.name.toUpperCase() > b.name.toUpperCase()){
                        return -1;
                    }
                    if(a.name.toUpperCase() < b.name.toUpperCase()){
                        return 1;
                    }
                    return 0;
    
                })
                return{
                    ...state,
                    videogames: sortGame
                }
            case 'FILTER_BY_RATING':
                let sortedArr = action.payload === 'asc'?
                state.videogames.sort(function(a,b){
                    if (a.rating> b.rating){
                        return -1;
                    }
                    if (b.rating<a.rating){
                        return 1;}
                    return 0;
                }): // sino.....
                state.videogames.sort(function(a,b){
                    if(a.rating>b.rating){
                        return 1;}
                        if (b.rating<a.rating){
                            return -1;}
                            return 0;
                        })
               return {
                ...state,
                videogames:sortedArr
               }
               case "GET_VIDEOGAME_BY_NAME":
             
            return {
                ...state,
                videogames:action.payload.err?[{Error:"No videogames Found"}] : action.payload,
                
            }
            case "GET_DETAILS":
            return{
                ...state,
                detail:action.payload
            }
            case "POST_VG":
                return{
                    ...state,
                }
                case "GET_GENRES":
                    return{
                        ...state,
                        genres:action.payload
                    }
                    case "FILTER_BY_GENRE":
                        const videogamesToFilterByGenre = state.videogamesCopy;
                    const genreFilter = action.payload === 'All' ?
                        videogamesToFilterByGenre :
                        videogamesToFilterByGenre.filter(v => v.genres.includes(action.payload))
                    return {
                        ...state,
                        videogames : genreFilter
                        
                        };
                    
    default : return state;}

}
export default rootReducer;