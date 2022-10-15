const { DataTypes, Model } = require("sequelize")
const bcrypt = require("bcrypt");
const InvalidEncryptException = require("../exceptions/InvalidEncryptPassword");
const sequelize = require('../../connection').sequelize

class User extends Model {
  validPassword(password) {
    return bcrypt.compare(password, this.password);
  }

  static async attempt(email, password) {
    const user = await User.findOne({ where: { email } })

    if (!(await user.validPassword(password))) {
      throw new Exception('failed')
    }

    return user
  }

}

User.init({
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  // Model attributes are defined here
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  emailVerifiedAt: {
    type: "TIMESTAMP"
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User', // We need to choose the model name
  tableName: "users"
});

User.beforeCreate((user, options) => {
  return bcrypt.hash(user.password, bcrypt.genSaltSync(8))
    .then(hash => {
      user.password = hash;
    })
    .catch(err => {
      throw new InvalidEncryptException();
    });
});

User.beforeUpdate((user, options) => {
  return bcrypt.hash(user.password, bcrypt.genSaltSync(8))
    .then(hash => {
      user.password = hash;
    })
    .catch(err => {
      throw new InvalidEncryptException();
    });
});


module.exports = User