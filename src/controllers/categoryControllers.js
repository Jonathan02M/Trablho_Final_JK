const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const category = require("../models/category");

class CategoryController {
  async createCategory(name) {
    if (name === undefined) {
      throw new Error("Preencha todos os campos obrigatórios");
    }
    const newCategory = await category.create({
      name,
    });
    return {
      id: newCategory.id,
      name: newCategory.name,
    };
  }
}
module.exports = new CategoryController();