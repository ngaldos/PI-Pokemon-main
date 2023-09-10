const {Review, User, Pokemon, Type} = require(`../db`);
const axios = require(`axios`);


const createReview = async (mail, poke, score)=>{
    if (!mail || !poke || !score) throw new Error(`Some inputs are wrong or missing.`);
    else{
        const auxUser = await User.findOne({where: {mail}});
        if (!mail) throw new Error(`Invalid User Email.`);
        
        const pokemon = await Pokemon.findByPk(poke);
        if (!pokemon) throw new Error(`Invalid pokemon ID.`);

        const response = await Review.create({score});
        await response.setUser(auxUser);
        await response.setPokemon(pokemon);
        return response;
    }
}

const infoCleanerDb = async (info)=>{
    const mappedInfo = await info.map(async (e)=>{
        const user = await User.findByPk(e.UserId);
        return {
            id: e?.dataValues?.id,
            score: e?.dataValues?.score,
            PokemonId: e?.dataValues?.PokemonId,
            user: {
                name: user?.dataValues?.name,
                lastName: user?.dataValues?.lastName,
            },
        };
    });
    let promises = Promise.all(mappedInfo).then((e)=>e);
    return promises;
}

const getReviews = async ()=>{

    const aux = await Review.findAll();
    const response = await infoCleanerDb(aux);
    return response;
}

const getUserReviewsById = async (id)=>{
    if (!id) throw new Error(`Invalid or missing ID.`);
    else{
        const aux = await Review.findAll({where: {UserId: id}});
        const response = await infoCleanerDb(aux);
        return response;
    }
}

const getUserReviews = async (mail)=>{
    if (!mail) throw new Error(`Invalid or missing Email.`);
    else{
        const user = await User.findOne({where: {mail}});
        if (!user) throw new Error(`No user was found with that Email.`);

        const aux = await Review.findAll({where: {UserId: user.id}});
        if (!aux) throw new Error(`No review was found for that User.`);
        const response = await infoCleanerDb(aux);
        return response;
    }
}
const getPokemonReviews = async (id)=>{
    const aux = await Review.findAll({where: {PokemonId: id}});
    if (!aux) throw new Error(`No pokemon was found with that ID in our DataBase.`);
    else{
        const response = await infoCleanerDb(aux);
        return response;
    }
}

const deleteReview = async (id)=>{
    const response = await Review.findByPk(id);
    const aux = Review.destroy({where: {id: response.id}});
    return response;
}

module.exports = {
    createReview,
    getReviews,
    getUserReviews,
    getPokemonReviews,
    deleteReview,
    getUserReviewsById,

};