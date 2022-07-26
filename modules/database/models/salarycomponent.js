'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SalaryComponent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SalaryComponent.init(
    {
      componentName: DataTypes.STRING,
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
      modelName: 'SalaryComponent',
      tableName: 'salary_component',
      underscored: true,
    }
  );
  return SalaryComponent;
};
