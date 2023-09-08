const { Router } = require('express');
const routerPokemon = require('./pokemons');
const routerTypes = require('./types');
const routerUser = require('./users');
const routerFavs = require('./favs');
const routerReviews = require(`./reviews`);
const { authHandler } = require('../handlers/usersHandler');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemons', routerPokemon);
router.use('/types', routerTypes); 
router.use('/users', routerUser);
router.use('/favs', routerFavs);
router.use(`/reviews`, routerReviews);

router.get('/auth', authHandler);






module.exports = router;
