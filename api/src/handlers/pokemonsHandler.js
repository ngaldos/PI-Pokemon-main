const axios = require('axios');
const {createPokemonDB, getPokemonById, getPokemons, getPokemonByName, deletePokemon} = require('../controllers/pokemonControllers');


const getPokemonsHandler =  async (req, res)=>{
    const {name} = req.query;
    try{
        if (!name){
            const pokemons = await getPokemons();
            res.status(200).json(pokemons);
        }else{
            const response = await getPokemonByName(name.toLowerCase()); //Busco la query
            res.status(200).json(response);
        }
    }catch(error){
        res.status(404).json({error: error.message});
    }
 }
const getPokemonByIdHandler = async (req, res)=>{
    const {id} = req.params;
    if (!id) throw new Error ('Invalid ID (Handler)');
    else{
        
        try{
            const response = await getPokemonById(id);
            res.status(200).json(response);
        }catch (error) {
            res.status(404).json({error: error.message});
        }
}
}
const getPokemonByNameHandler= async (req, res)=>{
    const {name} = req.query;
    if (!name){
        throw new Error('Name was not received from query');
    }else{
        try{
            const response =  await getPokemonById(name).then(data=> data.data);
            if(data){
                res.status(200).json(response);
            }else res.status(400).json({error: 'Pokemons by that name has not been found.'})
        }catch(error){
            res.status(400).json({error: error.message})
        }
    }
}
            
const createPokemonHandler = async (req, res)=>{
    const {name, img, health, attack, defense, speed, weight, height, types} = req.body;
    try{
        const response= await createPokemonDB(name.toLowerCase(), img, health, attack, defense, speed, weight, height, types);
        res.status(200).json(response);
    }catch (error){
        res.status(400).json({error: error.message});
    }
}


const deletePokemonHandler = async (req, res)=>{
    const {id} = req.body;
    if (!id) res.status(400).send(`Invalid or missing ID.`);
    else{
        if (isNaN(id)){
            try {
                const response = await deletePokemon(id);
                if (response) 
                    res.status(200).send(`Pokemon deleted successfully.`);
                else    
                    res.status(400).send(`Something happened and we couldn't delete correctly the Pokemon.`);
            } catch (error) {
                res.status(500).send(error.message);
            }
        }else 
            res.status(400).send(`Invalid ID. Must be an UUID (Must be a DBB pokemon)`);
    }
}


module.exports = {
    getPokemonsHandler,
    createPokemonHandler, 
    getPokemonByIdHandler,
    getPokemonByNameHandler,
    deletePokemonHandler,

    };