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
      validate: {
        notEmpty: {
          msg: 'The title of the book is required.'
        }
      }
    },

    author: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'The author of the book is required.'
        }
      }
    },

    genre: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'The genre of the book is required.'
        }
      }
    },

    first_published: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'The year the book was first published is required.'
        }
      }
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
