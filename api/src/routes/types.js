const { Router } = require('express');
const {createTypeHandler, getTypeHandler} = require('../handlers/typesHandler');


const router = Router();
router.post('/', createTypeHandler);
router.get('/', getTypeHandler);
//router.get('/', );


module.exports = router;