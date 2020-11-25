// {
//     type: 'ADD_MOVIES'
// }

// action types
export const ADD_MOVIES = "ADD_MOVIES" ;
export const ADD_FAVOURITE = "ADD_FAVOURITE" ;

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