const Router = require('express').Router;
const userApi = require('../api/user');

const router = Router();

router.post('/', userApi.criaruser);

module.exports = router;