"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cart }) {
      this.hasMany(Cart, { foreignKey: "cartId" });
    }
  }
  Item.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      size: DataTypes.STRING,
      description: DataTypes.TEXT,
      categoryId: DataTypes.INTEGER,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
