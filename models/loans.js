'use strict';


const alphaMessage = "Sorry this column in the database does not only accepts letters.";
const numberMessage = "Sorry this column in the database does not only accepts numbers.";
const dateMessage = "Sorry this column in this database only accepts dates.";

module.exports = (sequelize, DataTypes) => {
  var Loans = sequelize.define('loans', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: false
    },
    book_id: {
       type: DataTypes.INTEGER
    },

    patron_id: {
       type: DataTypes.INTEGER
    },

    loaned_on: {
       type: DataTypes.DATEONLY,
       validate: {
         notEmpty: {
           msg: 'The loaned on date is required is a date format ie yyyy-mm-dd.'
         }
       }
    },

    return_by: {
       type: DataTypes.DATEONLY
    },

    returned_on: {
       type: DataTypes.STRING,
      defaultValue: 'Not Returned'

    }
});
// Class Method
Loans.associate = function(models) {
    Loans.belongsTo(models.books, {foreignKey: 'book_id'});
    Loans.belongsTo(models.patrons, {foreignKey: 'patron_id'})
};
 return Loans;
};
