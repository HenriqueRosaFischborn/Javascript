const express = require('express');
const router = express.Router();
const siteController = require('../controllers/clientesController');



router.get('/', siteController.clientes)



module.exports = router;