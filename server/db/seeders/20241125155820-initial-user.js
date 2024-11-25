"use strict";
const bcrypt = require("bcryptjs");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "kirill",
        email: "kirill@mail.ru",
        hashpass: bcrypt.hashSync("123", 10),
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "alex",
        email: "alex@mail.ru",
        hashpass: bcrypt.hashSync("123", 10),
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
