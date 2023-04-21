const axios = require('axios');
const {createPokemonDB, getPokemonById, getPokemons} = require('../controllers/pokemonControllers');


const getPokemonsHandler =  async (req, res)=>{
    const {name} = req.query;
    if (!name){
        try{
            const pokemons = await getPokemons();
            res.status(200).json(pokemons);
        }catch(error){
            res.status(400).json({error: error.message});
        }
    }else{
        try{
            const response = await getPokemonById(name.toLowerCase());
            res.status(200).json(response);
        }catch(error){
            res.status(404).json({error: error.message});
        }
    }
 }

const getPokemonByIdHandler = async (req, res)=>{
    const {id} = req.params;
    if (!id) throw new Error ('Invalid ID (Ctrl)');
    else{
        try{
            if (isNaN(id)){ // Si es NaN ==> Es de la base de datos

            }else{ // Si no se busca en la API normalmente

            }
            const response = await getPokemonById(id);
            res.status(200).json(response);
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

const getPokemonByNameHandler= async (req, res)=>{
    const {name} = req.query;
    if (!name){
        throw new Error('Name was not received from query');
    }else{
        try{
            const response =  await getPokemonById(name).then(data=> data.data);
            res.status(200).json(response);
        }catch(error){
            res.status(400).json({error: error.message})
        }
    }
}



module.exports = {
    getPokemonsHandler,
    createPokemonHandler, 
    getPokemonByIdHandler,
    getPokemonByNameHandler
    };