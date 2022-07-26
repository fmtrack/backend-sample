'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CompanyDesignationSalaryComponents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      companySalaryStructureComponentValue: {
        type: Sequelize.STRING
      },
      companDesignationSalaryId: {
        type: Sequelize.INTEGER
      },
      companySalaryStructureComponentId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CompanyDesignationSalaryComponents');
  }
};