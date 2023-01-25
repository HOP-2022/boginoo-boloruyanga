const express = require("express");
const linkRouter = express.Router();
const { getLinks, createLink, getLink } = require("../controller/links");
const protect = require("../middleware/middleware");

linkRouter.route("/").get(getLinks).post(protect, createLink);
linkRouter.route("/:id").get(getLink);

module.exports = linkRouter;
