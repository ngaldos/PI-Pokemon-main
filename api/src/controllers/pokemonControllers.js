const {Pokemon, Types} = require('../db');
const axios = require('axios');
//const { ULR_BASE } = Process.env;

const createPokemonDB = async (name, img, health, attack, defense, speed, size, weight, type, height)=>{
    const newPokemon =  await Pokemon.create({name, img, health, attack, defense, speed, size, weight, type, height});
    //newPokemon.addTypes(type);
    return newPokemon;
}
/*
try {
        let { name, life, attack, defense, speed, height, weight, image,types} = req.body; // atributos desde el modelo
        const pokeDb = await Pokemon.findOne({ where:{ name: name }, include: Type})
        if (!name) return res.status(404).send("Name is required");
        !life ? life = 1 : life; 
        !attack ? attack = 1 : attack; 
        !defense ? defense = 1 : defense;
        !speed ? speed = 1 : speed; 
        !height ? height = 1 : height; 
        !weight ? weight = 1 : weight;
        !types.length ? types = [] : types;
        if(pokeDb) return res.status(404).send("Pokemon already exists");
        const nameLower = name.toLowerCase();
        const typesLower = types?.map((type) => type.toLowerCase());
        const create = await Pokemon.create({name : nameLower,life,attack, defense, speed, height, weight,image});
        const pokeType = await Type.findAll({where:{name: typesLower}});
        create.addType(pokeType);
        res.status(201).send({msg: "Pokemon successfully created"}); 
    } catch (error) {
        res.status(404).send({error: error.message});
    }
*/



const getPokemons = async ()=>{
    const info = await axios.get(`https://pokeapi.co/api/v2/pokemon`).then(data=>data.data.results)
    const pokeDb = await Pokemon.findAll();
    try{
        const coso = info.map((e)=>axios.get(e.url))
        let promesas = Promise.all(coso)
        .then(e=>{
            const pokemon = e.map(p=> p.data)
            const array= [];
            pokemon.forEach((p)=>{
                array.push({
                    id: p.id,
                    name: p.name,
                    img: p.sprites.other.home.front_default,
                    health: p.stats[0].base_stat,
                    attack: p.stats[1].base_stat,
                    defense: p.stats[2].base_stat,
                    speed: p.stats[5].base_stat,
                    height: p.height,
                    weight: p.weight,
                });
            });
                //array.push(...pokeDb);
                return [...pokeDb, ...array];
        })
        return promesas;
    }catch(error){
       throw new Error('Error getting all pokemons');
    }
}

const infoCleaner = (p)=>{
    return ({
                id: p.id,
                name: p.name,
                img: p.sprites.other.home.front_default,
                health: p.stats[0].base_stat,
                attack: p.stats[1].base_stat,
                defense: p.stats[2].base_stat,
                speed: p.stats[5].base_stat,
                height: p.height,
                weight: p.weight,
            });
}

const getPokemonById = async (id, src)=>{
    if (src === 'api'){
        try{
            return infoCleaner(await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(data=>data.data));
        }catch (error) {throw new Error('Invalid ID {CTRL}')}
        }else{
            if (src === 'all'){ // ID es una query
                const pokeAPI = infoCleaner (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((data)=>data.data));
                try{
                    //const pokeDb= await Pokemon.findOne({ where:{ name: id }});
                    const pokeDb= await Pokemon.findOne({
                        where: {name: id}
                    });
                    if (pokeAPI && pokeDb){
                        console.log('1');
                        return [pokeDb, pokeAPI];
                    }
                    if (pokeAPI && !pokeDb){
                        console.log('2');
                        return pokeAPI
                    }
                    if (pokeDb){
                        console.log('3');
                        return pokeDb.dataValues;
                    }else console.log('wtf');
                    
                }catch(error){throw new Error('Invalid ID {CTRL}')}
            }else{ // Si src ==> 'bdd' || otra cosa !== de UNDEFINED
                const p= await Pokemon.findByPk(id);
                return p;
            }
        }
}

module.exports= {createPokemonDB, getPokemonById, getPokemons};