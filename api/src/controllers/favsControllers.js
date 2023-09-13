const {Fav, User, Pokemon, Type} = require('../db');
const {infoCleanerDb} = require(`./pokemonControllers`);
const axios = require(`axios`);



const addFav = async (id, pokeId)=>{

    const user = await User.findByPk(id);
    if (!user) throw new Error(`Invalid User ID.`);

    const pokemon = await Pokemon.findByPk(pokeId);
    if (!pokemon) throw new Error(`Invalid Pokemon ID.`);

    const existingFav = await Fav.findOne({where: {UserId: id, PokemonId: pokeId}}).catch(()=>{});
    
    if (existingFav) throw new Error(`This favorite already exists for this user and pokemon.`);
    else{
        const response = await Fav.create();
        await response.setUser(user);
        await response.setPokemon(pokemon);
        return response;
    }
}

const getAllFavs = async () =>{
    const response = await Fav.findAll();
    return response;
}

const getFavs = async (mail) =>{
    const user = await User.findOne({where: {mail}}).then((data)=>data.dataValues).catch(()=>{});
    if (!user) throw new Error(`No user was found with that mail.`);
    else{
        const response = await Fav.findAll({where: {UserId: user.id}})
        if (response?.length > 0){
            const aux = await response.map(async(e)=> {
                const pokemon = await Pokemon.findByPk(e?.dataValues?.PokemonId, {include: [{
                    model: Type,
                    attributes: ["name"],
                    through: {attributes: []},
                }],});
                const info = infoCleanerDb(pokemon.dataValues);
                return {
                    id: e?.dataValues?.id,
                    pokemon: info,
                };
            });
            let promises = Promise.all(aux).then((e)=>e);
            return promises;
        }
    }
}

const getUserFavs = async (id)=>{
    if (!id) throw new Error(`Invalid or missing Id.`);
    try {
        const user = await User.findByPk(id).then((data)=>data.dataValues).catch(()=>{});
        if (!user) throw new Error(`We found no user with that Id.`);
        const info = await Fav.findAll({where: {UserId: user.id}});
        const aux = await info.map(async(e)=>{
            const pokemon = await Pokemon.findByPk(e?.dataValues?.PokemonId, {include: [{
                model: Type,
                attributes: ["name"],
                through: {attributes: []},
            }],});
            const response = infoCleanerDb(pokemon.dataValues);
            return {
                id: e?.dataValues?.id,
                pokemon: response,
            };
        });
        let promises = Promise.all(aux).then((e)=>e);
        return promises;
    } catch (error) {
        throw error;
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
    getUserFavs,
    
};