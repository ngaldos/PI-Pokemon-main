import axios from 'axios';

export const GET_POKEMONS = 'GET_POKEMONS'


export function getPokemons (){
    return async function (dispatch){
        const response = await axios.get(`localhost:3001/pokemons`);
        return dispatch({
            type: "GET_POKEMONS",
            payload: response.data
        });
    }
}