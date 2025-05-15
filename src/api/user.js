const controller = require('../controllers/usercontrollers');

class userApi {
    async criaruser(req, res) {
        const  nome = req.body.nome;
        const  email = req.body.email;
        const  senha = req.body.senha;

        try {
            const user = await controller.criaruser(nome, email, senha);
            res.status(201).json(user);
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).json({ error: 'Internal server error' });
        }   
}
}
module.exports = new userApi();