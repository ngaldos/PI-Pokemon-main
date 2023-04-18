const axios = require('axios');
const {Router} = require('express');
const {createPokemonHandler, getPokemonsHandler, getPokemonByIdHandler, getPokemonByNameHandler} = require ('../handlers/pokemonsHandler.js');

//const  = pokemonsHandler;
const router= Router();

router.get('/', getPokemonsHandler);

router.get('/:id', getPokemonByIdHandler);


router.post('/', createPokemonHandler);

module.exports = router;