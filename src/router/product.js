const Router = require('express').Router;
const productApi = require('../api/product');

const router = Router();
// Route to create a new product
router.post('/', productApi.criarproduct);

module.exports = router;