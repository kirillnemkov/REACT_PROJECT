const express = require("express");
const indexRouter = express.Router();
const IndexController = require("../controllers/indexController");

indexRouter.get('/', IndexController.index)


module.exports = indexRouter;
