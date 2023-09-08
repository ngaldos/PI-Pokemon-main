const {createReview, getReviews, getUserReviews } = require(`../controllers/reviewsControllers`);

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
    const {mail} = req.body;
    try {
        if (!mail){
            const response = await getReviews();
            res.status(200).json(response);
        }else{
            const response = await getUserReviews(mail);
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }

}

const getUserReviewsHandler = async (req, res)=>{
    const {mail} = req.body;
    if (!mail) res.status(400).send(`Invalid or missing Email.`);
    else{
        try {
            const response = await getUserReviews(mail);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}

module.exports = {
    createReviewHandler,
    getReviewsHandler,
    getUserReviewsHandler,

};