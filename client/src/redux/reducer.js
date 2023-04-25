import { GET_POKEMONS, GET_BY_NAME, GET_DETAIL, CLEAN_DETAIL, ADD_POKEMON} from "./actions";

const initialState = {
    pokemons: [],
    detail: {}
};

function rootReducer (state = initialState, action){
    switch (action.type){
    case GET_POKEMONS:
    return {
        ...state,
        pokemons: action.payload,
        pokemonsCopy: action.payload
    };
    case GET_BY_NAME: 
    return{
        ...state,
        pokemons: action.payload
    };
    case GET_DETAIL: 
    return{
        ...state,
        detail: action.payload
    };
    case CLEAN_DETAIL:
        return{...state, detail: {}}
        
        
    case ADD_POKEMON:
        return {...state}
        

        default:
            return state;
    }

}


export default rootReducer;