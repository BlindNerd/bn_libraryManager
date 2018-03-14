'use strict';

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
          msg: 'The title of the book is required. Please click the back button to fix.'
        }
      }
    },

    author: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'The author of the book is required. Please click the back button to fix.'
        }
      }
    },

    genre: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'The genre of the book is required. Please click the back button to fix.'
        }
      }
    },

    first_published: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'The year the book was first published is required. Please click the back button to fix.'
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
