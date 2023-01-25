const express = require("express");
const userRouter = express.Router();
const { login, register } = require("../controller/userController");
// const protect = require("../middleware/middleware");

userRouter.route("/login").post(login);
userRouter.route("/register").post(register);

module.exports = userRouter;
