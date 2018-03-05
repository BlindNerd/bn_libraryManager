'use strict';

const alphaMessage = "Sorry this column in the database does not only accepts letters.";
const numberMessage = "Sorry this column in the database does not only accepts numbers.";

module.exports = (sequelize, DataTypes) => {
  var Patrons = sequelize.define('patrons', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true
    },

    first_name: {
       type: DataTypes.STRING,
       validate: {
         notEmpty: {
           msg: 'The first name of the patron is required.'
         }
       }
    },

    last_name: {
       type: DataTypes.STRING,
       validate: {
         notEmpty: {
           msg: 'The last name of the patron is required.'
         }
       }
    },

    address: {
       type: DataTypes.STRING,
       validate: {
         notEmpty: {
           msg: 'The address of the patron is required.'
         }
       }
    },

    email: {
       type: DataTypes.STRING,
       allowNull: false,
       validate: {
          isEmail: {
            args: true,
            msg: "Sorry this column is the database is for email only"
         }
       }
    },

    library_id: {
       type: DataTypes.INTEGER,
       validate: {
         notEmpty: {
           msg: 'The library Id is required.'
         }
       }
    },

    zip_code: {
       type: DataTypes.INTEGER,
       allowNull: false,
       validate: {
          isNumeric: {
            args: true,
            msg: numberMessage
         }
       }
    }
  }, // end of define

  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Patrons;
};
