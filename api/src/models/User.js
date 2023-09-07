const {DataTypes, Sequelize} = require('sequelize');
const User = (sequelize)=>{
    sequelize.define('User', {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
        },
        name:{
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        lastName:{
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        mail:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    }, {timestamps: false});
}
module.exports = {User};