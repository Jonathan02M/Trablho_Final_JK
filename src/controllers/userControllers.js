const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");


const userController = {
  async criaruser(name, email, password){
    if (
        nome === undefined ||
        email === undefined ||
        password === undefined
      ) {
        throw new Error("Preencha todos os campos obrigatórios");
      }
        const user = await User.findOne({ where: { email } });
        if (user) {
          throw new Error("Email já cadastrado");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
          name,
          email,
          password: hashedPassword,
        });
        const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        return {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          token,
        };
  }
}
  module.exports = userController;