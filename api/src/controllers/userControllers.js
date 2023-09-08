const {User} = require('../db');
const axios = require('axios');

const deleteUser = async (mail)=>{
    if (!mail) throw new Error(`Mail invalid or missing.`);
    else{
        const aux = await User.findOne({where: {mail}});
        const response = await User.destroy({where: {mail}});
        return aux;
    }
}

const createUser = async (name, lastName, mail, password)=>{
    if (!name || !lastName || !mail || !password){
        throw new Error('Some inputs are wrong or missing.');
    }else{
        const newUser = await User.create({name, lastName, mail, password});
        return newUser;
    }
}

const getUsers = async ()=>{
    const response = await User.findAll();
    return response;
}

const getUser = async (mail)=>{
    const response = await User.findOne({where: {mail}});
    return response.dataValues
}

const getUserById = async (id)=>{
    if (isNaN(id)){
        const response = await User.findOne({where: {id}});
        return response.dataValues;
    }else   throw new Error('No user found with that ID.');
}

const auth = async (mail, password)=>{
    try {
        console.log('Dentro del CTRL');
        const response = await User.findOne({where: {mail: mail}}).then((data)=>data.dataValues);
        console.log(`ACA 2`);
        if ( (response.mail == mail) && (response.password == password) ){
            return true;
        }else
            return false;
    } catch (error) {
        throw new Error(`The mail wasn't found.`);
    }

}

module.exports = {createUser,
    getUsers,
    getUser,
    getUserById,
    auth,
    deleteUser,
};