const {Router} = require('express');
const {createUserHandler, getUsersHandler} = require('../handlers/usersHandler');


const router = Router();
router.post('/', createUserHandler);
router.get('/', getUsersHandler);
