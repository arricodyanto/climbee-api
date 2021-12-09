'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    order.init({
        id_user: DataTypes.INTEGER,
        id_product: DataTypes.INTEGER,
        price: DataTypes.INTEGER,
        discount: DataTypes.INTEGER,
        total_order: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Order',
        underscored: true,
    });
    return order;
};