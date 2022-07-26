'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SalaryStructureDefault extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SalaryStructureDefault.init(
    {
      structureName: DataTypes.STRING,
      countryId: {
        type: DataTypes.INTEGER,
        field: 'country_id',
        references: {
          model: {
            tableName: 'countries',
          },
          key: 'id',
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'SalaryStructureDefault',
      tableName: 'salary_structure_default',
      underscored: true,
    }
  );
  return SalaryStructureDefault;
};
