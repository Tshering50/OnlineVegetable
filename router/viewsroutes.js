const express = require('express')
const viewController = require('../controller/viewsController')
const router = express.Router()

router.get("/",viewController.getIndex);

router.get("/register",viewController.getRegisterform);



module.exports = router
