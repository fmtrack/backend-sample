'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeeSalaryHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EmployeeSalaryHistory.init(
    {
      employeeOldSalaryId: {
        type: DataTypes.INTEGER,
        field: 'employee_old_salary_id',
        references: {
          model: {
            tableName: 'employee_salary',
          },
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'EmployeeSalaryHistory',
      tableName: 'employee_salary_history',
      underscored: true,
    }
  );
  return EmployeeSalaryHistory;
};
