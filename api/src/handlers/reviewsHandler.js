const {createReview, getReviews, getUserReviews, deleteReview, getPokemonReviews } = require(`../controllers/reviewsControllers`);

const createReviewHandler = async (req, res)=>{
    const {mail, poke, score} = req.body;
    if (!mail || !poke || !score) res.status(400).send(`Some inputs are invalid or missing.`);
    else{
        try {
            const response = await createReview(mail, poke, score);
            res.status(200).json(response);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

const getReviewsHandler = async (req, res)=>{
    const {mail, id} = req.body;
    try {
        if (!mail && !id){
            const response = await getReviews();
            res.status(200).json(response);
        }else{
            if (mail){
                const response = await getUserReviews(mail);
                res.status(200).json(response);
            }
            if (id){
                const response = await getPokemonReviews(id);
                res.status(200).json(response);
            }
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteReviewHandler = async (req, res) =>{
    const {id} = req.body;
    if (!id) res.status(400).send(`Invalid or missing ID.`);
    else{
        try {
            const response = await deleteReview(id);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}

module.exports = {
    createReviewHandler,
    getReviewsHandler,
    deleteReviewHandler,

};