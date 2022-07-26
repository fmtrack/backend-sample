'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OnrollEmploymentHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OnrollEmploymentHistory.init(
    {
      user_id: DataTypes.INTEGER,
      onroll_employee_id: DataTypes.INTEGER,
      onroll_entity_id: DataTypes.INTEGER,
      designation: DataTypes.STRING,
      assigned_location_id: DataTypes.INTEGER,
      this_role_start_date: DataTypes.DATE,
      this_role_end_date: DataTypes.DATE,
      company_joining_date: DataTypes.DATE,
      assigned_offroll: DataTypes.STRING,
      has_resigned: DataTypes.BOOLEAN,
      resignation_date: DataTypes.DATE,
      last_working_day: DataTypes.STRING,
      added_on: DataTypes.STRING,
      employee_salary_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'OnrollEmploymentHistory',
      tableName: 'onroll_employment_history',
      underscored: true,
    }
  );
  return OnrollEmploymentHistory;
};
