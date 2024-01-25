const express = require('express')
const userController = require('../controller/userController');

const router = express.Router()

router.post('/register',userController.registerUser);
router.post('/login',userController.loginUser);
router.post('/updateUser',userController.updateUser);

module.exports = router;