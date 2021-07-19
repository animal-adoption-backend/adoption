'use strict';
const Sequelize = require('sequelize');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class animalList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      animalList.belongsTo(models.User);
      animalList.hasMany(models.Comment);
    }
  };
  animalList.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING
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
    like: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    UserId: {
      type: Sequelize.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'animalList',
  });
  return animalList;
};