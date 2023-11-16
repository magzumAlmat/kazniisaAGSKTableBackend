'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Banners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bannerNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      banerAddress: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      imageUrl: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      uniqueCode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdDate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      rentDays: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      expiredDate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bannerLongitude: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bannerLatitude: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      CompanyId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Companies', // Здесь укажите имя таблицы, связанной с Company
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Banners');
  },
};
