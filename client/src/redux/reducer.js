import { GET_POKEMONS, GET_BY_NAME, GET_DETAIL, CLEAN_DETAIL, ADD_POKEMON, GET_TYPES, FILTER_BY_TYPE,
    ORDER_BY_NAME,ORDER_BY_NAME_BACKWARDS, ORDER_BY_ATTACK, ORDER_BY_ATTACK_BACKWARDS,
     RESET, FILTER_OWN, FILTER_CLOUD, FILTER_BOTH, CREATE_USER, SIGN_IN, SIGN_OUT, GET_USER_REVIEWS
} from "./actions";

const initialState = {
    pokemons: [],
    pokemonsCopy: [],
    originals: [],
    types: [],
    detail: {},
    user: {},
};

function rootReducer (state = initialState, action){
    switch (action.type){
    
    case GET_USER_REVIEWS:
        return {
            ...state,
            user: {...state.user,
                reviews: action.payload},
        };
    case SIGN_OUT:
        return {
            ...state,
            user: {},
        };
    case SIGN_IN:
        return {...state, 
            user: action.payload};
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

        case FILTER_BY_TYPE:
            const type = action.payload;
            const aPokemons = state.pokemons;
            const filtered = aPokemons.filter((pokemon) => pokemon.types.includes(type));
            const filteredTypes = type === "all" ? aPokemons : filtered
            return {
                ...state,
                pokemonsCopy: filteredTypes[0] ? filteredTypes : ["Theres no pokemons type"],
            };
            

        default:
            return state;
    }
}


export default rootReducer;