const express = require('express');
const UserController = require('../controller/UserController');
const router = express.Router();

// UUID ROUTE 
router.get('/user', UserController.getUser);

router.get('/user/:uuid', UserController.getUser);

module.exports = router;