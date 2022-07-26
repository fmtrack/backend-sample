'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SalaryStructureCompany extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SalaryStructureCompany.init(
    {
      structureName: DataTypes.STRING,
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
    },
    {
      sequelize,
      modelName: 'SalaryStructureCompany',
      tableName: 'salary_structure_company',
      underscored: true,
    }
  );
  return SalaryStructureCompany;
};
