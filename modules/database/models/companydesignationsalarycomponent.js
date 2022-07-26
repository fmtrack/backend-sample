'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CompanyDesignationSalaryComponent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CompanyDesignationSalaryComponent.init(
    {
      companySalaryStructureComponentValue: DataTypes.STRING,
      companDesignationSalaryId: {
        type: DataTypes.INTEGER,
        field: 'company_designation_salary_id',
        references: {
          model: {
            tableName: 'company_designation_salary',
          },
          key: 'id',
        },
      },
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
    },
    {
      sequelize,
      modelName: 'CompanyDesignationSalaryComponent',
      tableName: 'company_designation_salary_component',
      underscored: true,
    }
  );
  return CompanyDesignationSalaryComponent;
};
