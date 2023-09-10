const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// Create a new Sequelize model for category
class Category extends Model { }

Category.init(
  {
    //TODO:define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
