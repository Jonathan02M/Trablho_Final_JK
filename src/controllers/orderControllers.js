const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const order = require("../models/order");

class OrderController {
  async createOrder(user_id, product_id) {
    if (user_id === undefined 
        || product_id === undefined) 
        {
      throw new Error("Preencha todos os campos obrigatórios");
    }
    const newOrder = await order.create({
      user_id,
      product_id,
    });
    return {
      id: newOrder.id,
      user_id: newOrder.user_id,
      product_id: newOrder.product_id,
    };
  }
  
}
module.exports = new OrderController();