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
            set(value){
                this.setDataValue("name", value.toLowerCase());
            }
        },
        lastName:{
            type: DataTypes.STRING(50),
            allowNull: false,
            set(value){
                this.setDataValue("lastName", value.toLowerCase());
            }
        },
        mail:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            set(value){
                this.setDataValue("mail", value.toLowerCase());
            },
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