const {Router} = require('express');
const {createUserHandler, getUsersHandler, getUserByIdHandler, deleteUserHandler} = require('../handlers/usersHandler');


const router = Router();
router.post('/', createUserHandler);
router.get('/', getUsersHandler);
router.get('/:id', getUserByIdHandler);
router.delete('/', deleteUserHandler);

module.exports = router;