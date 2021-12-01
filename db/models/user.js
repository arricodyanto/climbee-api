'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class user extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    user.init({
        username: DataTypes.STRING,
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING,
        image: DataTypes.STRING,
        phone: DataTypes.STRING,
        address: DataTypes.STRING,
        district: DataTypes.STRING,
        city: DataTypes.STRING,
        province: DataTypes.STRING,
        postal_code: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
        underscored: true,
    });
    return user;
};