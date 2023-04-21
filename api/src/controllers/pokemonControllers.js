const {Pokemon} = require('../db');
const axios = require('axios');

const createPokemonDB = async (name, img, health, attack, defense, speed, size, weight)=>{
    const newPokemon =  await Pokemon.create({name, img, health, attack, defense, speed, size, weight});
    return newPokemon;
}

const getPokemons = async ()=>{
    const info = await axios.get(`https://pokeapi.co/api/v2/pokemon`).then(data=>data.data.results)
    try{
        const coso = info.map((e)=>axios.get(e.url))
        let promesas = Promise.all(coso)
        .then(e=>{
            const pokemon = e.map(p=> p.data)
            const array= [];
            pokemon.forEach((p)=>{
                array.push({
                    id: p.id,
                    name: p.name,
                    image: p.sprites.other.home.front_default,
                    health: p.stats[0].base_stat,
                    attack: p.stats[1].base_stat,
                    defense: p.stats[2].base_stat,
                    speed: p.stats[5].base_stat,
                    height: p.height,
                    weight: p.weight,
                });
            });
                return array;
        })
        return promesas;
    }catch(error){
       throw new Error('Error getting all pokemons');
    }
}

const getPokemonById = async (id)=>{
    const p= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(data=> data.data)
    try{
        const array = [];
        const pokemon = {
            id: p.id,
            name: p.name,
            image: p.sprites.other.home.front_default,
            health: p.stats[0].base_stat,
            attack: p.stats[1].base_stat,
            defense: p.stats[2].base_stat,
            speed: p.stats[5].base_stat,
            height: p.height,
            weight: p.weight,
        };
        return pokemon;
    }catch(error){
        throw new Error('Invalid ID');
    }
}

module.exports= {createPokemonDB, getPokemonById, getPokemons};