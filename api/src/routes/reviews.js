const {Router} = require(`express`);
const {createReviewHandler, getReviewsHandler, deleteReviewHandler} = require(`../handlers/reviewsHandler`);
const router= Router();

router.post(`/`, createReviewHandler);
router.get(`/`, getReviewsHandler);
router.delete(`/`, deleteReviewHandler);

module.exports = router;