'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CompanyDesignationSalaries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ctcValue: {
        type: Sequelize.STRING
      },
      companyId: {
        type: Sequelize.INTEGER
      },
      designationId: {
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
    await queryInterface.dropTable('CompanyDesignationSalaries');
  }
};