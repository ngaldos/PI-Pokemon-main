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

const getFavs = async (mail) =>{
    console.log(1);
    const user = await User.findOne({where: {mail}}).then((data)=>data.dataValues)
    .catch(()=>{});
    console.log(2);
    if (!user) throw new Error(`No user was found with that mail.`);
    else{
        console.log(3);
        const {id} = user;
        console.log(id);
        const response = await Fav.findAll({where: {UserId: id}});
        console.log(response.length > 0);
        if (response.length == 0) return false;
        else return response;
    }
}

const deleteFav = async (id)=>{
    if (!id) throw new Error(`Invalid or missing ID.`);
    else{
        const response = await Fav.findOne({where: {id}});
        const aux = await Fav.destroy({where: {id}});
        return response;
    }
}

module.exports = {
    addFav,
    getAllFavs,
    getFavs,
    deleteFav,
    
};