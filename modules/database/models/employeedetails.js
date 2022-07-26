'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeeDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.EmployeeDetails.belongsTo(models.User, {
        as: 'employee',
        foreignKey: 'users_id',
      });

      models.EmployeeDetails.hasOne(models.OnRollEmployment, {
        as: 'employeeOnrollment',
        foreignKey: 'employee_details_id',
      });
      models.EmployeeDetails.hasOne(models.OffRollEmployment, {
        as: 'employeeOffrollment',
        foreignKey: 'employee_details_id',
      });

      // models.EmployeeDetails.hasMany(models.OffRollEmployment, {
      //   as: 'addresses',
      //   foreignKey: 'employee_id',
      // });
    }
  }
  EmployeeDetails.init(
    {
      education: DataTypes.STRING,
      gender: DataTypes.STRING,
      employementType: DataTypes.STRING,
      bloodGroup: DataTypes.STRING,
      emergencyContact: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        field: 'users_id',
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id',
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'EmployeeDetails',
      tableName: 'employee_details',
    }
  );
  return EmployeeDetails;
};
