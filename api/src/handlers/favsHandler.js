const {addFav, getAllFavs, getFavs, deleteFav, getUserFavs} = require('../controllers/favsControllers');

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
        const {mail} = req.query;
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

const getUserFavsHandler = async (req, res)=>{
    const {id} = req.params;
    if (!id) res.status(400).send(`Invalid or missing Id.`);
    try {
        const response = await getUserFavs(id);
        res.status(200).json(response);
    } catch (error) {
        if (error.message == `We found no user with that Id.`)
            res.status(404).send(error.message)
        else
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
    getUserFavsHandler,
    deleteFavHandler,

};