const {Router} = require('express');
const {createUserHandler, getUsersHandler, getUserByIdHandler} = require('../handlers/usersHandler');


const router = Router();
router.post('/', createUserHandler);
router.get('/', getUsersHandler);
router.get('/:id', getUserByIdHandler);

module.exports = router;