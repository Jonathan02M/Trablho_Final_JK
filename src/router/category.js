const Router = require('express').Router;
const categoryApi = require('../api/category');

const router = Router();

router.post('/', categoryApi.criarCategory);

module.exports = router;