const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('User', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
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