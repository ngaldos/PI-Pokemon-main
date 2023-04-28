import { GET_POKEMONS, GET_BY_NAME, GET_DETAIL, CLEAN_DETAIL, ADD_POKEMON, GET_TYPES,
    ORDER_BY_NAME,ORDER_BY_NAME_BACKWARDS, ORDER_BY_ATTACK, ORDER_BY_ATTACK_BACKWARDS, RESET, FILTER_OWN, FILTER_CLOUD, FILTER_BOTH} from "./actions";

const initialState = {
    pokemons: [],
    pokemonsCopy: [],
    originals: [],
    types: [],
    detail: {}
};

function rootReducer (state = initialState, action){
    switch (action.type){
    case GET_POKEMONS:
    return {
        ...state,
        pokemons: action.payload,
        originals: action.payload,
        pokemonsCopy: action.payload
    };
    case GET_BY_NAME: 
        return{
            ...state,
            pokemonsCopy: action.payload
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
        
    case ORDER_BY_NAME:
        return {...state, pokemonsCopy: action.payload, pokemons: action.payload}
    //! los ordenamientos => ordenan el array original (por ende no respeta el filtrado si lo hay)
    case ORDER_BY_NAME_BACKWARDS:
        return {...state, pokemonsCopy: action.payload, pokemons: action.payload}

    case ORDER_BY_ATTACK:
        return {...state, pokemonsCopy: action.payload, pokemons: action.payload}
    
    case ORDER_BY_ATTACK_BACKWARDS:
        return {...state, pokemonsCopy: action.payload, pokemons: action.payload}
    case RESET: 
        return {...state, pokemonsCopy: action.payload, pokemons: action.payload}
    case FILTER_OWN: 
        return {...state, pokemonsCopy: action.payload}
    case FILTER_CLOUD: 
        return {...state, pokemonsCopy: action.payload}

    case FILTER_BOTH:
        return {...state, pokemonsCopy: action.payload}
    case GET_TYPES:
        return {...state, types: action.payload}


        default:
            return state;
    }
}


export default rootReducer;