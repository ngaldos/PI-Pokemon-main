const {DataTypes} = require(`sequelize`);
module.exports = (Sequelize)=>{
    Sequelize.define(`Review`, {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        score:{
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                min: 1,
                max: 10,
            }
        }
    }, {timestamps: false});
}