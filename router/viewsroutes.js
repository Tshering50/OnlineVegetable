const express = require('express')
const viewController = require('../controller/viewsController')
const router = express.Router()

router.get("/index",viewController.getIndex);




module.exports = router
