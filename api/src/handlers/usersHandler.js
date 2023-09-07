const {createUser, getUsers, getUser} = require('../controllers/userControllers');


const createUserHandler = async (req, res)=>{
    const {name, lastName, mail, password} = req.body;
    if (!!name && !!lastName && !!mail && !!password){
        try {
            const response = await createUser(name, lastName, mail, password);
            res.status(200).json(response);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }else{
        res.status(400).send('Some inputs are wrong or missing.');
    }
}

const getUsersHandler = async (req, res)=>{
    const {mail} = req.query;
    if (!mail){
        try {
            const response = await getUsers();
            res.status(200).json(response);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }else{
        try {
            const response = await getUser(mail);
            res.status(200).json(response);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

const getUserHandler = async (req, res)=>{
    const {mail} = req.body;
    if (!!mail){
        res.status(400).send('The mail is missing or invalid');
    }else{
        try {
            const response = await getUser(mail);
            res.status(200).json(response);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = {createUserHandler, getUsersHandler, getUserHandler};