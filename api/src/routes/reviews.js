const {Router} = require(`express`);
const {createReviewHandler, getReviewsHandler} = require(`../handlers/reviewsHandler`);
const router= Router();

router.post(`/`, createReviewHandler);
router.get(`/`, getReviewsHandler);

module.exports = router;