const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const product = require("../models/product");

class ProductController {
  async createProduct(name, price, category_id) {
    if (name === undefined 
        || price === undefined 
        || category_id === undefined) 
        {
      throw new Error("Preencha todos os campos obrigatórios");
    }
    const newProduct = await product.create({
      name,
      price,
      category_id,
    });
    return {
      id: newProduct.id,
      name: newProduct.name,
      price: newProduct.price,
      category_id: newProduct.category_id,
    };
  }
}
module.exports = new ProductController();