const {createUser, getUsers, getUser, getUserById, auth, deleteUser} = require('../controllers/userControllers');


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

const getUserByIdHandler = async (req, res)=>{
    const {id} = req.params;
    if (!id)    res.status(400).send('Invalid ID.');
    else{
        try {
            const response = await getUserById(id);
            res.status(200).json(response);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

const authHandler = async (req, res)=>{
    console.log('HOLA');
    const {mail, password} = req.body;
    if (!mail || !password) res.status(400).send('Wrong or missing inputs.');
    else{
        try {
            console.log('Hasta aca 1');
            const response = await auth(mail, password);
            console.log(response);
            if (response)   res.status(200).send('Mail and password matched correctly.');
            else    res.status(400).send(`Mail and password doesn't match.`);
        } catch (error) {
            res.status(500).send(error.message);    
        }
    }
}

const deleteUserHandler = async (req, res)=>{
    const {mail} = req.body;
    if (!mail) res.status(400).send(`Mail wrong or missing.`);
    else{
        try {
            const response = await deleteUser(mail);
            res.status(200).json(response);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = {createUserHandler,
    getUsersHandler,
    getUserHandler,
    getUserByIdHandler,
    authHandler,
    deleteUserHandler,
    };