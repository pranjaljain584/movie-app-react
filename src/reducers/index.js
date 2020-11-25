export default function movies (state = [] , action) {
    if(movies.action == "ADD_MOVIES"){
        return action.movies ;
    }

    return state ;
}