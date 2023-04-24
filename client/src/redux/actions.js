import axios from 'axios';

export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_BY_NAME = 'GET_BY_NAME';
export const GET_DETAIL = 'GET_DETAIL';
export const CLEAN_DETAIL = 'CLEAN_DETAIL'
export const ADD_POKEMON = 'ADD_POKEMON';

export function getPokemons (){
    return async function (dispatch){
        const response = await axios.get(`http://localhost:3001/pokemons`);
        return dispatch({
            type: "GET_POKEMONS",
            payload: response.data
        });
    }
}


export function getByName (name){
    return async function (dispatch){
        const response = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
        return dispatch({
            type: "GET_BY_NAME",
            payload: response.data
        });
           
    }
}

export function getDetail(id){
    return async (dispatch)=>{
        const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
        return dispatch({
            type: "GET_DETAIL",
            payload: response.data,
        });
    }
}

export const cleanDetail = ()=>{
    return async (dispatch)=>{
        return dispatch({
            type: "CLEAN_DETAIL"
        });
    }
}

export const addPokemon = (pokemon) =>{
    return {type: 'ADD_POKEMON', payload: pokemon}
}