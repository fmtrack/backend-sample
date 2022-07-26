'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeeSalaryComponent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EmployeeSalaryComponent.init(
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
      employeeSalaryId: {
        type: DataTypes.INTEGER,
        field: 'employee_salary_id',
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
      modelName: 'EmployeeSalaryComponent',
      tableName: 'employee_salary_component',
      underscored: true,
    }
  );
  return EmployeeSalaryComponent;
};
