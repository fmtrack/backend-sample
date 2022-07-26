'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeeSalary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EmployeeSalary.init(
    {
      employementType: DataTypes.STRING,
      ctcValue: DataTypes.STRING,
      isActive: DataTypes.BOOLEAN,
      startDate: DataTypes.STRING,
      endDate: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      employeeId: {
        type: DataTypes.INTEGER,
        field: 'employee_details_id',
        references: {
          model: {
            tableName: 'employee_details',
          },
          key: 'id',
        },
      },
      salaryStructureCompanyId: {
        type: DataTypes.INTEGER,
        field: 'salary_structure_company_id',
        references: {
          model: {
            tableName: 'salary_structure_company',
          },
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'EmployeeSalary',
      tableName: 'employee_salary',
      underscored: true,
    }
  );
  return EmployeeSalary;
};
