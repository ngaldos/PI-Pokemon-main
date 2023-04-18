const { createTypeDB, getTypeDB, getTypes } = require('../controllers/typesControllers');

const createTypeHandler = async (req, res)=>{
    const {name} = req.body;
    try{
        const response= await createTypeDB(name);
        res.status(200).json(response);
    }catch(error){
        res.status(400).json({error: error.message});    
    }
}

const getTypeHandler = async (req, res)=>{
    try{
        const types =  await getTypes();
        res.status(200).json(types);
    }catch(error){
        res.status(400).json({error: error.message});    
    }
}

module.exports= {createTypeHandler, getTypeHandler};