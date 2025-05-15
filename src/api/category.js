const controller = require('../controllers/productcontrollers');

class categoryApi {
    async criarCategory(req, res) {
        const  nome = req.body.nome;

        try {
            const category = await controller.criarCategory(nome, descricao);
            res.status(201).json(category);
        } catch (error) {
            console.error('Error creating category:', error);
            res.status(500).json({ error: 'Internal server error' });
        }   
    }
}  

module.exports = new categoryApi();