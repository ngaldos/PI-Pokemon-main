const {Pokemon} = require('../db');
const axios = require('axios');

const createPokemonDB = async (name, img, health, attack, defense, speed, size, weight)=>{
    const newPokemon =  await Pokemon.create({name, img, health, attack, defense, speed, size, weight});
    return newPokemon;
}

const getPokemons = async ()=>{
    try{
        const pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon`).then(data=> data.data)
        return pokemons;
    }catch(error){
        res.status(400).json({error: error.message});
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