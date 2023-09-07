const {User} = require('../db');
const axios = require('axios');

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

module.exports = {createUser, getUsers, getUser};