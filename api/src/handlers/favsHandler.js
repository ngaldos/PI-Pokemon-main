const {addFav, getAllFavs, getFavs, deleteFav} = require('../controllers/favsControllers');
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
        const {mail} = req.body;
        if (!mail){
            const response = await getAllFavs();
            res.status(200).json(response);
        }else{
            const response = await getFavs(mail);
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(500).send(error.message);   
    }
}

const deleteFavHandler = async (req, res)=>{
    const {id} = req.body;
    if (!id) res.status(400).send(`Invalid or missing ID.`);
    else{
        try {
            const response = await deleteFav(id);
            res.status(200).json(response);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}


module.exports = {
    addFavHandler,
    getFavsHandler,
    //getUserFavsHandler,
    deleteFavHandler,

};