'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SalaryStructureDefaultComponent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SalaryStructureDefaultComponent.init(
    {
      componentFormula: DataTypes.STRING,
      componentMax: DataTypes.STRING,
      componentMin: DataTypes.STRING,
      applicabilityCondition: DataTypes.STRING,
      salaryStructureDefaultId: {
        type: DataTypes.INTEGER,
        field: 'salary_structure_default_id',
        references: {
          model: {
            tableName: 'SalaryStructureDefault',
          },
          key: 'id',
        },
        allowNull: false,
      },
      salaryComponentId: {
        type: DataTypes.INTEGER,
        field: 'salary_component_id',
        references: {
          model: {
            tableName: 'SalaryComponent',
          },
          key: 'id',
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'SalaryStructureDefaultComponent',
      tableName: 'salary_structure_default_component',
      underscored: true,
    }
  );
  return SalaryStructureDefaultComponent;
};
