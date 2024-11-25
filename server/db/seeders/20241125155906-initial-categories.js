"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories", [
      {
        name: "Футболки",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Шапки",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Худи",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
