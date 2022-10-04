const { DataTypes, Model } = require("sequelize");
const sequelize = require('../../connection').sequelize

class User extends Model {

}

User.init({
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  // Model attributes are defined here
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User', // We need to choose the model name
  tableName: "users"
});

module.exports = User