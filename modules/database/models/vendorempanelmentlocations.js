'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VendorEmpanelmentLocations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.VendorEmpanelmentLocations.belongsTo(models.VendorEmpanelment, {
        foreignKey: 'vendor_empanelment_id',
      });
    }
  }
  VendorEmpanelmentLocations.init(
    {
      locationId: DataTypes.INTEGER,
      billToAddressId: DataTypes.STRING,
      locationClientManagerId: DataTypes.INTEGER,
      locationVendorManagerId: DataTypes.INTEGER,
      VendorEmpanelmentId: {
        type: DataTypes.INTEGER,
        field: 'vendor_empanelment_id',
        references: {
          model: {
            tableName: 'vendor_empanelment',
          },
          key: 'id',
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'VendorEmpanelmentLocations',
      tableName: 'vendor_empanelment_locations',
      underscored: true,
    }
  );
  return VendorEmpanelmentLocations;
};
