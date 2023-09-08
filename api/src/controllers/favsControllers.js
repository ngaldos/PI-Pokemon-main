const {Fav, User, Pokemon} = require('../db');
const axios = require(`axios`);



const addFav = async (id, pokeId)=>{

    const user = await User.findByPk(id);
    if (!user) throw new Error(`Invalid User ID.`);

    const pokemon = await Pokemon.findByPk(pokeId);
    if (!pokemon) throw new Error(`Invalid Pokemon ID.`);

    //const existingFav = await Fav.findOne({where: {id, pokeId}});
    
    //if (existingFav) throw new Error(`This favorite already exists for this user and pokemon.`);
    const response = await Fav.create();
    await response.setUser(user);
    await response.setPokemon(pokemon);
    console.log(`FINAL`);

    return response;
    
}

const getAllFavs = async () =>{
    const response = await Fav.findAll();
    return response;
}

module.exports = {
    addFav,
    getAllFavs
};