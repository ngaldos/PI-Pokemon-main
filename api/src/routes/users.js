const {Router} = require('express');
const {createUserHandler, getUsersHandler, getUserByIdHandler, authHandler} = require('../handlers/usersHandler');


const router = Router();
router.post('/', createUserHandler);
router.get('/', getUsersHandler);
//router.get('/:id', getUserByIdHandler);
router.get('/auth', authHandler);

module.exports = router;