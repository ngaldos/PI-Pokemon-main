const {Type} = require('../db');
const axios = require('axios');

const createTypeDB = async (name)=>{
    if (!name){
        throw new Error('The key -- NAME -- is undefined.');
    }else{
        const newType = await Type.create({name});
        return newType
    }
}

const getTypes = async ()=>{
    try{
        const response = await axios.get(`https://pokeapi.co/api/v2/type/`).then(data=> data.data)
        return response;
    }catch(error){
        throw new Error ('Invalid URL');
    }

}

const getTypeDB = async ()=>{ //Pendiente...................
    return 0;
}

module.exports = { createTypeDB, getTypeDB, getTypes };