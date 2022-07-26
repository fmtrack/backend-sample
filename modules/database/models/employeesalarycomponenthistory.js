'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeeSalaryComponentHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EmployeeSalaryComponentHistory.init(
    {
      companySalaryStructureComponentValue: DataTypes.STRING,
      salaryStructureCompanyComponentId: {
        type: DataTypes.INTEGER,
        field: 'salary_structure_company_component_id',
        references: {
          model: {
            tableName: 'salary_structure_company_component',
          },
          key: 'id',
        },
      },
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
      modelName: 'EmployeeSalaryComponentHistory',
      tableName: 'employee_salary_component_history',
      underscored: true,
    }
  );
  return EmployeeSalaryComponentHistory;
};
