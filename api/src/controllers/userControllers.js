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
        const response = await User.findByPk(id);
        return response.dataValues;
    }else   throw new Error('No user found with that ID.');
}

const auth = async (mail, password)=>{
    try {
        const response = await User.findOne({where: {mail , password}})
        if (!response) return false;
        else return true;
    } catch (error) {
        const aux = await User.findOne({where: {mail}});
        if (!aux) throw new Error(`The email was wrong.`);
        else throw new Error(`The password didn't matched with the Email provided.`);
    }

}

module.exports = {createUser,
    getUsers,
    getUser,
    getUserById,
    auth,
    deleteUser,
};