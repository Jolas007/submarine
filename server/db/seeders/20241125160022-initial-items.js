"use strict";

const category = require("../models/category");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Items", [
      {
        name: "Футболка",
        price: 1000,
        size: "L",
        description: "Очень красивая",
        categoryId: 1,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Шапка",
        price: 2000,
        size: "M",
        description: "Очень красивая",
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Худи",
        price: 3000,
        size: "S",
        description: "Очень красивая",
        categoryId: 2,
        image: "",
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
