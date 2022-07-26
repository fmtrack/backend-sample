'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CompanyDesignationSalary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CompanyDesignationSalary.init(
    {
      ctcValue: DataTypes.STRING,
      companyId: {
        type: DataTypes.INTEGER,
        field: 'entity_id',
        references: {
          model: {
            tableName: 'entity',
          },
          key: 'id',
        },
      },

      designationId: {
        type: DataTypes.INTEGER,
        field: 'designations_id',
        references: {
          model: {
            tableName: 'designations',
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
      modelName: 'CompanyDesignationSalary',
      tableName: 'company_designation_salary',
      underscored: true,
    }
  );
  return CompanyDesignationSalary;
};
