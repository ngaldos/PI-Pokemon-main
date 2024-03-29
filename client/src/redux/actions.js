import axios from 'axios';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const ADD_REVIEW = "ADD_REVIEW";

export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_BY_NAME = 'GET_BY_NAME';
export const GET_DETAIL = 'GET_DETAIL';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';
export const GET_TYPES = 'GET_TYPES';

export const ADD_POKEMON= 'ADD_POKEMON';
export const DELETE_POKEMON = "DELETE_POKEMON";
export const CREATE_USER = "CREATE_USER";

export const ORDER_BY_NAME= 'ORDER_BY_NAME';
export const ORDER_BY_NAME_BACKWARDS= 'ORDER_BY_NAME_BACKWARDS';
export const ORDER_BY_ATTACK= 'ORDER_BY_ATTACK';
export const ORDER_BY_ATTACK_BACKWARDS= 'ORDER_BY_ATTACK_BACKWARDS';
export const FILTER_OWN= 'FILTER_OWN';
export const FILTER_CLOUD= 'FILTER_CLOUD';
export const FILTER_BOTH = 'FILTER_BOTH';
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE';

export const GET_USER_REVIEWS = "GET_USER_REVIEWS";

const URL_BASE = "http://localhost:3001/";

export const RESET = 'RESET';

export const getUserReviews = (mail)=>{
    return async (dispatch)=>{
        try {
            if (!mail) alert(`Invalid or missing Email.`);
            else{
                const response = await axios.get(`${URL_BASE}reviews?mail=${mail}`).then((data)=>data.data);
                return dispatch({
                    type: "GET_USER_REVIEWS",
                    payload: response,
                });
            }
        } catch (error) {
        }
    }
}

export const deleteReview = (id)=>{
    return async (dispatch)=>{
        try {    
            const response = await axios.delete(`${URL_BASE}reviews`, {data: {id}});
            return dispatch({
                type: "DELETE_REVIEW",
            });
        } catch (error) {
            alert(error);
        }
    }
}

export const deletePokemon = (id)=>{
    return async (dispatch)=>{
        try {    
            const response = await axios.delete(`${URL_BASE}pokemons`, {data: {id}});
            return dispatch({
                type: "DELETE_POKEMON",
            });
        } catch (error) {
            alert(error.message);
        }
    }
}

export const signOut = ()=>{
    return async (dispatch)=>{
        return dispatch({
            type: "SIGN_OUT",
            payload: null,
        });
    }
}

export const reset = (array)=>{
    return async (dispatch)=>{
        return dispatch({
            type: "RESET",
            payload: array,
        })
    }
}

export const getTypes = ()=>{
    return async (dispatch)=>{
        const response= await axios.get(`${URL_BASE}types`);
        return dispatch({
            type: "GET_TYPES",
            payload: response.data
        });
    }
}

export function getPokemons (){
    return async function (dispatch){
        const response = await axios.get(`${URL_BASE}pokemons`);
        return dispatch({
            type: "GET_POKEMONS",
            payload: response.data
        });
    }
}

//! getByName roto
export function getByName (name){
    return async function (dispatch){
        const response = await axios.get(`${URL_BASE}pokemons/?name=${name}`).then((data)=>data.data)
        .catch(()=>{
            alert(`No pokemon was found with that name.`);
            return dispatch({
                type: "GET_BY_NAME",
                payload: [],
            });
        })
        return dispatch({
            type: "GET_BY_NAME",
            payload: response
        });
    }
}



export function getDetail(id){
    return async (dispatch)=>{
        const response = await axios.get(`${URL_BASE}pokemons/${id}`);
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


export const createUser = (user)=>{
    return async (dispatch) =>{
        try {
            const response = await axios.post(`${URL_BASE}users/`, user);
            return dispatch({
                type: 'CREATE_USER',
                payload: response,
            });
        } catch (error) {
            alert(error.message);
        }
    }
}

export const addReview = (body)=>{
    return async (dispatch) =>{
        try {
            const response = await axios.post(`${URL_BASE}reviews`, body);
            return dispatch({
                type: "ADD_REVIEW",
                payload: response,
            });
        } catch (error) {
            alert(error.message);
        }
    }
}

export const addPokemon = (pokemon)=>{
    
    return async (dispatch) =>{
        try {
            const response= await axios.post(`${URL_BASE}pokemons/`, pokemon);
            return dispatch({
                type: "ADD_POKEMON",
                payload: response,
            });
        } catch (error) {
            alert(error.message);
        }
    }
}

export const signIn = (user)=>{
    return async (dispatch) =>{
        try {
            const response = await axios.post(`${URL_BASE}auth`, user).then((data)=>data.data);
            return dispatch({
                type: "SIGN_IN",
                payload: response,
            });
        } catch (error) {
            alert(error?.response?.data);
        }
    }
}

export function filterByType(types){
    return {
        type: FILTER_BY_TYPE,
        payload: types
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

