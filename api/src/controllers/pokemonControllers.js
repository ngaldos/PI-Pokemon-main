const {Pokemon, Type, Review} = require('../db');
const axios = require('axios');
//const { ULR_BASE } = Process.env;
const URL_BASE = "http://localhost:3001/";

const {getPokemonReviewsProm} = require(`./reviewsControllers`);

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
                const newTypes= await Type.findAll( {where: {name: types}} );
                await newPokemon.addTypes(newTypes);
                return newPokemon.dataValues;
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

const deletePokemon = async (id)=>{
    if (!id) throw new Error(`Invalid or missing ID.`);
    const aux = await Review.findAll({where: {PokemonId : id}}).then((data)=> data.map((e)=>e.destroy()));
    const response = await Pokemon.findByPk(id);
    if (response !== null){
        response.destroy();
        return true;
    }else 
        return false;
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

const infoCleanerDb = (poke)=>{
    return  {
        id: poke?.id,
        name: poke?.name,
        img: poke?.img,
        health: poke?.health,
        attack: poke?.attack,
        defense: poke?.defense,
        speed: poke?.speed,
        height: poke?.height,
        weight: poke?.weight,
        types: poke.Types.map((e)=>e.dataValues.name),
    };
}

const getPokemonByName = async (name)=>{
    const pokeAux = await Pokemon.findOne({include: [{
            model: Type,
            attributes: ["name"],
            through: {attributes: []}
        }],
        where: {name: name},
    }).then((data)=>{
        if (data !== null) return data.dataValues;
        else return data})
    .catch(()=>{});

    let pokeDb = false;
    if (pokeAux !== null){
        pokeDb = infoCleanerDb(pokeAux)
    }
    const pokeApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((data)=> infoCleaner(data.data)).catch(()=>{});
    
    if ( (!!pokeApi) && (!!pokeDb) )    return [pokeDb, pokeApi];
    else    if (!!pokeApi) return [pokeApi];
    else    if (!!pokeDb) return [pokeDb];
    else   throw new Error('The Pokemon dosent exist');
}

const getPokemonById = async (id)=>{
    if (isNaN(id)){
        const pokeAux = await Pokemon.findByPk(id, {include: [{
            model: Type,
            attributes: ["name"],
            through: {attributes: []}
        }]})
        .then((data)=>{
            if (data !== null) 
                return data.dataValues;
            else 
                return data});

        let pokeDb = false;
        if (pokeAux !== null){
            pokeDb = infoCleanerDb(pokeAux);
            const reviews = await Review.findOne({where: {PokemonId: pokeDb.id}});
            if (!!reviews){
                const prom = await getPokemonReviewsProm(pokeDb.id);
                pokeDb = {...pokeDb, prom: prom};
            }
        }
        return pokeDb;
    }else{
        const pokemonApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((data)=>infoCleaner(data.data));
        return pokemonApi;
    }
}




module.exports= {createPokemonDB, getPokemonById, getPokemons, getPokemonByName, deletePokemon, infoCleanerDb};