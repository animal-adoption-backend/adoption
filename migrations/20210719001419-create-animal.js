'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Animals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      animalName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      animalSpecies: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      animalBreed: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      animalAge: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      animalGender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      animalStory: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      animalPhoto: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId: {
        type: Sequelize.INTEGER,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Animals');
  }
};