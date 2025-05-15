const controller = require('../controllers/productcontrollers');

class productApi {
    async criarproduct(req, res) {
        const  nome = req.body.nome;
        const  price = req.body.price;

        try {
            const product = await controller.criarproduct(nome, price, preco, categoria, imagem);
            res.status(201).json(product);
        } catch (error) {
            console.error('Error creating product:', error);
            res.status(500).json({ error: 'Internal server error' });
        }   
    }
}

module.exports = new productApi();