const {Review, User, Pokemon} = require(`../db`);
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

const getReviews = async ()=>{
    const response = await Review.findAll();
    return response;
}

const getUserReviews = async (mail)=>{
    if (!mail) throw new Error(`Invalid or missing Email.`);
    else{
        const user = await User.findOne({where: {mail}});
        if (!user) throw new Error(`No user was found with that Email.`);

        const response = await Review.findAll({where: {UserId: user.id}});
        if (!response) throw new Error(`No review was found for that User.`);

        return response;
    }
}
//const getPokeReviews = async (id)=>{}

//const deleteReview = async (id)=>{}

module.exports = {
    createReview,
    getReviews,
    getUserReviews,
    //getPokeReviews,
    //deleteReview,

};