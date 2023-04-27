import axios from 'axios';

export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_BY_NAME = 'GET_BY_NAME';
export const GET_DETAIL = 'GET_DETAIL';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';

export const ADD_POKEMON= 'ADD_POKEMON';

export const ORDER_BY_NAME= 'ORDER_BY_NAME';
export const ORDER_BY_NAME_BACKWARDS= 'ORDER_BY_NAME_BACKWARDS';
export const ORDER_BY_ATTACK= 'ORDER_BY_ATTACK';
export const ORDER_BY_ATTACK_BACKWARDS= 'ORDER_BY_ATTACK_BACKWARDS';
export const FILTER_OWN= 'FILTER_OWN';
export const FILTER_CLOUD= 'FILTER_CLOUD';
export const FILTER_BOTH = 'FILTER_BOTH';


export const RESET = 'RESET';



export const reset = (array)=>{
    return async (dispatch)=>{
        return dispatch({
            type: "RESET",
            payload: array,
        })
    }
}

export function getPokemons (){
    return async function (dispatch){
        const response = await axios.get(`http://localhost:3001/pokemons`);
        return dispatch({
            type: "GET_POKEMONS",
            payload: response.data
        });
    }
}

//! getByName roto
export function getByName (name){
    return async function (dispatch){
        const response = await axios.get(`http://localhost:3001/pokemons/?name=${name}`).catch(()=>{
            alert('Request failed');
        })
        if (Array.isArray(response.data)){
            const aux = response?.data.filter((poke)=>Object.values(poke).length > 0);
            return dispatch({
                type: "GET_BY_NAME",
                payload: aux,
            });   
        }else if (typeof response?.data === 'object'){
            const aux = [response.data];
            return dispatch({
                type: "GET_BY_NAME",
                payload: aux,
            });
        }
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


export const addPokemon = (pokemon)=>{
    
    return async (dispatch) =>{
        try {
            const response= await axios.post(`http://localhost:3001/pokemons/`, pokemon);
            return dispatch({
                type: "ADD_POKEMON",
                payload: response,
            });
        } catch (error) {
            alert(error.message);
        }
    }
}

export const orderByNameD = (array)=>{
    return async (dispatch) =>{
        const response= array?.slice().sort((a, b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
            })
        return dispatch({
            type: 'ORDER_BY_NAME',
            payload: response,
        });
    }
}
export const orderByNameBackD = (array)=>{
    return async (dispatch) =>{
        const response= array?.slice().sort((a, b) => {
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            return 0;
            })
        return dispatch({
            type: 'ORDER_BY_NAME_BACKWARDS',
            payload: response,
        });
    }
}

export const orderByAttackD = (array)=>{
    return async (dispatch) =>{
        const response= array?.slice().sort((a, b) => {
            if (a.attack > b.attack) return 1;
            if (a.attack < b.attack) return -1;
            return 0;
            })
        return dispatch({
            type: 'ORDER_BY_ATTACK',
            payload: response,
        });
    }
}

export const orderByAttackBackD = (array)=>{
    return async (dispatch) =>{
        const response= array?.slice().sort((a, b) => {
            if (a.attack < b.attack) return 1;
            if (a.attack > b.attack) return -1;
            return 0;
            })
        return dispatch({
            type: 'ORDER_BY_ATTACK_BACKWARDS',
            payload: response,
        });
    }
}

export const filterOwnD = (array)=>{
    return async (dispatch) =>{
        const response = [];
        array?.forEach((e)=>{
            if (isNaN(e.id)) response.push(e);
        });
        return dispatch({
            type: 'FILTER_OWN',
            payload: response,
        });
    }
}
export const filterCloudD = (array)=>{
    return async (dispatch) =>{
        const response = []
        array?.forEach((e)=>{
            if (!isNaN(e.id)) response.push(e);
        });
        return dispatch({
            type: 'FILTER_CLOUD',
            payload: response,
        });
    }
}

export const filterBothD= (array)=>{
    return async (dispatch) =>{
        return dispatch({
            type: 'FILTER_BOTH',
            payload: array,
        });
    }
}