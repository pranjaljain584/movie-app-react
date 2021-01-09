// action types
export const ADD_MOVIES = "ADD_MOVIES" ;
export const ADD_FAVOURITE = "ADD_FAVOURITE" ;
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE" ;
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES" ;
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST" ;

// action creators
export function addMovies (movies) {
    return {
        type: ADD_MOVIES ,
        movies
    }
}

export function addFavourite (movie) {
    return {
        type: ADD_FAVOURITE ,
        movie
    }
}

export function removeFromFavourite (movie) {
    return {
        type: REMOVE_FAVOURITE ,
        movie
    }
}

export function setShowFavourites (value) {
    return {
        type: SET_SHOW_FAVOURITES ,
        value
    }
}

export function addMoviesToList (movie) {
    return {
        type: ADD_MOVIE_TO_LIST ,
        movie
    };
}

export function handleMovieSearch (movie) {
    const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}` ;

    return function (dispatch){
        fetch(url)
            .then(response => response.json())
            .then(movie => {
                console.log('movie',movie);

                dispatch({type:'ADD_SEARCH_RESULT' , movie}) ;
            })
    }
} 