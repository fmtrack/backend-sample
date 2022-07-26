'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EmployeeSalaries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      employementType: {
        type: Sequelize.STRING
      },
      ctcValue: {
        type: Sequelize.STRING
      },
      isActive: {
        type: Sequelize.BOOLEAN
      },
      startDate: {
        type: Sequelize.STRING
      },
      endDate: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER
      },
      employemetId: {
        type: Sequelize.INTEGER
      },
      salaryStructureCompanyId: {
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
    await queryInterface.dropTable('EmployeeSalaries');
  }
};