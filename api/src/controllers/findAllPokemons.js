const {Pokemon} = require('../db');
const findPokemonByName = require('./findPokemonByName');

const findAllPokemons = async (req, res)=>{
    try{
        const {name} = req.query;
        if (name){
            const pokemon= await findPokemonByName(name);
            res.status(200).json(pokemon);
        }else{ //si no hay name devuelvo todos los pokemones
            const pokemons = await findAll(Pokemon);
            res.status(200).json(pokemons);
        }
        //return pokemons;
    }catch{
        res.status(400).json({error: error.message});
    }
}

module.exports = findAllPokemons;