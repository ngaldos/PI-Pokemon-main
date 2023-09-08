const {addFav, getAllFavs} = require('../controllers/favsControllers');
const axios = require(`axios`);

const addFavHandler = async (req, res)=>{
    const {id, pokeId} = req.body;
    if (!id || !pokeId) res.status(400).send(`Inputs wrong or missing.`);
    else{
        try {
            const response = await addFav(id, pokeId);
            res.status(200).json(response);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

const getFavsHandler = async (req, res)=>{
    try {
        const response = await getAllFavs();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send(error.message);   
    }
}
/*
const getUserFavsHandler = async (req, res)=>{

}

const deleteFavHandler = async (req, res)=>{

}
*/

module.exports = {
    addFavHandler,
    getFavsHandler,
    //getUserFavsHandler,
    //deleteFavHandler,

};