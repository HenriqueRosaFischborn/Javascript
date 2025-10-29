const express = require('express');
const router = express.Router();
const siteController = require('../controllers/clientesController');



router.get('/', siteController.clientes)

router.get('/login', siteController.login)

router.post('/login', siteController.formulario)

module.exports = router;