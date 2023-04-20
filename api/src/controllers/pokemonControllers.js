const {Pokemon} = require('../db');
const axios = require('axios');

const createPokemonDB = async (name, img, health, attack, defense, speed, size, weight)=>{
    const newPokemon =  await Pokemon.create({name, img, health, attack, defense, speed, size, weight});
    return newPokemon;
}

const getPokemons = async ()=>{
    try{
        const pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon`).then(data=> data.data)
        console.log(pokemons);
        /*const aux = pokemons.map(async (e)=>{
            pokeInfo= await axios.get(e.url).then(data=>data.data)
            const response = {name, img, health, attack, defense, speed, size, weight} = pokeInfo;
            return (response);
        });*/
        return pokemons;
    }catch(error){
       throw new Error('Algo paso, no se que..');
    }
}

const getPokemonById = async (id)=>{
    try{
        const response= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(data=> data.data)
        return response;
    }catch(error){
        throw new Error('Invalid ID');
    }
}

module.exports= {createPokemonDB, getPokemonById, getPokemons};