const express = require("express");
const { Item } = require("../../db/models");
const itemRouter = express.Router();

itemRouter.route("/").get(async (req, res) => {
  try {
    const items = await Item.findAll();
    res.status(200).json(items);
  } catch (e) {
    console.log(e);
  }
});

itemRouter.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findOne({ where: { id } });
    res.status(200).json(item);
  } catch (e) {
    console.log(e);
  }
});

module.exports = itemRouter;

itemRouter.route("/:categoryId").get(async (req, res) => {
  const { categoryId } = req.params;
  try {
    const itemsOfCategories = await Item.findAll({ where: { categoryId } });
    res.status(200).json(itemsOfCategories);
  } catch (e) {
    console.log(e);
  }
});
