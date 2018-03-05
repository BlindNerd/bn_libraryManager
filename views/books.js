'use strict';

const alphaMessage = "Sorry this column in the database does not only accepts letters.";
const numberMessage = "Sorry this column in the database does not only accepts numbers.";

module.exports = (sequelize, DataTypes) => {
  var Books = sequelize.define('books', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

    author: {
      type: DataTypes.STRING,
      allowNull: false
    },

    genre: {
      type: DataTypes.STRING,
      allowNull: false
    },

    first_published: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },// end of define

  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Books;
};
