const express = require('express')
const viewController = require('../controller/viewsController')
const router = express.Router()

router.get("/",viewController.getIndex);




module.exports = router
