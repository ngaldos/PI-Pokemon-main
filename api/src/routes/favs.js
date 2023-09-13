const {Router} = require('express');
const {addFavHandler,
     getUserFavsHandler,
      deleteFavHandler,
      getFavsHandler,

    } = require('../handlers/favsHandler');

const router = Router();

router.post('/', addFavHandler);
router.get(`/`, getFavsHandler);
router.get('/:id', getUserFavsHandler);
router.delete('/', deleteFavHandler);

module.exports = router;