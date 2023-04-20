const {Pokemon} = require('../db');
const axios = require('axios');

const createPokemonDB = async (name, img, health, attack, defense, speed, size, weight)=>{
    const newPokemon =  await Pokemon.create({name, img, health, attack, defense, speed, size, weight});
    return newPokemon;
}

const getPokemons = async ()=>{
    try{
        const pokemons = (await axios.get(`https://pokeapi.co/api/v2/pokemon`)).data
        //console.log(pokemons.results);
        const aux = pokemons.results.map(async (e)=>{
            const URL = e.url;
            let name = e.name;
            const pokeInfo= (await axios.get(URL)).data
            const {img, health, attack, defense, speed, size, weight} = pokeInfo;
            //console.log(name);
            //console.log(health);
            //const response = {img, health, attack, defense, speed, size, weight} = pokeInfo;
            //return (name, img, health, attack, defense, speed, size, weight);
            return (name);
        });
        console.log(aux);
        return aux;
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