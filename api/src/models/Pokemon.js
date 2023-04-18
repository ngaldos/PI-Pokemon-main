const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      len: [2, 30]
    },
    img: {
      type: DataTypes.STRING,
      isUrl: true,
      unique: true,
      allowNull: false,
    },
    health: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    attack: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    defense: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    speed: {
      type: DataTypes.REAL,
    },
    size: {
      type: DataTypes.REAL,
    },
    weight: {
      type: DataTypes.REAL,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      foreingKey: true,
    }
  },{timestamps : false});
};
