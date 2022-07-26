'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SalaryStructureDefaultComponents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      componentFormula: {
        type: Sequelize.STRING
      },
      componentMax: {
        type: Sequelize.STRING
      },
      componentMin: {
        type: Sequelize.STRING
      },
      applicabilityCondition: {
        type: Sequelize.STRING
      },
      salaryStructureDefaultId: {
        type: Sequelize.INTEGER
      },
      salaryComponentId: {
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
    await queryInterface.dropTable('SalaryStructureDefaultComponents');
  }
};