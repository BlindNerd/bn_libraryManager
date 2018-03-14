'use strict';


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
           msg: 'The first name of the patron is required. Please click the back button to fix.'
         }
       }
    },

    last_name: {
       type: DataTypes.STRING,
       validate: {
         notEmpty: {
           msg: 'The last name of the patron is required. Please click the back button to fix.'
         }
       }
    },

    address: {
       type: DataTypes.STRING,
       validate: {
         notEmpty: {
           msg: 'The address of the patron is required. Please click the back button to fix.'
         }
       }
    },

    email: {
       type: DataTypes.STRING,
       allowNull: false,
       validate: {
          isEmail: {
            args: true,
            msg: "Sorry this column is the database is for email only. Please click the back button to fix."
         }
       }
    },

    library_id: {
       type: DataTypes.INTEGER,
       validate: {
         notEmpty: {
           msg: 'The library Id is required. Please click the back button to fix.'
         }
       }
    },

    zip_code: {
       type: DataTypes.INTEGER,
       allowNull: false,
       validate: {
          isNumeric: {
            args: true,
            msg: 'Sorry the zip code is required. Please click the back button to fix.'
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
