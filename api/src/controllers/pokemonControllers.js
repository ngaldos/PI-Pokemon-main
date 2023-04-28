const {Pokemon, Type} = require('../db');
const axios = require('axios');
//const { ULR_BASE } = Process.env;

const createPokemonDB = async (name, img, health, attack, defense, speed, weight, height, types)=>{
    const pokeDb= await Pokemon.findOne({where: {name: name}});
    try{
        if (pokeDb){
            throw new Error ('Pokemon already exists.');
        }else{
                if (!speed) speed= 0;
                if (!weight) weight= 0;
                if (!height) height= 0;
                const newPokemon =  await Pokemon.create({name, img, health, attack, defense, speed, weight, height});
                console.log(types);
                console.log('111111111111111111111');
                const newTypes= await Type.findAll( {where: {id: types}} );

                await newPokemon.addTypes(newTypes);
                //const xd = await Pokemon.findOne({where: {name: name}, include: {model: Type, attributes: ["name"]}, through: { attributes: []}   })
            console.log(newPokemon);
            console.log('**************************');
                return newPokemon;
            }
    }catch(error){
        if (!error.message == 'Pokemon already exists.') 
            throw new Error ('Pokemon could not be created');
    }
}



//! GET POKEMONS
    const getPokemons = async ()=>{
        
        pokeDb= await Pokemon?.findAll({include: [{
            model: Type,
            attributes: ["name"],
            through: {attributes: []}
        }]});
        pokeDb = await pokeDb.map((data)=>{
            return{
                id: data.dataValues.id,
                name: data.dataValues.name,
                img: data.dataValues.img,
                health: data.dataValues.health,
                attack: data.dataValues.attack,
                defense: data.dataValues.defense,
                speed: data.dataValues.speed,
                height: data.dataValues.height,
                weight: data.dataValues.weight,
                types: data.dataValues.Types.map((t)=>t.name)

            };
        });
        const info = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100`).then(data=>data.data.results)
        try{
            const mappedInfo = info.map((e)=>axios.get(e.url))
            let promises = Promise.all(mappedInfo)
            .then(e=>{
                const pokemon = e.map(p=> p.data)
                const array= [];
                pokemon.forEach((p)=>{
                    array.push(infoCleaner(p));
                });
                    return [...pokeDb, ...array];
            })
            return promises;
        }catch(error){
        throw new Error('Error getting all pokemons');
        }
}

const infoCleaner = (p)=>{
    return ({
                id: p?.id,
                name: p?.name,
                img: p?.sprites?.other?.home?.front_default,
                health: p?.stats?.[0]?.base_stat,
                attack: p?.stats?.[1]?.base_stat,
                defense: p?.stats?.[2]?.base_stat,
                speed: p?.stats?.[5]?.base_stat,
                height: p?.height,
                weight: p?.weight,
                types: p?.types?.map((t) => t.type.name)
            });
}

const getPokemonByName = async (name)=>{
    const pokes = (await getPokemons()).filter((e)=>e.name === name );
    if (pokes.length == 1) return pokes[0]
    else if (pokes.length !== 0) return pokes;
    else throw new Error('The Pokemon dosent exist');

}

const getPokemonById = async (id)=>{
    /*if (isNaN(id)){
        const pokemons = (await getPokemons()).filter((e)=>e.id === id);
        return pokemons[0];
    }else{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((data)=>data.data);
        response = infoCleaner(response);
        console.log(response);
    }*/
    const pokes = (await getPokemons()).filter((e)=>e.id == id );
    if (Array.isArray(pokes))   return pokes[0]
    else    return pokes;
}


module.exports= {createPokemonDB, getPokemonById, getPokemons, getPokemonByName};