const {Type} = require('../db');

const createTypeDB = async (name)=>{
    if (!name){
        throw new Error('The key -- NAME -- is undefined.');
    }else{
        const newType = await Type.create({name});
        return newType
    }
}
const getTypeDB = async ()=>{
    return 0;
}

module.exports = { createTypeDB, getTypeDB};