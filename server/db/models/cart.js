"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Item }) {
      this.belongsTo(User, { foreignKey: "userId" });
      this.belongsTo(Item, { foreignKey: "cartItem" });
    }
  }
  Cart.init(
    {
      userId: DataTypes.INTEGER,
      cartItem: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );
  return Cart;
};
