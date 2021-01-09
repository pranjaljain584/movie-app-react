import { combineReducers } from 'redux' ;
import {ADD_MOVIES , 
    ADD_FAVOURITE , 
    REMOVE_FAVOURITE , 
    SET_SHOW_FAVOURITES,
    ADD_SEARCH_RESULT
}from '../actions/index' ;

const initialMovieState = {
    list: [] ,
    favourites: [],
    showFavourites: false
}

export function movies (state = initialMovieState , action) {
    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state ,
    //         list: action.movies
    //     } ;
    // }

    // return state ;

    switch(action.type){

        case ADD_MOVIES:
            return{
                ...state,
                list: action.movies
            }

        case ADD_FAVOURITE:
            return{
                ...state,
                favourites: [action.movie , ...state.favourites]
            }

        case REMOVE_FAVOURITE:

            const newArray = state.favourites.filter( movie => 
                movie.Title !== action.movie.Title 
            )

            return{
                ...state ,
                favourites: newArray
            }

        case SET_SHOW_FAVOURITES:

            return {
                ...state,
                showFavourites: action.value
            }

        default:
            return state;
    }
}

const initialSearchState = {
    result: {}
};

export function search (state= initialSearchState , action){
    switch(action.type) {
        case ADD_SEARCH_RESULT :
            return {
                ...state ,
                result : action.movie
            }
        
        default :
            return state
    }
}

const initialRootState = {
    movies: initialMovieState ,
    search: initialSearchState
}

// export default function rootReducer (state = initialRootState, action) {
//     return {
//         movies: movies(state.movies , action) ,
//         search: search(state.search , action)
//     }
// }

export default combineReducers({
    movies: movies,
    search: search
});