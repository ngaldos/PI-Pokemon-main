const { Router } = require('express');
const {createTypeHandler, getTypeHandler} = require('../handlers/typesHandler');
const router = Router();

const routesTypes = (req, res)=>{
    router.post('/', createTypeHandler);
    router.get('/', getTypeHandler);
}

module.exports = routesTypes;