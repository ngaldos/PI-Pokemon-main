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
    const aux= await Type.findAll();
    if (aux.length){
        return aux;
    }else{
        try{
            const response = await axios.get(`https://pokeapi.co/api/v2/type/`).then(data=> data.data.results)
            const array = [];
            let i= 1;
            response.forEach(e => {
                Type.create({name: e.name});
                array.push({id: i, name: e.name});
                i++;
            });
            //Type.create(); 
            return array;
        }catch(error){
            throw new Error ('Invalid URL');
        }
        
    }
}

const getTypeDB = async ()=>{ //Pendiente...................
    return 0;
}

module.exports = { createTypeDB, getTypeDB, getTypes };