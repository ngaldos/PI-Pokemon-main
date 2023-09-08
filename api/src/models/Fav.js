const {DataTypes} = require(`sequelize`);
module.exports = (Sequelize)=>{
    Sequelize.define(`Fav`, {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        }
    },{timestamps: false});
}