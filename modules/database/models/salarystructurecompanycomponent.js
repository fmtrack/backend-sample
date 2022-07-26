'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SalaryStructureCompanyComponent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SalaryStructureCompanyComponent.init(
    {
      componentFormula: DataTypes.STRING,
      salaryComponentId: {
        type: DataTypes.INTEGER,
        field: 'salary_component_id',
        references: {
          model: {
            tableName: 'salary_component',
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
      modelName: 'SalaryStructureCompanyComponent',
      tableName: 'salary_structure_company_component',
      underscored: true,
    }
  );
  return SalaryStructureCompanyComponent;
};
