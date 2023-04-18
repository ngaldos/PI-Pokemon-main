const axios = require('axios');

const findPokemonByName = async (name)=>{
    try{
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).data;
        return (pokemon);
    }catch{
        res.status(400).send('Algo salio mal');
    }
}

module.exports = findPokemonByName;