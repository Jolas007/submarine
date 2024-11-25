const express = require("express");
const { Category } = require("../../db/models");
const categoryRouter = express.Router();

categoryRouter.route("/").get(async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

categoryRouter.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  try {
    const categories = await findAll({ where: { id } });
    res.status(200).json(categories);
  } catch (error) {}
});

module.exports = categoryRouter;
