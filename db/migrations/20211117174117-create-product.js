'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('products', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            category: {
                type: Sequelize.STRING
            },
            size: {
                type: Sequelize.STRING
            },
            price: {
                type: Sequelize.INTEGER
            },
            stock: {
                type: Sequelize.INTEGER
            },
            dimension: {
                type: Sequelize.STRING
            },
            weight: {
                type: Sequelize.INTEGER
            },
            image: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('products');
    }
};