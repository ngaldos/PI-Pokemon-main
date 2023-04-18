const axios = require('axios');
const {createPokemonDB, getPokemonById, getPokemons} = require('../controllers/pokemonControllers');


const getPokemonsHandler =  async (req, res)=>{
    try{
        const pokemons = await getPokemons();
        res.status(200).json(pokemons.data);
    }catch(error){
        res.status(400).json({error: error.message});
    }
    //res.status(200).send('Info de TODOS los pokemones');
}

const getPokemonByIdHandler = async (req, res)=>{
    const {id} = req.params;
    if (!id) throw new Error ('Invalid ID x2');
    else{
        try{
            const response = await getPokemonById(id);
            res.status(200).json(response.data);
        }catch(error){
            res.status(404).json({error: error.message});
        }
    }
}

const createPokemonHandler = async (req, res)=>{
    const {name, img, health, attack, defense, speed, size, weight} = req.body;
    try{
        const response= await createPokemonDB(name, img, health, attack, defense, speed, size, weight);
        res.status(200).json(response);
    }catch (error){
        res.status(400).json({error: error.message});
    }
}



module.exports = {getPokemonsHandler, createPokemonHandler, getPokemonByIdHandler};